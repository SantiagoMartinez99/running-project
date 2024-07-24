import Header from "../components/Header";
import MapComponent from "../components/MapComponent";
function Tracks() {
  const data = [
    { name: "Pista 1", distancia: "1KM", ubicacion: "Bogotá D.C" },
    { name: "Pista 2", distancia: "400m", ubicacion: "Bogotá D.C" },
    { name: "Pista 3", distancia: "3.2KM", ubicacion: "Bogotá D.C" },
    { name: "Pista 4", distancia: "3.2KM", ubicacion: "Bogotá D.C" },
    { name: "Pista 5", distancia: "3.2KM", ubicacion: "Bogotá D.C" },
    { name: "Pista 6", distancia: "3.2KM", ubicacion: "Bogotá D.C" },
    { name: "Pista 7", distancia: "3.2KM", ubicacion: "Bogotá D.C" },
    { name: "Pista 8", distancia: "3.2KM", ubicacion: "Bogotá D.C" },
  ];
  return (
    <div className="max-h-80">
      <Header />
      <div className="mx-14 my-10">
        <h1 className="text-5xl md:text-8xl font-bold text-secondary italic">
          PISTAS
        </h1>
        <span className="h-1 bg-accent flex"></span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col bg-primary text-white rounded-tr-xl overflow-scroll h-3/4">
          <h1 className="border-b-2 border-white text-center p-5">
            PISTAS EN BOGOTA
          </h1>
          <div className="overflow-y-auto">
            {data.map((track, index) => (
              <div
                key={index}
                className="border-b-2 border-white my-2 py-4 px-6"
              >
                <h2>{track.name}</h2>
                <p>Distancia: {track.distancia}</p>
                <p>Ubicación: {track.ubicacion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent text-white text-center px-10 pt-10 italic rounded-md">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default Tracks;
