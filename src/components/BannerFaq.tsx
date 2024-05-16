function BannerFaq() {
  return (
    <>
      <div className="mx-14 mb-10">
        <h1 className=" text-8xl font-bold text-secondary italic">FAQ</h1>
        <span className="w-40 h-1 bg-accent flex translate-y-1 translate-x-1"></span>
      </div>

      <div className="mx-10">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-3xl font-bold text-primary">
            ¿Como puedo subir la información de una carrera?
          </div>
          <div className="collapse-content text-2xl">
            <p className=" font-bold border-b-4 border-primary pb-2 text-accent">
              Completa el formulario de contacto, nos pondremos en contacto lo
              mas pronto posible para facilitar la publicación tu evento o
              cualquiera que conozcas y quieras publicitar.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl font-bold text-primary">
          ¿Como puedo registrar a mi equipo/grupo de running?
          </div>
          <div className="collapse-content text-2xl">
            <p className="text-accent font-bold border-b-4 border-primary pb-2">
            Completa el formulario de registro de equipo,  nos pondremos en contacto lo
              mas pronto posible para facilitar la publicación tu evento o
              cualquiera que conozcas y quieras publicitar.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl  font-bold text-primary">
            ¿Como registro una pista que conozco?
          </div>
          <div className="collapse-content text-2xl">
            <p className="text-accent font-bold border-b-4 border-primary pb-2">
            Completa el formulario de registro de equipo,  nos pondremos en contacto lo
              mas pronto posible para facilitar la publicación tu evento o
              cualquiera que conozcas y quieras publicitar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerFaq;
