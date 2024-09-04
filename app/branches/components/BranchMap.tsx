"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useData } from '@/providers/useData';

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  

const BranchMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDmKrYRHIl-efX8ZoEMgSIJM6jjaQD_-2c"
      });
    

    const {
        branches
    } = useData();

  return (
    <div className='w-full h-[500px]'>
        {isLoaded && (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{lat: 51.509865, lng: -0.118092}}
                zoom={2} 
            >
                {branches?.map((branch, index) => (
                <MarkerF key={index} position={{lat: branch.lat, lng: branch.lng}} />
                ))}
            </GoogleMap>
        )}
    </div>
  )
}

export default BranchMap