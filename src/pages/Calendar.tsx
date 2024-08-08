import CalendarBox from "../components/CalendarBox";
import Header from "../components/Header";
// import RouteMapImg from "../assets/calendar/routeMap.svg";
import Footer from "../components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getMonth } from "../utils/globalFunctions";

type Event = {
  id?: string;
  DAY: number;
  DISTANCE: string;
  LINK: string;
  MONTH: string;
  NAME: string;
  PLACE: string;
  RACETYPE: string;
};

function Calendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const currentMonth: string = getMonth();
  const [filters, setFilters] = useState({
    month: "",
    distance: "",
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      month: currentMonth,
      distance: "",
    });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "Races"));
      const eventsArray = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Event)
      );
      eventsArray.sort((a, b) => a.DAY - b.DAY);
      setEvents(eventsArray);
    };
    fetchEvents();
    console.log(events);
  }, []);

  useEffect(() => {
    const filtered = events.filter((event) => {
      const monthMatch = filters.month
        ? event.MONTH.toLocaleUpperCase() === filters.month
        : true;
      const distanceMatch = filters.distance
        ? event.DISTANCE === filters.distance
        : true;
      return monthMatch && distanceMatch;
    });
    setFilteredEvents(filtered);
    console.log(filteredEvents);
  }, [events, filters]);

  return (
    <>
      <Header />

      <div className="flex flex-col w-full pl-14 my-10 justify-between gap-5">
        <h1>
          <span className=" text-5xl md:text-8xl font-bold text-secondary italic">
            CARRERAS
          </span>
          <span
            className="underline text-4xl md:text-7xl font-bold text-accent  w-fit italic"
            style={{ textDecorationThickness: "5px" }}
          >
            2024
          </span>
          {/* <span className="w-3/4 h-1 bg-accent flex md:-translate-y-4 xl:translate-x-56"></span> */}
        </h1>
        {/* <img
          className="w-2/12 -translate-y-10"
          src={RouteMapImg}
          alt="Mapa de rutas"
        /> */}
        <div className="display flex gap-10">
          <p className="text-primary italic text-2xl pr-5"> Filtrar por:</p>

          <select
            name="month"
            onChange={handleFilterChange}
            value={filters.month}
            className="w-48"
          >
            <option hidden value="">
              Mes
            </option>
            <option value="ENERO">Enero</option>
            <option value="FEBRERO">Febrero</option>
            <option value="MARZO">Marzo</option>
            <option value="ABRIL">Abril</option>
            <option value="MAYO">Mayo</option>
            <option value="JUNIO">Junio</option>
            <option value="JULIO">Julio</option>
            <option value="AGOSTO">Agosto</option>
            <option value="SEPTIEMBRE">Septiembre</option>
            <option value="OCTUBRE">Octubre</option>
            <option value="NOVIEMBRE">Noviembre</option>
            <option value="DICIEMBRE">Diciembre</option>
          </select>

          {/* <select
            name="raceType"
            value={filters.raceType}
            onChange={handleFilterChange}
            className="w-48"
          >
            <option disabled selected>
              Tipo de Carrera
            </option>
            <option value="calle">Calle</option>
            <option value="trail">Trail</option>
          </select> */}

          <select
            name="distance"
            value={filters.distance}
            onChange={handleFilterChange}
            className="w-48"
          >
            <option hidden value="">
              Distancia
            </option>
            <option value="5K">5K</option>
            <option value="10K">10K</option>
            <option value="15K">15K</option>
            <option value="21K">21K</option>
            <option value="42K">42K</option>
          </select>
        </div>
        <div>
          <p
            className="underline text-xl font-bold hover:cursor-pointer"
            onClick={handleClearFilters}
          >
            Limpiar filtros
          </p>
          <p>{filters.month}</p>
        </div>
      </div>

      <CalendarBox
        title={"CALLE"}
        color={"neutral"}
        orientation={"left"}
        filteredEvents={filteredEvents}
      />
      <CalendarBox
        title={"TRAIL"}
        color={"primary"}
        orientation={"right"}
        filteredEvents={filteredEvents}
      />
      {/* <CalendarBox title={"TRIATLÓN"} color={"accent"} orientation={"left"} /> */}
      <Footer />
    </>
  );
}

export default Calendar;
