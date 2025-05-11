'use client';

import { useEffect, useRef } from 'react';

// Definiera interface för props
interface MapClientProps {
  center: [number, number];
  mapCenter?: [number, number]; // mapCenter är nu optionell
  zoom: number;
  popupContent?: string;
}

export default function MapClient({ center, mapCenter, zoom, popupContent }: MapClientProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    const loadMap = async () => {
      try {
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');

        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        });

        if (!mapRef.current) return;

        // Använd mapCenter för kartans vy om det är angivet, annars använd nålens position (center)
        const viewCenterToUse = mapCenter || center;
        const map = L.map(mapRef.current).setView(viewCenterToUse, zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19
        }).addTo(map);

        const marker = L.marker(center).addTo(map); // Markören placeras alltid vid 'center'

        if (popupContent) {
          const popup = L.popup({
            offset: L.point(0,0), // Borttagen för att använda Leaflets standardpositionering
            autoPan: true,
            closeOnClick: false
          }).setContent(popupContent);

          marker.bindPopup(popup).openPopup();
        }

        return () => {
          map.remove();
        };
      } catch (error) {
        console.error('Failed to load map:', error);
      }
    };

    loadMap();
  }, [center, mapCenter, zoom, popupContent]);

  return <div ref={mapRef} className="h-80 rounded-lg shadow-md" />;
}