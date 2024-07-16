import BannerCalendarSvg from "../assets/banners/BannerCalendar2.png";
import RaceBox from "./RaceBox";

function BannerCalendar() {
  return (
    <>
      <div
        className="flex-col bg-cover bg-no-repeat mt-20 py-10 items-center"
        style={{
          backgroundImage: `url(${BannerCalendarSvg})`,
        }}
      >
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
        </div>
        <div className="flex w-full my-24 justify-center">
          <div className="lg:flex justify-around">
            <RaceBox color={"secondary"} type={"calle"} />
            <RaceBox color={"accent"} type={"trail"} />
            <RaceBox color={"neutral"} type={"triatlón"} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-neutral italic text-white text-center -translate-y-10 text-lg p-5 rounded-lg">
          VER TODAS LAS CARRERAS
        </button>
      </div>
    </>
  );
}

export default BannerCalendar;
