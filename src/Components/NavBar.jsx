import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

function NavBar() {
  const [nav, setNav] = useState();
  const handleClick = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <>
      <div className="absolute w-full h-full flex justify-between p-4 ">
        <h1 className="font-bold text-xl z-20 text-white">Pakistan View</h1>
        <HiMenuAlt3
          onClick={handleClick}
          className="z-20 cursor-pointer text-white"
          size={25}
        />

        <div
          className={
            nav
              ? "fixed bg-black/80 top-0 left-0 ease-in duration-300 w-full h-screen px-4 py-7 flex-col z-10"
              : "fixed bg-black/55 top-0 left-[-100%] ease-in duration-300"
          }
        >
          <nav>
            <ul className="flex flex-col items-center justify-center h-full w-full text-white">
              <li className="font-bold p-8 text-3xl">Home</li>
              <li className="font-bold text-3xl p-8">Destinations</li>
              <li className="font-bold text-3xl p-8">Reservations</li>
              <li className="font-bold text-3xl p-8">Amenities</li>
              <li className="font-bold text-3xl p-8">Rooms</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
