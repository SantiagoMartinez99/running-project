import LogoCoRunning from "../assets/images/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
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
                <Link to="/" className="btn btn-ghost text-xl">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="btn btn-ghost text-xl">
                  CALENDARIO
                </Link>
              </li>
              {/* <li>
                <Link to="/faq" className="btn btn-ghost text-xl">
                  FAQ
                </Link>
              </li> */}
              <li>
                <Link to="/tracks" className="btn btn-ghost text-xl">
                  PISTAS
                </Link>
              </li>
              <li>
                <Link to="/teams" className="btn btn-ghost text-xl">
                  EQUIPOS
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="h-14" src={LogoCoRunning} alt="logo" />
            <p className="-translate-x-6 translate-y-2 italic">beta</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-secondary italic uppercase justify-around gap-10">
            <li>
              <Link to="/" className="btn btn-ghost text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/calendar" className="btn btn-ghost text-xl">
                CALENDARIO
              </Link>
            </li>
            {/* <li>
              <Link to="/faq" className="btn btn-ghost text-xl">
                FAQ
              </Link>
            </li> */}
            <li>
              <Link to="/tracks" className="btn btn-ghost text-xl">
                PISTAS
              </Link>
            </li>
            <li>
              <Link to="/teams" className="btn btn-ghost text-xl">
                EQUIPOS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <span className="w-full h-1 bg-secondary flex "></span>
        <span className="w-full h-1 bg-accent flex"></span>
      </div>
    </>
  );
}

export default Header;
