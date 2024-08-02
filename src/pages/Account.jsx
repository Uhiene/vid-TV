'use client'
import MovieCard from '../components/shared/MovieCard'
import React, { useEffect, useState } from 'react'
import { posters } from '../data/posters'

const Account = () => {
  const [loaded, setLoaded] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovieData = async () => {
      const moviesData = posters.slice(0, 3)
      setMovies(moviesData)
      setLoaded(true)
    }

    fetchMovieData()
  }, [])

  return (
    <div className="flex flex-col w-full items-center">
      <h3 className="text-lg mb-4">
        {!loaded
          ? 'Please connect your account to view your movies.'
          : movies.length < 1
          ? 'You have no movies posted yet...'
          : 'Your Movies'}
      </h3>

      {loaded && (
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 h-full item-center ">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              width="w-52 rounded-2xl"
              height="h-96"
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Account
