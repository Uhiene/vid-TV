'use client'
import React, { useEffect, useState } from 'react'
import Uploader from '../../components/shared/Uploader'
import Uploaded from '../../components/shared/Uploaded'
import { posters } from '../../data/posters'
import { Link, useParams } from 'react-router-dom'

const Edit = () => {
  const { slug } = useParams()
  const [movie, setMovie] = useState(null)
  const [files, setFiles] = useState({
    image: '',
    video: '',
  })
  const [movieDetails, setMovieDetails] = useState({
    name: '',
    image: '',
    videoUrl: '',
    background: '',
    genre: '',
    duration: '',
    release: '',
    rating: '',
    language: '',
  })

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = posters.find((movie) => movie.slug === slug)
      if (!movieData) return

      setMovieDetails(movieData)
      setMovie(movieData)

      handleSelectedFile('image', movieData.image)
      handleSelectedFile('videoUrl', movieData.videoUrl)
    }

    fetchMovieData()
  }, [slug])

  const handleSelectedFile = (name, value) => {
    setFiles((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const isAllFieldsFilled = () =>
    Object.values(movieDetails).every((value) => value !== '')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleURLMount = (name, value) => {
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!isAllFieldsFilled()) return alert('Some fields are empty')
    console.log(movieDetails)
  }

  return (
    <div className="flex flex-col items-center">
      <Link to={'/movies/' + movie?.slug} className="mb-4 text-green-500">
        Back to movie
      </Link>
      <div className="bg-gray-800 bg-opacity-75 border border-slate-500 w-full md:w-2/5 p-4 rounded-xl text-slate-200">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex justify-between items-center space-x-2 w-full">
            {!movieDetails.videoUrl ? (
              <Uploader
                name="Video"
                type="video/mp4"
                size={100}
                onUploadSuccess={(response) =>
                  handleURLMount('videoUrl', response.url)
                }
                onFileSelected={(file) => handleSelectedFile('video', file)}
              />
            ) : (
              <Uploaded
                name="Video"
                file={files.video}
                onRemove={() => handleURLMount('videoUrl', '')}
              />
            )}

            {!movieDetails.image ? (
              <Uploader
                name="Poster"
                type="image/png, image/jpg, image/jpeg"
                size={2}
                onUploadSuccess={(response) =>
                  handleURLMount('image', response.url)
                }
                onFileSelected={(file) => handleSelectedFile('image', file)}
              />
            ) : (
              <Uploaded
                name="Poster"
                file={files.image}
                onRemove={() => handleURLMount('image', '')}
              />
            )}
          </div>

          <form onSubmit={handleSubmit} className="w-full mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="E.g. Batman Return"
                value={movieDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 border border-slate-500 rounded text-sm"
                required
              />
            </div>

            <div className="flex justify-between items-center space-x-2 mb-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-slate-200 mb-1">
                  Genres
                </label>
                <input
                  type="text"
                  name="genre"
                  placeholder="E.g. Action"
                  value={movieDetails.genre}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 border border-slate-500 rounded text-sm"
                  required
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-slate-200 mb-1">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  placeholder="E.g. Russian"
                  value={movieDetails.language}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 border border-slate-500 rounded text-sm"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center space-x-2 mb-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-slate-200 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  placeholder="E.g. 2h 19m"
                  value={movieDetails.duration}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 border border-slate-500 rounded text-sm"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-slate-200 mb-1">
                  Release
                </label>
                <input
                  type="text"
                  name="release"
                  placeholder="E.g. 2020"
                  value={movieDetails.release}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 border border-slate-500 rounded text-sm"
                  required
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-slate-200 mb-1">
                  Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="E.g. PG"
                  value={movieDetails.rating}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 border border-slate-500 rounded text-sm"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Background
              </label>
              <input
                type="text"
                name="background"
                placeholder="Synopsis of the movie..."
                value={movieDetails.background}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 border border-slate-500 rounded text-sm"
              />

              <small className="text-slate-400">
                Keep all inputs short and simple no lengthy words needed.
              </small>
            </div>

            {movie && (
              <button
                className="w-full bg-green-500 text-white py-2.5 rounded-lg hover:bg-transparent
              hover:border-green-800 border border-transparent hover:text-green-500"
              >
                Update
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit
