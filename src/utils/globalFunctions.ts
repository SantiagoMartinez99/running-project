export const getMonth = (): string => {
  return new Date().toLocaleString("default", { month: "long" }).toUpperCase();
};

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