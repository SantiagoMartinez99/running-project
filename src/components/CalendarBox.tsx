import { db } from "../firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

type CalendarBoxProps = {
  title: string;
  color: string;
  orientation: string;
  // data: [];
};

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

// const eventsData: Event[] = [

// ];

function CalendarBox({ title, color, orientation }: CalendarBoxProps) {
  const justifyContent =
    orientation === "left" ? "justify-start" : "justify-end";

  const [events, setEvents] = useState<Event[]>([]);

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
  }, []);

  // useEffect(() => {
  //   const addEvents = async () => {
  //     const eventsCollection = collection(db, "Races");
  //     try {
  //       for (const event of eventsData) {
  //         const q = query(
  //           eventsCollection,
  //           where("NAME", "==", event.NAME),
  //           where("DAY", "==", event.DAY)
  //         );
  //         const querySnapshot = await getDocs(q);

  //         if (querySnapshot.empty) {
  //           await addDoc(eventsCollection, event);
  //         }
  //       }
  //       console.log("All events added successfully!");
  //       const querySnapshot = await getDocs(eventsCollection);
  //       const eventsArray = querySnapshot.docs.map(
  //         (doc) => ({ id: doc.id, ...doc.data() } as Event)
  //       );
  //       setEvents(eventsArray);
  //     } catch (e) {
  //       console.error("Error adding documents: ", e);
  //     }
  //   };

  //   addEvents();
  // }, []);

  const currentMonth = new Date()
    .toLocaleString("default", { month: "long" })
    .toUpperCase();

  return (
    <div className={`flex ${justifyContent} pb-10`}>
      <div className={`bg-${color} w-5/6 p-10`}>
        <h1
          className={`flex ${justifyContent} text-6xl text-white font-bold italic mb-5 underline`}
        >
          {title}
        </h1>
        <div className="bg-white px-10 py-2">
          <div className={`grid grid-cols-6 underline font-bold text-xl`}>
            <div className="truncate">MES</div>
            <div className="truncate">DIA</div>
            <div className="truncate">CARRERA</div>
            <div className="truncate">LUGAR</div>
            <div className="truncate">DISTANCIA</div>
            <div className="truncate">LINK</div>
          </div>
        </div>
        <div className="h-96 overflow-auto bg-white py-2 space-y-2 px-10">
          {events
            .filter(
              (event) =>
                event.MONTH.toUpperCase() === currentMonth &&
                event.RACETYPE === title.toUpperCase()
            )
            .map((race, index) => (
              <div
                key={index}
                className="grid grid-cols-6 uppercase  bg-white py-2 font-bold italic text-xl"
              >
                <p className="truncate px-2">{race.DAY}</p>
                <p className="truncate px-2">{race.MONTH}</p>
                <p className="truncate px-2">{race.NAME}</p>
                <p className="truncate px-2">{race.PLACE}</p>
                <p className="truncate px-2">{race.DISTANCE}</p>
                <p className="truncate px-2">
                  <a
                    href={race.LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`truncate text-${color} underline`}
                  >
                    Link
                  </a>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarBox;
