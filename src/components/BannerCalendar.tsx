import { Link } from "react-router-dom";
import NextRacesImg from "../assets/images/nextRacesImage.svg";
import RaceBox from "./RaceBox";
import WaveBackgroundImg from "../assets/images/Vector 57 (1).svg";

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
            className="absolute translate-x-16 translate-y-36 -z-10 w-full"
          ></img>
        </div>

        <div className="flex">
          <img
            src={NextRacesImg}
            alt="Next Races"
            className=" absolute translate-x-60 -translate-y-36 hidden lg:block"
          ></img>
          <div className=" justify-center w-full my-24 md:mx-24">
            <div className="lg:flex justify-around">
              <RaceBox color={"secondary"} type={"calle"} />
              <RaceBox color={"accent"} type={"trail"} />
              {/* <RaceBox color={"neutral"} type={"triatlón"} /> */}
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
