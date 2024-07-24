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
  RACETYPE:string;
};

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

  const currentMonth = new Date().toLocaleString('default', { month: 'long' }).toUpperCase();
  console.log(currentMonth)

  return (
    <div className={`flex ${justifyContent} pb-10`}>
      <div className={`bg-${color} w-5/6 p-10`}>
        <h1 className={`flex ${justifyContent} text-6xl text-white font-bold italic mb-5 underline`}>
          {title}
        </h1>
        <div className="bg-white px-10 py-2">
          <div className={`grid grid-cols-6 underline font-bold text-xl`}>
            <div>MES</div>
            <div>DIA</div>
            <div>CARRERA</div>
            <div>LUGAR</div>
            <div>DISTANCIA</div>
            <div>LINK</div>
          </div>
        </div>
        {events
          .filter(event => event.MONTH.toUpperCase() === currentMonth && event.RACETYPE === 'CALLE')
          .map((race, index) => (
          <div key={index} className="grid grid-cols-6 uppercase underline bg-white py-2 px-10">
            <p>{race.MONTH}</p>
            <p>{race.DAY}</p>
            <p>{race.NAME}</p>
            <p>{race.PLACE}</p>
            <p>{race.DISTANCE}</p>
            <p>
              <a href={race.LINK} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarBox;
