import WaveBannerBackground from "../assets/images/WaveBackground.svg";
import BannerImage from "../assets/images/imageBanner.svg";
import BannerOrchid from "../assets/images/OrchidBanner.svg";

function BannerAdvertisement() {
  return (
    <>
      <div className="relative bg-orange-100 py-16 xl:py-16 mb-10">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={WaveBannerBackground}
            alt="wave banner background"
          />
        </div>

        <div className="flex z-10 mx-20  items-center justify-around">
          <div>
            <h1 className="mb-5 text-4xl md:text-9xl font-extrabold text-secondary italic">
              ¡ANUNCIA TU EVENTO AQUÍ!
            </h1>
            <p className="mb-5 text-secondary italic text-md md:text-2xl font-bold">
              Únete a nosotros, haremos historia juntos. Estamos emocionados de
              invitar a todos los interesados a colaborar en nuestro próximo
              evento.
            </p>
            <button className="bg-secondary btn-secondary italic text-white flex  p-5 text-2xl rounded-lg font-bold">
              CONTACTAR
            </button>
          </div>
          <div className=" flex-col hidden lg:flex">
            <img
              src={BannerOrchid}
              alt="Banner Image Orchid"
              className="w-1/3 h-w-1/2 self-center"
            ></img>
            <img
              src={BannerImage}
              alt="Banner Image"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerAdvertisement;
