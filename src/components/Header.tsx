import LogoCoRunning from "../assets/images/logo.png";
function Header() {
  return (
    <>
      {/* <div className="flex justify-center">
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
      </div> */}

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase italic text-secondary"
            >
              <li>
                <a className="btn btn-ghost text-xl">Home</a>
              </li>
              <li>
                <a className="btn btn-ghost text-xl">CALENDARIO</a>
              </li>
              <li>
                <a className="btn btn-ghost text-xl">FAQ</a>
              </li>
              <li>
                <a className="btn btn-ghost text-xl">PISTAS</a>
              </li>
              <li>
                <a className="btn btn-ghost text-xl">EQUIPOS</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="h-14" src={LogoCoRunning} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-secondary italic uppercase justify-around gap-10">
            <li>
              <a className="btn btn-ghost text-xl">Home</a>
            </li>
            <li>
              <a className="btn btn-ghost text-xl">CALENDARIO</a>
            </li>
            <li>
              <a className="btn btn-ghost text-xl">FAQ</a>
            </li>
            <li>
              <a className="btn btn-ghost text-xl">PISTAS</a>
            </li>
            <li>
              <a className="btn btn-ghost text-xl">EQUIPOS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <span className="w-full h-1 bg-secondary flex "></span>
        <span className="w-full h-1 bg-neutral flex"></span>
      </div>
    </>
  );
}

export default Header;
