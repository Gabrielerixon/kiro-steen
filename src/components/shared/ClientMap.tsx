// src/components/shared/ClientMap.tsx
'use client';

import dynamic from 'next/dynamic';

// Loading component with proper sizing
const LoadingMap = () => (
  <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center shadow-md" style={{ minHeight: '320px' }}>
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-2"></div>
      <span className="text-gray-600 text-sm">Laddar karta...</span>
    </div>
  </div>
);

// Dynamically import MapClient with proper SSR handling
const MapWithNoSSR = dynamic(
  () => import('@/components/shared/MapClient'),
  {
    ssr: false,
    loading: () => <LoadingMap />
  }
);

export default function ClientMap() {
  return (
    <div className="w-full">
      <MapWithNoSSR
        center={[57.7825, 14.1705]} // Exact clinic location
        mapCenter={[57.7825, 14.1705]} // Center the map on the clinic
        zoom={16}
        popupContent="<strong>Kiropraktorerna i Jönköping</strong><br />Östra Storgatan 8<br />553 21 Jönköping"
      />
    </div>
  );
}