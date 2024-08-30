import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MapComponent from "../components/MapComponent";
import { db } from "../firebase";

function Tracks() {
  const [tracks, setTracks] = useState<Track[]>([]);

  interface Track {
    id?: string;
    ADDRESS: string;
    CITY: string;
    LAT: string;
    LON: string;
    NAME: string;
  }

  useEffect(() => {
    const fetchTracks = async () => {
      const q = query(collection(db, "tracks"));
      const querySnapshot = await getDocs(q);
      const tracksArray = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Track;
        return {
          id: doc.id,
          ADDRESS: data.ADDRESS,
          CITY: data.CITY,
          LAT: data.LAT,
          LON: data.LON,
          NAME: data.NAME,
        };
      });
      setTracks(tracksArray);
    };
    fetchTracks();
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className="mx-14 py-10 ">
          <h1 className="text-5xl md:text-8xl font-bold text-secondary italic">
            PISTAS
          </h1>
          <span className="h-1 bg-accent flex"></span>
        </div>

        <div className="flex gap-20 mb-10 ">
          <div className="flex flex-col  bg-primary text-white rounded-tr-xl w-1/2 ">
            <h1 className="text-4xl font-bold italic border-b-2 border-white text-center p-5 h-20">
              PISTAS EN BOGOTÁ
            </h1>
            <div className="h-[40rem] overflow-auto">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className="border-b-2 border-white my-2 py-4 px-6"
                >
                  <h2 className="text-3xl">{track.NAME}</h2>
                  <p className="text-xl italic text-gray-200">
                    Ubicación: {track.ADDRESS}
                  </p>
                  <p className="text-xl italic text-gray-200">
                    Ciudad: {track.CITY}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent text-white text-center p-5 rounded-md  justify-center w-1/2 ">
            <MapComponent tracks={tracks} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tracks;
