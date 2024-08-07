import CalendarBox from "../components/CalendarBox";
import Header from "../components/Header";
// import RouteMapImg from "../assets/calendar/routeMap.svg";
import Footer from "../components/Footer";

function Calendar() {
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

          <select className="w-48">
            <option disabled selected>
              Mes
            </option>
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
            <option value="Junio">Junio</option>
            <option value="Julio">Julio</option>
            <option value="Agosto">Agosto</option>
            <option value="Septiembre">Septiembre</option>
            <option value="Octubre">Octubre</option>
            <option value="Noviembre">Noviembre</option>
            <option value="Diciembre">Diciembre</option>
          </select>

          <select className="w-48">
            <option disabled selected>
              Tipo de Carrera
            </option>
            <option value="calle">Calle</option>
            <option value="trail">Trail</option>
          </select>

          <select className="w-48">
            <option disabled selected>
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
          <p className="underline text-xl font-bold ">Limpiar filtros</p>
        </div>
      </div>

      <CalendarBox title={"CALLE"} color={"neutral"} orientation={"left"} />
      <CalendarBox title={"TRAIL"} color={"primary"} orientation={"right"} />
      {/* <CalendarBox title={"TRIATLÓN"} color={"accent"} orientation={"left"} /> */}
      <Footer />
    </>
  );
}

export default Calendar;
