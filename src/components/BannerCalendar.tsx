import { Link } from "react-router-dom";
import NextRacesImg from "../assets/images/nextRacesImage.svg";
import RaceBox from "./RaceBox";
import WaveBackgroundImg from "../assets/images/Vector 57 (1).svg";

// const eventsData = [
//   {
//     DAY: 1,
//     DISTANCE: "2K, 5K, 10K, 15K",
//     LINK: "https://www.crazyrunners.co/",
//     MONTH: "Diciembre",
//     NAME: "CRAZY RUNNERS 15K",
//     PLACE: "Gran Malecón, Barranquilla",
//     RACETYPE: "CALLE",
//   },
//   {
//     DAY: 1,
//     DISTANCE: "42K",
//     LINK: "https://www.vchallenges.co/2024/challenge/details/vchallenges42k",
//     MONTH: "Diciembre",
//     NAME: "42K VCHALLENGES",
//     PLACE: "Bogota",
//     RACETYPE: "CALLE",
//   },
//   {
//     DAY: 1,
//     DISTANCE: "5K, 10K, 21K",
//     LINK: "https://www.eventrid.com.co/eventos/prsports/media-maraton-manizales-mmm-2024",
//     MONTH: "Diciembre",
//     NAME: "MEDIA MARATON DE MANIZALES",
//     PLACE: "Manizales",
//     RACETYPE: "CALLE",
//   },
//   {
//     DAY: 3,
//     DISTANCE: "5K",
//     LINK: "https://www.eventrid.com.co/eventos/fundacionjeisonaristizabal/maraton-de-suenos-2024",
//     MONTH: "Diciembre",
//     NAME: "MARATON DE SUEÑOS",
//     PLACE: "Cali",
//     RACETYPE: "CALLE",
//   },
//   {
//     DAY: 15,
//     DISTANCE: "5K, 10K",
//     LINK: "https://grupomonte.com/eventos/carrera-internacional-rio-cali/",
//     MONTH: "Diciembre",
//     NAME: "CARRERA INTERNACIONAL RIO CALI",
//     PLACE: "Cali",
//     RACETYPE: "CALLE",
//   },
//   {
//     DAY: 15,
//     DISTANCE: "10K",
//     LINK: "https://www.eventrid.com.co/eventos/10klamonumental/la-monumental-10k-2024",
//     MONTH: "Diciembre",
//     NAME: "LA MONUMENTAL 10K",
//     PLACE: "Cienaga, Magdalena",
//     RACETYPE: "CALLE",
//   },
//   {
//     DAY: 28,
//     DISTANCE: "5K, 10K",
//     LINK: "https://www.2george.com.co/evento/carrera-san-silvestre-cartagena-2024",
//     MONTH: "Diciembre",
//     NAME: "CARRERA SAN SILVESTRE CARTAGENA",
//     PLACE: "Cartagena",
//     RACETYPE: "CALLE",
//   },
// ];
function BannerCalendar() {
  return (
    <>
      <div className="flex-col mt-20 py-10 items-center">
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
          <img
            src={WaveBackgroundImg}
            alt="wave Background Image"
            className="absolute translate-x-16 translate-y-36 -z-10 w-full "
          ></img>
        </div>

        <div className="flex">
          <img
            src={NextRacesImg}
            alt="Next Races"
            className="absolute translate-x-40 -translate-y-36 hidden md:visible"
          ></img>
          <div className=" justify-center w-full my-24 md:mx-40">
            <div className="lg:flex justify-around">
              <RaceBox color={"secondary"} type={"calle"} />
              <RaceBox color={"accent"} type={"trail"} />
              <RaceBox color={"neutral"} type={"triatlón"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <Link to={"/calendar"}>
          <button className="bg-neutral italic text-white text-center -translate-y-10 text-2xl p-5 rounded-lg font-bold">
            VER TODAS LAS CARRERAS
          </button>
        </Link>
      </div>
    </>
  );
}

export default BannerCalendar;
