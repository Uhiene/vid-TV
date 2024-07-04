import React from 'react'
import { SiGoogledisplayandvideo360 } from 'react-icons/si'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center'>
      <div className='flex gap-2 items-center text-lg sm:text-2xl '>
        <span><SiGoogledisplayandvideo360 className='text-purple-800' /></span>
        <h1 className=' font-semibold bg-gradient-to-l from-[#1e51ed] via-[#ed1eaf] to-[#fe6201] bg-clip-text text-transparent'>VidTV</h1>
      </div>
      <ul className='hidden sm:flex gap-4'>
        <li>Movies</li>
        <li>Series</li>
        <li>Anime</li>
        <li>Shows</li>

      </ul>
    </div>
  )
}

export default Navbar