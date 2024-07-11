import React from "react";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { Link } from "react-router-dom";
import siaLogo from "../../assets/siacoin.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-75 text-slate-200 mt-20 p-6 rounded-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between sm:items-center p-4 sm:p-0 gap-6 sm:gap-0">
        <div>
          <Link to="/" className="flex gap-2 items-center text-lg sm:text-2xl ">
            <span>
              <SiGoogledisplayandvideo360 className="text-green-500" />
            </span>
            <h1 className=" font-semibold ">VidTV</h1>
          </Link>
          <p className="text-sm">
            A project showcasing the power of decentralized storage in video streaming.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Links</h4>
          <ul className="flex space-x-4">
            <Link to="/create">Create</Link>
            <li>Movies</li>
            <li>Series</li>
            <li>Anime</li>
            <li>Shows</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p>Email: info@movieproject.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:justify-center mt-10">
        <img src={siaLogo} alt="" className="w-10 h-10" />
        <p> Powered by Sia Foundation</p>
      </div>
    </footer>
  );
};

export default Footer;
