import { useState } from "react";

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
        <a
          href="#"
          className="block lg:inline-block px-4 py-2  hover:bg-gray-200 lg:hover:bg-transparent lg:border-none text-[olive] font-bold"
        >
          Über mich
        </a>
        <a
          href="#"
          className="block lg:inline-block px-4 py-2 text-[olive] font-bold hover:bg-gray-200 lg:hover:bg-transparent lg:border-none"
        >
          Projekte
        </a>
        <a
          href="#"
          className="block lg:inline-block px-4 py-2 text-[olive] font-bold hover:bg-gray-200 lg:hover:bg-transparent lg:border-none"
        >
          Blog
        </a>
        <a
          href="#"
          className="block lg:inline-block px-4 py-2 text-[olive] font-bold hover:bg-gray-200 lg:hover:bg-transparent lg:border-none"
        >
          Kontakt
        </a>
        <a
          href="#"
          className="block lg:inline-block px-4 py-2 text-[olive] font-bold hover:bg-gray-200 lg:hover:bg-transparent lg:border-none"
        >
          Hobbys
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
