import React from 'react'
import { SiGoogledisplayandvideo360 } from 'react-icons/si'
import Menu from '../shared/Menu'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-[#121926] text-slate-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-8">
        <Link to="/" className="flex gap-2 items-center text-lg sm:text-2xl ">
          <span>
            <SiGoogledisplayandvideo360 className="text-green-500" />
          </span>
          <h1 className=" font-semibold ">VidTV</h1>
        </Link>

        <div className="flex items-center gap-10">
          <ul className="hidden md:flex gap-4 font-medium">
            <Link to="/create">Create</Link>
            <li>Movies</li>
            <li>Series</li>
            <li>Anime</li>
            <Link to="/account">Account</Link>
          </ul>
          <Menu />
          <div className="hidden md:block">
            <button className="bg-green-500 text-white rounded-full p-1 min-w-28 text-md hidden md:block">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
