import React, { useState, useEffect } from 'react'
import { banners as movies } from '../../data/banners'

const Banners = () => {
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
      flex items-center transition-opacity duration-500 relative rounded-2xl"
      style={{ backgroundImage: `url(${movie.image})` }}
    ></div>
  )
}

export default Banners
