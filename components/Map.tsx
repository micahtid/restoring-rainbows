"use client";

import { DocumentData } from 'firebase/firestore';
import { useEffect, useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useData } from '@/providers/useData';

import 'leaflet/dist/leaflet.css';

const DynamicMapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const DynamicTileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const DynamicMarker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const DynamicPopup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const Map: React.FC = () => {
  const { branches } = useData();
  const [isClient, setIsClient] = useState(false);
  const [blueDotIcon, setBlueDotIcon] = useState<any>(null);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  const handleMarkerClick = useCallback((city: string) => {
    console.log('Clicked City:', city);
  }, []);

  useEffect(() => {
    setIsClient(true);

    const loadLeaflet = async () => {
      if (typeof window !== 'undefined') {
        try {
          const L = await import('leaflet');

          const icon = L.divIcon({
            className: 'custom-blue-dot',
            html: '<div style="background-color: #0339f8; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          });

          setBlueDotIcon(icon);
          setLeafletLoaded(true);
        } catch (error) {
          console.error('Failed to load Leaflet:', error);
        }
      }
    };

    loadLeaflet();
  }, []);

  const markers = useMemo(() => {
    if (!branches || !blueDotIcon) return null;

    return branches.map((branch, index) => (
      <DynamicMarker
        key={`${branch.city}-${branch.lat}-${branch.lng}`}
        position={[branch.lat, branch.lng]}
        icon={blueDotIcon}
        eventHandlers={{
          click: () => handleMarkerClick(branch.city)
        }}
      >
        <DynamicPopup>{branch.city}</DynamicPopup>
      </DynamicMarker>
    ));
  }, [branches, blueDotIcon, handleMarkerClick]);

  if (!isClient || !leafletLoaded) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className='w-full h-full'>
      <DynamicMapContainer
        center={[51.509865, -0.118092]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <DynamicTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers}
      </DynamicMapContainer>
    </div>
  );
};

export default Map;