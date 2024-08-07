import CalendarBox from "../components/CalendarBox";
import Header from "../components/Header";
import RouteMapImg from "../assets/calendar/routeMap.svg";
import Footer from "../components/Footer";

function Calendar() {
  return (
    <>
      <Header />
      <div className="flex w-full pl-14 mt-10 justify-between">
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
        <img
          className="w-2/12 -translate-y-10"
          src={RouteMapImg}
          alt="Mapa de rutas"
        />
      </div>
      <CalendarBox title={"CALLE"} color={"neutral"} orientation={"left"} />
      <CalendarBox title={"TRAIL"} color={"primary"} orientation={"right"} />
      {/* <CalendarBox title={"TRIATLÓN"} color={"accent"} orientation={"left"} /> */}
      <Footer />
    </>
  );
}

export default Calendar;
