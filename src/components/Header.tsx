
function Header() {
  return (
    <>
      <div className="flex justify-center">
        <header className="navbar flex justify-around w-3/4 text-secondary italic uppercase">
          <a className="btn btn-ghost text-xl">Home</a>
          <a className="btn btn-ghost text-xl">Calendario</a>
          <a className="btn btn-ghost text-xl">FAQ</a>
          <a className="btn btn-ghost text-xl">Pistas</a>
          <a className="btn btn-ghost text-xl">Equipos</a>
        </header>
      </div>
      <div className="flex flex-col items-center w-full mb-5">
        <span className="w-3/4 h-1 bg-secondary flex "></span>
        <span className="w-3/4 h-1 bg-neutral flex"></span>
      </div>
    </>
  );
}

export default Header;
