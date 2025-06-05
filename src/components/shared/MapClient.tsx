'use client';

import { useEffect, useRef } from 'react';

// Define interface for props
interface MapClientProps {
  center: [number, number];
  mapCenter?: [number, number];
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

        // FIX 1: Properly configure default icons for Next.js
        // @ts-expect-error - Leaflet typings issue with _getIconUrl
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],  // Point of the icon which will correspond to marker's location
          popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
          shadowSize: [41, 41]
        });

        if (!mapRef.current) return;

        // FIX 2: Use proper map center configuration
        const viewCenterToUse = mapCenter || center;
        const map = L.map(mapRef.current, {
          // Additional map options for better control
          preferCanvas: false,
          attributionControl: true,
          zoomControl: true
        }).setView(viewCenterToUse, zoom);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19
        }).addTo(map);

        // FIX 3: Create marker with proper popup configuration
        const marker = L.marker(center).addTo(map);

        if (popupContent) {
          // FIX 4: Create popup with correct positioning
          const popup = L.popup({
            // Remove offset completely - let the iconAnchor/popupAnchor handle positioning
            autoPan: true,
            autoPanPaddingTopLeft: [10, 10],
            autoPanPaddingBottomRight: [10, 10],
            closeButton: false,
            autoClose: false,
            closeOnClick: false,
            className: 'custom-popup'
          }).setContent(popupContent);

          marker.bindPopup(popup);
          
          // FIX 5: Open popup after a small delay to ensure proper rendering
          setTimeout(() => {
            marker.openPopup();
          }, 100);
        }

        // FIX 6: Handle container resizing
        const resizeObserver = new ResizeObserver(() => {
          map.invalidateSize();
        });
        
        if (mapRef.current) {
          resizeObserver.observe(mapRef.current);
        }

        // Cleanup function
        return () => {
          resizeObserver.disconnect();
          map.remove();
        };
      } catch (error) {
        console.error('Failed to load map:', error);
      }
    };

    loadMap();
  }, [center, mapCenter, zoom, popupContent]);

  return (
    <div 
      ref={mapRef} 
      className="h-80 rounded-lg shadow-md w-full"
      style={{ minHeight: '320px' }} // FIX 7: Ensure minimum height for proper rendering
    />
  );
}