import React from "react";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import HamburgerMenu from "../reuseableComponents/Hamburger";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-[#121926] text-slate-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-8">
        <Link to="/" className="flex gap-2 items-center text-lg sm:text-2xl ">
          <span>
            <SiGoogledisplayandvideo360 className="text-green-500" />
          </span>
          <h1 className=" font-semibold ">VidTV</h1>
        </Link>
        <div className="flex items-center gap-10">
          <ul className="hidden sm:flex gap-4 font-medium">
            <Link to="/create">Create</Link>
            <li>Movies</li>
            <li>Series</li>
            <li>Anime</li>
            <li>Shows</li>
          </ul>
          <HamburgerMenu />
          <button className="bg-green-500 text-white rounded-lg p-2 min-w-28 text-lg font-medium hidden md:block">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
