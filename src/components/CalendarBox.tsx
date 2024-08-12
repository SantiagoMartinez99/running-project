// import { getMonth } from "../utils/globalFunctions";

type CalendarBoxProps = {
  title: string;
  color: string;
  orientation: string;
  filteredEvents: Event[];
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

function CalendarBox({
  title,
  color,
  orientation,
  filteredEvents,
}: CalendarBoxProps) {
  // const currentMonth: string = getMonth();
  const justifyContent =
    orientation === "left" ? "justify-start" : "justify-end";

  //===================CODIGO PARA INSERTAR CARRERAS=========================================================

  // const [events, setEvents] = useState<Event[]>([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const querySnapshot = await getDocs(collection(db, "Races"));
  //     const eventsArray = querySnapshot.docs.map(
  //       (doc) => ({ id: doc.id, ...doc.data() } as Event)
  //     );
  //     eventsArray.sort((a, b) => a.DAY - b.DAY);
  //     setEvents(eventsArray);
  //   };
  //   fetchEvents();
  // }, []);

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

  const displayedEvents = filteredEvents.filter(
    (event) => event.RACETYPE.toUpperCase() === title.toUpperCase()
  );

  // const eventsToDisplay = filteredEvents.length
  //   ? displayedEvents
  //   : filteredEvents.filter(
  //       (event) => event.MONTH.toUpperCase() === currentMonth
  //     );

  return (
    <div className={`flex ${justifyContent} pb-10`}>
      <div className={`bg-${color} w-5/6 p-10`}>
        <h1
          className={`flex ${justifyContent} text-6xl text-white font-bold italic mb-5 underline`}
        >
          {title}
        </h1>

        <div className="bg-white py-2 ">
          <div className={`grid grid-cols-6 underline font-bold text-xl`}>
            <div className="truncate pl-10">MES</div>
            <div className="truncate">DIA</div>
            <div className="truncate">CARRERA</div>
            <div className="truncate">LUGAR</div>
            <div className="truncate">DISTANCIA</div>
            <div className="truncate">LINK</div>
          </div>
        </div>
        <div className="h-96 overflow-auto bg-white py-2 space-y-2">
          {displayedEvents.length ? (
            displayedEvents.map((race, index) => (
              <div
                key={index}
                className={`grid grid-cols-6 uppercase py-2 font-bold italic text-xl ${
                  index % 2 !== 0 ? "bg-white" : "bg-gray-200"
                }`}
              >
                <p className="truncate pl-10 ">{race.MONTH}</p>
                <p className="truncate ">{race.DAY}</p>
                <p className="truncate pr-10">{race.NAME}</p>
                <p className="truncate pr-10">{race.PLACE}</p>
                <p className="truncate pr-10">{race.DISTANCE}</p>
                <p className="truncate pr-10">
                  <a
                    href={race.LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${color} truncate underline`}
                  >
                    {race.LINK}
                  </a>
                </p>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col justify-center">
              <p className="text-3xl font-bold text-center ">
                No hay carreras para mostrar
              </p>
              <p className="text-2xl italic font-thin text-center">
                Por favor, intenta con otro mes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalendarBox;
