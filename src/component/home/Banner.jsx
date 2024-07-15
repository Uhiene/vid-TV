import React, { useState, useEffect } from 'react'
import { banners as movies } from '../../store/banners' // Import your movies data here

const Banner = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const movie = movies[currentMovieIndex]

  return (
    <div
      className="bg-no-repeat w-full bg-cover bg-center h-72 sm:h-[500px] 
      flex items-center transition-opacity duration-500 relative"
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>

      <div className="p-4 sm:p-10 sm:w-full text-white relative z-10">
        <p>{movie.genre}</p>
        <h1 className="text-3xl sm:text-5xl">{movie.name}</h1>
        <p>{movie.description}</p>
      </div>
    </div>
  )
}

export default Banner
