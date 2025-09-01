"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

let L: any;

if (typeof window !== 'undefined') {
  L = require('leaflet');
}


interface BranchMapProps {
  branches: DocumentData[] | null;
}

const BranchMap: React.FC<BranchMapProps> = ({ branches }) => {
  const [isClient, setIsClient] = useState(false);
  const [redDotIcon, setRedDotIcon] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined' && L) {
      const icon = L.divIcon({
        className: 'custom-red-dot',
        html: '<div style="background-color: #e53e3e; width: 8px; height: 8px; border-radius: 50%; border: 1px solid white;"></div>',
        iconSize: [8, 8],
        iconAnchor: [4, 4],
      });
      setRedDotIcon(icon);
    }
  }, []);

  const handleMarkerClick = (city: string) => {
    console.log('Clicked City:', city);
  };

  if (!isClient) {
    return (
      <div className='max-w-max w-full mx-auto mt-10 mb-24 h-[500px] px-4 fade-in-animation flex items-center justify-center'>
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className='max-w-max w-full mx-auto mt-10 mb-24 h-[500px] px-4
    fade-in-animation'>
      <MapContainer
        center={[51.509865, -0.118092]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {branches?.map((branch, index) => (
          <Marker
            key={index}
            position={[branch.lat, branch.lng]}
            icon={redDotIcon}
            eventHandlers={{
              click: () => handleMarkerClick(branch.city)
            }}
          >
            <Popup>{branch.city}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BranchMap;
