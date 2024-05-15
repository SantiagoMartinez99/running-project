import BannerCalendarSvg from "../assets/banners/BannerCalendar.png";
import StreetRaceBox from "./StreetRaceBox";

function BannerCalendar() {
  return (
    <>
      <div
        className="flex-col bg-cover bg-no-repeat mt-20 items-center"
        style={{
          backgroundImage: `url(${BannerCalendarSvg})`,
        }}
      >
        <div className="flex w-full lg:justify-end px-14">
          <span>
            <h1 className=" text-6xl md:text-8xl font-bold text-secondary xl:translate-x-0">
              PRÓXIMAS
            </h1>
            <h1 className=" text-5xl md:text-7xl font-bold text-accent md:-translate-y-4 xl:translate-x-28 w-fit">
              CARRERAS
            </h1>
            <span className="w-3/4 h-1 bg-accent flex md:-translate-y-4 xl:translate-x-28"></span>
          </span>
        </div>
        <div className="flex w-full my-24 justify-center ">
          <div className="lg:flex justify-around">
            <StreetRaceBox color={"secondary"} />
            <StreetRaceBox color={"accent"} />
            <StreetRaceBox color={"neutral"} />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-neutral italic text-white m-12 -translate-y-16">
            VER TODAS LAS CARRERAS
          </button>
        </div>
      </div>
    </>
  );
}

export default BannerCalendar;
