import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";

type PropNavBar = {
  items: string[];
  itemsLinkText: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  children?: ReactNode;
};

const PatelotNavBar = ({
  items,
  itemsLinkText,
  heading,
  children,
  onSelectItem,
  ...props
}: PropNavBar) => {
  //state
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrolled, isScrolled] = useState<boolean>(false);
  const [isNavActive, setIsNavActive] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //comportement
  const handleScroll = () => {
    isScrolled(window.scrollY > 120);
  };

  //render
  return (
    <>
      <div
        className={classNames(
          "hidden sm:block md:block sticky top-0",
          `${scrolled ? "bg-[olive]" : "bg-[#f4f4f4]"}`
        )}
        {...props}
      >
        {items && items.length > 0 ? (
          <ul
            className={classNames(
              "container mx-auto flex flex-wrap justify-center items-center py-4 px-0"
            )}
          >
            {items.map((element, index) => (
              <li
                key={`navElement-${index}, ${heading}`}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(element);
                }}
                className={classNames(
                  "my-0 mx-4 p-3 font-bold cursor-pointer hover:text-[black] ",
                  `${scrolled ? "text-[#f4f4f4]" : "text-[olive]"}`
                )}
              >
                <NavLink
                  to={`/${itemsLinkText[index]}`}
                  className={({ isActive }) =>
                    isActive ? "border-b-[olive] border-b-4 pb-6" : ` `
                  }
                >
                  {element}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p className={classNames("text-xl text-center p-4")}>No item found</p>
        )}
        {children}
      </div>

      <HamburgerMenu />
    </>
  );
};

export default PatelotNavBar;
