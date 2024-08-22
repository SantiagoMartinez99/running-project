import WaveBannerBackground from "../assets/images/WaveBackground.svg";
import BannerImage from "../assets/images/imageBanner.svg";

function BannerAdvertisement() {
  return (
    <>
      <div className="relative bg-orange-100 py-32 xl:py-48 mb-10">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={WaveBannerBackground}
            alt="wave banner background"
          />
        </div>

        <div className="flex z-10 mx-20  items-center justify-around">
          <div className="w-3/5">
            <h1 className="mb-5 text-5xl font-extrabold text-secondary">
              ¡ANUNCIA TU EVENTO AQUÍ!
            </h1>
            <p className="mb-5 text-secondary italic text-lg">
              Únete a nosotros, haremos historia juntos. Estamos emocionados de
              invitar a todos los interesados a colaborar en nuestro próximo
              evento.
            </p>
            <button className="btn btn-secondary italic text-white">
              CONTACTAR
            </button>
          </div>
          <img src={BannerImage} alt="Banner Image" className="w-auto h-auto" />
        </div>
      </div>
    </>
  );
}

export default BannerAdvertisement;
