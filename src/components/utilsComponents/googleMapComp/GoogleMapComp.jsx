'use client';

import { GoogleMap, useLoadScript } from '@react-google-maps/api';

// .env.local :
// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyBrCrjRfk1E-9dVNY2pu7xYFnGydgLAt9A"
const GoogleMapComp = () => {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // 
  });

  if(!isLoaded) return <div>Loading...</div>

  const mapContainer = {
    width: '100%',
    height: '100%'
  };

  return (
    <GoogleMap
      zoom={16}
      center={{lat: 22.28577178965085, lng: 114.21729628842245}}
      mapContainerStyle={mapContainer}
    ></GoogleMap>
  )
}
export default GoogleMapComp