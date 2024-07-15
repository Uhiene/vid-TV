import React, { useState, useEffect } from 'react'
import { movies } from '../../store/utils' // Import your movies data here

const HeroSection = () => {
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
      className="bg-no-repeat w-full rounded-xl bg-cover bg-center h-72 sm:h-[500px] 
      flex items-center transition-opacity duration-500"
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      <div className="p-4 sm:p-10 sm:w-full text-white bg-black bg-opacity-25">
        <p>{movie.genre}</p>
        <h1 className="text-3xl sm:text-5xl">{movie.name}</h1>
        <p>{movie.description}</p>
      </div>
    </div>
  )
}

export default HeroSection