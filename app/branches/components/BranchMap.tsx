"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { DocumentData } from 'firebase/firestore';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom red dot marker
const redDotIcon = L.divIcon({
  className: 'custom-red-dot',
  html: '<div style="background-color: #e53e3e; width: 8px; height: 8px; border-radius: 50%; border: 1px solid white;"></div>',
  iconSize: [8, 8],
  iconAnchor: [4, 4],
});


interface BranchMapProps {
  branches: DocumentData[] | null;
}

const BranchMap: React.FC<BranchMapProps> = ({ branches }) => {
  const handleMarkerClick = (city: string) => {
    console.log('Clicked City:', city);
  };

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
