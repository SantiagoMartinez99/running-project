import { Link } from "react-router-dom";
import BannerCalendarSvg from "../assets/banners/BannerCalendar2.png";
import RaceBox from "./RaceBox";
import { db } from "../firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Event {
  id?: string;
  DAY: number;
  DISTANCE: string;
  LINK: string;
  MONTH: string;
  NAME: string;
  PLACE: string;
}

const eventsData = [
  {
    DAY: 1,
    DISTANCE: "2K, 5K, 10K, 15K",
    LINK: "https://www.crazyrunners.co/",
    MONTH: "Diciembre",
    NAME: "CRAZY RUNNERS 15K",
    PLACE: "Gran Malecón, Barranquilla",
    RACETYPE: "CALLE",
  },
  {
    DAY: 1,
    DISTANCE: "42K",
    LINK: "https://www.vchallenges.co/2024/challenge/details/vchallenges42k",
    MONTH: "Diciembre",
    NAME: "42K VCHALLENGES",
    PLACE: "Bogota",
    RACETYPE: "CALLE",
  },
  {
    DAY: 1,
    DISTANCE: "5K, 10K, 21K",
    LINK: "https://www.eventrid.com.co/eventos/prsports/media-maraton-manizales-mmm-2024",
    MONTH: "Diciembre",
    NAME: "MEDIA MARATON DE MANIZALES",
    PLACE: "Manizales",
    RACETYPE: "CALLE",
  },
  {
    DAY: 3,
    DISTANCE: "5K",
    LINK: "https://www.eventrid.com.co/eventos/fundacionjeisonaristizabal/maraton-de-suenos-2024",
    MONTH: "Diciembre",
    NAME: "MARATON DE SUEÑOS",
    PLACE: "Cali",
    RACETYPE: "CALLE",
  },
  {
    DAY: 15,
    DISTANCE: "5K, 10K",
    LINK: "https://grupomonte.com/eventos/carrera-internacional-rio-cali/",
    MONTH: "Diciembre",
    NAME: "CARRERA INTERNACIONAL RIO CALI",
    PLACE: "Cali",
    RACETYPE: "CALLE",
  },
  {
    DAY: 15,
    DISTANCE: "10K",
    LINK: "https://www.eventrid.com.co/eventos/10klamonumental/la-monumental-10k-2024",
    MONTH: "Diciembre",
    NAME: "LA MONUMENTAL 10K",
    PLACE: "Cienaga, Magdalena",
    RACETYPE: "CALLE",
  },
  {
    DAY: 28,
    DISTANCE: "5K, 10K",
    LINK: "https://www.2george.com.co/evento/carrera-san-silvestre-cartagena-2024",
    MONTH: "Diciembre",
    NAME: "CARRERA SAN SILVESTRE CARTAGENA",
    PLACE: "Cartagena",
    RACETYPE: "CALLE",
  },
];
function BannerCalendar() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "Races"));
      const eventsArray = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Event)
      );
      setEvents(eventsArray);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const addEvents = async () => {
      const eventsCollection = collection(db, "Races");
      try {
        for (const event of eventsData) {
          const q = query(
            eventsCollection,
            where("NAME", "==", event.NAME),
            where("DAY", "==", event.DAY)
          );
          const querySnapshot = await getDocs(q);

          if (querySnapshot.empty) {
            await addDoc(eventsCollection, event);
          }
        }
        console.log("All events added successfully!");
        const querySnapshot = await getDocs(eventsCollection);
        const eventsArray = querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Event)
        );
        setEvents(eventsArray);
      } catch (e) {
        console.error("Error adding documents: ", e);
      }
    };

    addEvents(); 
  }, []); 

  return (
    <>
      <div
        className="flex-col bg-cover bg-no-repeat mt-20 py-10 items-center"
        style={{
          backgroundImage: `url(${BannerCalendarSvg})`,
        }}
      >
        <div className="flex w-full lg:justify-end px-14">
          <span>
            <h1 className=" text-6xl md:text-8xl font-bold text-secondary">
              PRÓXIMAS
            </h1>
            <h1 className=" text-5xl md:text-7xl font-bold text-accent md:-translate-y-4 xl:translate-x-28 w-fit">
              CARRERAS
            </h1>
            <span className="w-3/4 h-1 bg-accent flex md:-translate-y-4 xl:translate-x-28"></span>
          </span>
        </div>
        <div className="flex w-full my-24 justify-center">
          <div className="lg:flex justify-around">
            <RaceBox color={"secondary"} type={"calle"} />
            <RaceBox color={"accent"} type={"trail"} />
            <RaceBox color={"neutral"} type={"triatlón"} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={"/calendar"}>
          <button className="bg-neutral italic text-white text-center -translate-y-10 text-lg p-5 rounded-lg">
            VER TODAS LAS CARRERAS
          </button>
        </Link>
      </div>
    </>
  );
}

export default BannerCalendar;
