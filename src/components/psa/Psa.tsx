import classNames from "classnames";
import { useState } from "react";

const Psa = () => {
  // state
  const [isPsaClicked, setIsPsaClicked] = useState(false);

  //comportement
  const handleClick = () => {
    setIsPsaClicked(!isPsaClicked);
  };

  // render
  return (
    <div
      className={classNames(
        "lg:block fixed z-[20] top-[19rem] left-[84%] float-right w-[11.375rem] h-[22.375rem] rounded-2xl bg-gradient-to-b from-[#f4f4f4] to-[olive]",
        `${isPsaClicked ? "lg:hidden" : "hidden"}`
      )}
    >
      <div className={"relative -top-[3.5rem]"}>
        <div className="absolute top-[1.5rem] h-[2rem] w-[2rem] -right-[.25rem] cursor-pointer z-10">
          <button className="btn btn-circle btn-outline" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <img
          className="block"
          alt="patelot.de"
          src={"./img/kamdem.png"}
          height={203}
          width={130}
        />
      </div>
      <div className={"relative -top-[4.5rem]"}>
        <div className="relative py-4 px-14 inline-block text-[1.125rem] font-overpass-bold rounded-[10px] -left-[.5rem] bg-[olive] leading-[.875rem] text-[#f4f4f4]">
          Patelot.de
        </div>
        <div className="p-[1rem] text-white">
          <div className="text-lg mb-4 font-bold">Patrick Kamdem</div>
          <div className="text-sm leading-[1.125rem] mb-4">
            Ich helfe Dir gerne
          </div>
        </div>
        <div className="py-0">
          <a
            href="https://patelot.de"
            className="p-[1rem] hover:text-white hover:font-bold"
          >
            Merh erfahren ...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Psa;
