import FaqSlider from "./FaqSlider";
function BannerFaq() {
  return (
    <>
      <div className="mx-14 mb-10">
        <h1 className=" text-5xl md:text-8xl font-bold text-secondary italic">FAQ</h1>
        <span className="w-20 md:w-40 h-1 bg-accent flex translate-y-1 translate-x-1"></span>
      </div>

      <div className="mx-10">
        <FaqSlider
          question={"¿Como puedo subir la información de una carrera?"}
          answer={
            "Completa el formulario de contacto, nos pondremos en contacto lo mas pronto posible para facilitar la publicación tu evento o cualquiera que conozcas y quieras publicitar."
          }
        />
        <FaqSlider
          question={"¿Como puedo registrar a mi equipo/grupo de running?"}
          answer={
            " Completa el formulario de registro de equipo,  nos pondremos en contacto lo mas pronto posible para facilitar la publicación tu evento ocualquiera que conozcas y quieras publicitar."
          }
        />
        <FaqSlider
          question={"¿Como registro una pista que conozco?"}
          answer={
            "  Completa el formulario de contacto, nos pondremos en contacto lo mas pronto posible para facilitar la publicación tu evento o cualquiera que conozcas y quieras publicitar."
          }
        />
      </div>
    </>
  );
}

export default BannerFaq;
