import { useState } from "react";
import { BsChatSquare } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaBars,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };
  return (
    <div className="absolute z-10 flex min-h-[50px] w-full items-center justify-between bg-gray-700/80 text-white">
      <ul className=" hidden px-4 sm:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>

        <li>
          <a href="#bookings">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex justify-between">
        <FaFacebook className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      {/* Hamburger Icon */}
      <div className="z-10 sm:hidden ">
        <FaBars
          onClick={handleToggle}
          size={20}
          className="mr-4 cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}

      <div
        onClick={handleToggle}
        className={
          nav
            ? `absolute left-0 top-0 flex h-screen w-full flex-col overflow-y-hidden bg-black/90 px-4 py-7 text-gray-300 duration-300 ease-in md:hidden`
            : "absolute left-[-100%] top-0 h-screen duration-500"
        }
      >
        <ul className="h-full w-full pt-12 text-center">
          <li className="py-8 text-2xl">
            <a href="/">Home</a>
          </li>
          <li className="py-8 text-2xl">
            <a href="#gallery">Gallery</a>
          </li>

          <li className="py-8 text-2xl">
            <a href="#deals">Deals</a>
          </li>
          <li className="py-8 text-2xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
