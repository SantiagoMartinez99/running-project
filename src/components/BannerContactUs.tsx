import Orchid from "../assets/images/Orchid.svg";
function BannerContactUs() {
  return (
    <>
      <img
        className="background-image absolute left-0 w-50 h-96 bg-cover bg-center -translate-y-8"
        src={Orchid}
      ></img>

      <div className="flex w-full lg:justify-end px-14 mt-20">
        <span>
          <h1 className=" text-6xl md:text-8xl font-bold text-accent italic">
            CONTACTANOS
          </h1>
          <span className="w-full h-1 bg-primary flex md:-translate-y-3"></span>
        </span>
      </div>

      <div className="px-14 w-full mb-10">
        <div className="flex mt-10 justify-end">
          <p className="w-4/5 mb-5 text-secondary italic text-lg text-right">
            ¡Únete a nuestro equipo de promoción y ayuda a llevar tu próxima
            carrera o negocio a lo más alto! Completa este formulario para ser
            parte del equipo y ayudar a difundir esta emocionante experiencia.
          </p>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-secondary italic text-white flex">
            CONTACTAR
          </button>
        </div>
      </div>
    </>
  );
}

export default BannerContactUs;
