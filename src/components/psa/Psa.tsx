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
          <img
            alt="close icon"
            width={50}
            height={50}
            src={"./img/x-circle.svg"}
            onClick={handleClick}
          />
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
          <div className="text-lg mb-4">Patrick Kamdem</div>
          <div className="text-sm leading-[1.125rem] mb-4">
            Your own direct line to tailored support.
          </div>
        </div>
        <div className="py-0">
          <a
            href="http://patelot.de"
            className="p-[1rem] hover:text-white hover:font-bold"
          >
            Learn more ...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Psa;
