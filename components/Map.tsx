'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const center = { lat: 37.7749, lng: -122.4194 }

export function MapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}
