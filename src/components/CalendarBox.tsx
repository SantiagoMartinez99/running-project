// import { getMonth } from "../utils/globalFunctions";
import firebase from "firebase/compat/app";
type CalendarBoxProps = {
  title: string;
  color: string;
  orientation: string;
  filteredEvents: Event[];
  isLoading: boolean;
};

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

// const eventsData: Event[] = [

// ];

function CalendarBox({
  title,
  color,
  orientation,
  filteredEvents,
  isLoading,
}: CalendarBoxProps) {
  const justifyContent =
    orientation === "left" ? "justify-start" : "justify-end";

  const displayedEvents = filteredEvents.filter(
    (event) => event.RACETYPE.toUpperCase() === title.toUpperCase()
  );
  console.log(isLoading);

  // const eventsToDisplay = filteredEvents.length
  //   ? displayedEvents
  //   : filteredEvents.filter(
  //       (event) => event.MONTH.toUpperCase() === currentMonth
  //     );

  return (
    <div className={`flex ${justifyContent} pb-10`}>
      <div className={`bg-${color} w-full lg:w-5/6 p-10`}>
        <h1
          className={`flex ${justifyContent} text-6xl text-white font-bold italic mb-5 underline`}
        >
          {title}
        </h1>

        <div className="overflow-x-auto">
          <div className="max-h-96 overflow-y-auto">
            <table className="min-w-full table-fixed bg-white">
              <thead className="sticky top-0 bg-gray-100">
                <tr className="text-left">
                  <th className="p-2 py-2 h-12">MES</th>
                  <th className="p-2 h-12">DIA</th>
                  <th className="p-2 h-12">CARRERA</th>
                  <th className="p-2 h-12">LUGAR</th>
                  <th className="p-2 h-12">DISTANCIA</th>
                  <th className="p-2 h-12">LINK</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="h-96 flex justify-center items-center"
                    ></td>
                  </tr>
                ) : displayedEvents.length ? (
                  displayedEvents.map((race, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } text-left`}
                    >
                      <td className=" p-2 h-12 align-middle">{race.MONTH}</td>
                      <td className="p-2 h-12 align-middle">{race.DAY}</td>
                      <td className="p-2 h-12 align-middle">{race.NAME}</td>
                      <td className="p-2 h-12 align-middle">{race.PLACE}</td>
                      <td className="p-2 h-12 align-middle">{race.DISTANCE}</td>
                      <td className="p-2 h-12 align-middle">
                        <a
                          href={race.LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-${color} underline`}
                        >
                          {race.LINK}
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-10">
                      <p className="text-3xl font-bold">
                        No hay carreras para mostrar
                      </p>
                      <p className="text-2xl italic font-thin">
                        Por favor, intenta con otro mes
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarBox;
