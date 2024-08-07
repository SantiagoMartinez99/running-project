import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

interface Marker {
  id: number;
  position: {
    lat: number;
    lng: number;
  };
}

import { SetStateAction, useState } from "react";
const markers = [
  {
    id: 1,
    name: "Parque Simón Bolívar",
    position: { lat: 4.662982, lng: -74.098842 },
  },
  {
    id: 2,
    name: "Parque Nacional",
    position: { lat: 4.605632, lng: -74.073573 },
  },
  {
    id: 3,
    name: "Parque de Usaquén",
    position: { lat: 4.691252, lng: -74.030354 },
  },
];

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.GOOGLE_MAPS_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker: Marker) => {
    setActiveMarker((prevMarker) => {
      if (marker.id === prevMarker) {
        return null;
      }
      return null; 
    });
  };

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      {isLoaded ? (
        <GoogleMap
          center={{ lat: 4.658888153423083, lng: -74.0953921801869 }}
          zoom={12}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {markers.map(({ id, name, position }) => (
            <MarkerF
              key={id}
              position={position}
              onClick={() => handleActiveMarker(id)}
            >
              {activeMarker === id ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div className="text-black">{name}</div>
                </InfoWindowF>
              ) : null}
            </MarkerF>
          ))}
        </GoogleMap>
      ) : null}
    </div>
  );
}
