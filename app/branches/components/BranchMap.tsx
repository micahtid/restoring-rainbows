"use client";

import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// VERCEL FIX: Import Leaflet CSS at the top level - CSS imports are safe for SSR
import 'leaflet/dist/leaflet.css';

// VERCEL FIX: Dynamically import react-leaflet components with SSR disabled
// This prevents "window is not defined" errors during server-side rendering
const DynamicMapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false } // VERCEL FIX: Disable SSR for this component
);

const DynamicTileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false } // VERCEL FIX: Disable SSR for this component
);

const DynamicMarker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false } // VERCEL FIX: Disable SSR for this component
);

const DynamicPopup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false } // VERCEL FIX: Disable SSR for this component
);

interface BranchMapProps {
  branches: DocumentData[] | null;
}

const BranchMap: React.FC<BranchMapProps> = ({ branches }) => {
  // VERCEL FIX: Client-side state management to prevent SSR issues
  const [isClient, setIsClient] = useState(false);
  const [redDotIcon, setRedDotIcon] = useState<any>(null);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  useEffect(() => {
    // VERCEL FIX: Set client-side flag to prevent hydration mismatches
    setIsClient(true);
    
    // VERCEL FIX: Dynamically import Leaflet library only on client-side
    const loadLeaflet = async () => {
      if (typeof window !== 'undefined') {
        // VERCEL FIX: Dynamic import prevents "window is not defined" during SSR
        const L = await import('leaflet');
        
        const icon = L.divIcon({
          className: 'custom-red-dot',
          html: '<div style="background-color: #e53e3e; width: 8px; height: 8px; border-radius: 50%; border: 1px solid white;"></div>',
          iconSize: [8, 8],
          iconAnchor: [4, 4],
        });
        
        setRedDotIcon(icon);
        setLeafletLoaded(true);
      }
    };

    loadLeaflet();
  }, []);

  const handleMarkerClick = (city: string) => {
    console.log('Clicked City:', city);
  };

  // VERCEL FIX: Show loading state until both client hydration and Leaflet are ready
  if (!isClient || !leafletLoaded) {
    return (
      <div className='max-w-max w-full mx-auto mt-10 mb-24 h-[500px] px-4 fade-in-animation flex items-center justify-center'>
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className='max-w-max w-full mx-auto mt-10 mb-24 h-[500px] px-4 fade-in-animation'>
      {/* VERCEL FIX: Using dynamically imported components prevents SSR issues */}
      <DynamicMapContainer
        center={[51.509865, -0.118092]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <DynamicTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {branches?.map((branch, index) => (
          <DynamicMarker
            key={index}
            position={[branch.lat, branch.lng]}
            icon={redDotIcon}
            eventHandlers={{
              click: () => handleMarkerClick(branch.city)
            }}
          >
            <DynamicPopup>{branch.city}</DynamicPopup>
          </DynamicMarker>
        ))}
      </DynamicMapContainer>
    </div>
  );
};

export default BranchMap;
