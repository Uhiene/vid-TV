'use client'
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa'
import MovieCard from '../../components/shared/MovieCard'
import ReactPlayer from 'react-player'
import React, { useEffect, useState } from 'react'
import { posters } from '../../data/posters'
import { Link, useParams } from 'react-router-dom'

const Movie = () => {
  const { slug } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [movie, setMovie] = useState(null)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = posters.find((movie) => movie.slug === slug)
      setMovie(movieData)

      const moviesData = posters.slice(0, 3)
      setMovies(moviesData)
      setLoaded(true)
    }

    fetchMovieData()
  }, [slug])

  const handleSubmit = async () => {
    if (!window.confirm('Are you sure you want to delete this movie?')) return

    window.location.href = '/account'
  }

  const truncateAddress = (address) => {
    const startLength = 4
    const endLength = 4
    const addressString = String(address)
    const truncatedAddress = `${addressString.substring(
      0,
      startLength
    )}...${addressString.substring(addressString.length - endLength)}`

    return truncatedAddress
  }

  return (
    <div
      className="flex flex-col md:flex-row w-full md:items-start items-center
    md:justify-between justify-center text-gray-200 md:space-x-6 space-x-0
    space-y-6 md:space-y-0 "
    >
      <div className="w-full sm:w-2/3 space-y-4">
        <div className="flex items-center justify-start">
          {loaded ? (
            <div className="flex justify-start items-center space-x-2">
              <div className="flex justify-start items-center space-x-2">
                <h2 className="text-2xl">
                  {movie?.name} ({movie?.release})
                </h2>
                <FaStar className="text-yellow-500" />
              </div>

              <div className="flex justify-start items-center space-x-2 text-gray-400">
                <p className="text-sm">
                  {movie?.rating} {movie?.duration}, {movie?.genre}
                  {' | ' + truncateAddress(movie?.userId || '')}
                </p>
                {movie && (
                  <div className="flex space-x-4">
                    <span className="w-1"></span>
                    <Link
                      to={'/movies/edit/' + movie?.slug}
                      className="flex justify-start items-center space-x-1 text-green-500"
                    >
                      <FaEdit /> <span>Edit</span>
                    </Link>

                    <button
                      onClick={handleSubmit}
                      className="flex justify-start items-center space-x-1 text-red-500"
                    >
                      <FaTrash /> <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <h4>Loading...</h4>
          )}
        </div>

        <div className="w-full h-[450px] rounded-2xl overflow-hidden relative">
          {loaded && (
            <ReactPlayer
              url={movie?.videoUrl}
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              controls={true}
              playing={false}
              preload="none"
            />
          )}
        </div>
        <p className="text-gray-400">{movie?.background}</p>
      </div>

      <div className="w-full sm:w-1/3 space-y-4">
        <h3 className="text-lg">Related Movies</h3>

        <div className="h-[450px] overflow-y-auto">
          {loaded && (
            <ul className="flex flex-col gap-5">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  width="w-full rounded-2xl"
                  height="h-40"
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Movie
