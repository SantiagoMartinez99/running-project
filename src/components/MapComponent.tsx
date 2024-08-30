import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

// interface Marker {
//   id: number;
//   position: {
//     lat: number;
//     lng: number;
//   };
// }
interface Track {
  id?: string;
  ADDRESS: string;
  CITY: string;
  LAT: string;
  LON: string;
  NAME: string;
}

interface MapProps {
  tracks: Track[];
}

import { useState } from "react";

export default function MapComponent({ tracks }: MapProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.GOOGLE_MAPS_KEY,
  });

  const [activeMarker, setActiveMarker] = useState<string | null>(null);

 const handleActiveMarker = (track: Track) => {
    if (track.NAME === activeMarker) {
      setActiveMarker(null); 
    } else {
      setActiveMarker(track.NAME); 
    }
  };

  return (
    <div className="w-1/2" style={{ height: "100%", width: "100%" }}>
      {isLoaded ? (
        <GoogleMap
          center={{ lat: 4.658888153423083, lng: -74.0953921801869 }}
          zoom={12}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {tracks.map((track) => {
            const position = {
              lat: parseFloat(track.LAT),
              lng: parseFloat(track.LON),
            };

            return (
              <MarkerF
                key={track.NAME}
                position={position}
                onClick={() => handleActiveMarker(track)}
              >
                {activeMarker === track.NAME ? (
                   <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                   <div className="text-black">
                     <p className="italic">{track.NAME}</p>
                     <p className="italic">{track.ADDRESS}</p>
                     <p className="italic">{track.CITY}</p>
                   </div>
                 </InfoWindowF>
                ) : null}
              </MarkerF>
            );
          })}
        </GoogleMap>
      ) : null}
    </div>
  );
}
