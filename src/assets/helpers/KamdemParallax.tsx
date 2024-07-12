import classNames from "classnames";
import { useEffect, useState } from "react";

const KamdemParallax = ({ children, image }) => {
  let windowScrollTop;

  if (window.innerWidth >= 768) {
    windowScrollTop = window.scrollY / 3;
  } else {
    windowScrollTop = 0;
  }

  // state
  const [transform, setTransform] = useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return () => {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  // comportement
  const resetTransform = () => {
    const windowScrollTop = window.scrollY / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  // render
  return (
    <div
      className={classNames(
        "flex items-center border-0 p-0 m-0 relative bg-cover bg-center overflow-hidden max-h-[1000px] h-screen"
      )}
      style={{
        backgroundImage: "url(" + image + ")",
        transform: transform,
      }}
    >
      {children}
    </div>
  );
};

export default KamdemParallax;
