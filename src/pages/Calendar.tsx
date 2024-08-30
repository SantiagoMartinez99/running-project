import Header from "../components/Header";
// import RouteMapImg from "../assets/calendar/routeMap.svg";
import firebase from "firebase/compat/app";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { db } from "../firebase";
import { getMonth } from "../utils/globalFunctions";
import CalendarBox from "../components/CalendarBox";
import FormInfo from "../components/FormInfo";

type Event = {
  id?: string;
  DATE: firebase.firestore.Timestamp;
  DISTANCE: string;
  LINK: string;
  NAME: string;
  PLACE: string;
  RACETYPE: string;
  LISTED: boolean;
  DAY: number;
  MONTH: string;
  YEAR: number;
};

function Calendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const currentMonth: string = getMonth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    month: currentMonth,
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
      month: "",
      distance: "",
    });
  };

  function getMonthName(monthIndex: number): string {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return months[monthIndex] || "";
  }

  useEffect(() => {
    const fetchEvents = async () => {
      // Consulta con ordenamiento por fecha
      const q = query(collection(db, "Races"), orderBy("DATE"));
      const querySnapshot = await getDocs(q);
      const eventsArray = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Event;
        const timestamp = data.DATE.toDate();
        const day = timestamp.getDate();
        const month = getMonthName(timestamp.getMonth());
        const year = timestamp.getFullYear();

        return {
          id: doc.id,
          DATE: data.DATE,
          DISTANCE: data.DISTANCE,
          LINK: data.LINK,
          NAME: data.NAME,
          PLACE: data.PLACE,
          RACETYPE: data.RACETYPE,
          LISTED: data.LISTED,
          DAY: day,
          MONTH: month,
          YEAR: year,
        };
      });

      setEvents(eventsArray);
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const filtered = events.filter((event) => {
      const monthMatch = filters.month
        ? event.MONTH.toUpperCase() === filters.month.toUpperCase()
        : true;
      const distanceMatch = filters.distance
        ? event.DISTANCE.toUpperCase() === filters.distance
        : true;
      return monthMatch && distanceMatch;
    });
    setFilteredEvents(filtered);
    console.log(filteredEvents);
  }, [events, filters]);

  return (
    <>
      <Header />
      <FormInfo />
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
            className="underline text-xl font-bold hover:cursor-pointer w-fit"
            onClick={handleClearFilters}
          >
            Limpiar filtros
          </p>
        </div>
      </div>

      <CalendarBox
        title={"CALLE"}
        color={"neutral"}
        orientation={"left"}
        filteredEvents={filteredEvents}
        isLoading={isLoading}
      />
      <CalendarBox
        title={"TRAIL"}
        color={"primary"}
        orientation={"right"}
        filteredEvents={filteredEvents}
        isLoading={isLoading}
      />
      {/* <CalendarBox title={"TRIATLÓN"} color={"accent"} orientation={"left"} /> */}
      <Footer />
    </>
  );
}

export default Calendar;
