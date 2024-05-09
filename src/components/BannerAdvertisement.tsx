import BannerSvg from "../assets/banners/BannerAdvertisement.png";

function BannerAdvertisement() {
  return (
    <>
      <div
        className="flex bg-cover bg-no-repeat py-32 items-center mb-10"
        style={{
          backgroundImage: `url(${BannerSvg})`,
        }}
      >
        <div className="mx-20 w-3/5">
          <div className="flex-col">
            <h1 className="mb-5 text-5xl font-extrabold text-secondary">
              ¡ANUNCIA TU EVENTO AQUÍ!
            </h1>
            <p className="mb-5 text-secondary italic text-lg ">
              Únete a nosotros, haremos historia juntos. Estamos emocionados de
              invitar a todos los interesados a colaborar en nuestro próximo
              evento.
            </p>
            <button className="btn btn-secondary italic text-white ">
              CONTACTAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerAdvertisement;
