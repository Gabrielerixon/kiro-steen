// src/components/shared/ClientMap.tsx
'use client';

import dynamic from 'next/dynamic';

// Definiera laddningskomponenten
const LoadingMap = () => (
  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center h-80">
    <span className="text-gray-600">Laddar karta...</span>
  </div>
);

// Dynamiskt importera MapClient
const MapWithNoSSR = dynamic(
  () => import('@/components/shared/MapClient'),
  {
    ssr: false,
    loading: () => <LoadingMap />
  }
);

export default function ClientMap() {
  const pinPosition = [57.7825, 14.1705]; // Korrekt position för pin
  // Justera kartvyn för att ge plats åt popupen, flytta kartans mittpunkt något söder om pinen
  const adjustedMapCenter = [57.7810, 14.1705]; // Justerad Y-koordinat för kartans centrum

  return (
    <MapWithNoSSR
      center={[57.7825, 14.1705]} // Nålens faktiska position
      mapCenter={[57.783, 14.1705]} // Kartans önskade visuella mittpunkt
      zoom={16}
      popupContent="<strong>Kiropraktorerna i Jönköping</strong><br />Östra Storgatan 8<br />553 21 Jönköping"
    />
  );
}