function BannerFaq() {
  return (
    <>
      <div className="mx-14">
        <h1 className=" text-8xl font-bold text-secondary">FAQ</h1>
        <span className="w-40 h-1 bg-accent flex translate-y-1 translate-x-1"></span>
      </div>

      <div className="join join-vertical w-full my-10">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            ¿Como puedo subir la información de una carrera?
          </div>
          <div className="collapse-content">
            <p>
              Completa el formulario y contactanos, nos pondremos en contacto lo
              mas pronto posible para facilitar la publicación tu evento o
              cualquiera que conozcas y quieras publicitar.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            ¿Como puedo subir la información de una carrera?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            ¿Como puedo subir la información de una carrera?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerFaq;
