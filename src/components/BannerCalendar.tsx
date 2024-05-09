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
        <div className="flex w-full justify-end px-10">
          <span>
            <h1 className=" text-8xl font-bold text-secondary -translate-x-40">
              PRÓXIMAS
            </h1>
            <h1 className=" text-7xl font-bold text-accent -translate-y-4 ">
              CARRERAS
            </h1>
            <span className="w-3/4 h-1 bg-accent flex -translate-y-4"></span>
          </span>
        </div>
        <div className="flex w-full my-24 ">
          <div className="flex justify-around">
            <StreetRaceBox color={"secondary"} />
            <StreetRaceBox color={"accent"} />
            <StreetRaceBox color={"neutral"} />
          </div>
        </div>

        <button className="btn btn-secondary italic text-white ">
          CONTACTAR
        </button>
      </div>
    </>
  );
}

export default BannerCalendar;
