import { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  // state
  const [isOpen, setIsOpen] = useState(false);

  //comportement
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //render
  return (
    <div className={"block lg:hidden md:hidden xl:hidden"}>
      <nav className="bg-white shadow-md p-4 flex flex-wrap justify-between items-center">
        <div className="text-xl font-bold">Meine Webseite</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div
        className={`lg:flex lg:items-center ${
          isOpen ? "block" : "hidden"
        } shadow-lg p-8 border border-zinc-300 bg-zinc-100 `}
      >
        <Link to="/home" className="block px-4 py-2 text-[olive] font-bold">
          Über mich
        </Link>
        <Link to="/projekte" className="block px-4 py-2 text-[olive] font-bold">
          Projekte
        </Link>
        <Link to="/blog" className="block px-4 py-2 text-[olive] font-bold">
          Blog
        </Link>
        <Link to="/hobbys" className="block px-4 py-2 text-[olive] font-bold">
          Hobbys
        </Link>
        <Link to="/kontakt" className="block px-4 py-2 text-[olive] font-bold">
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
