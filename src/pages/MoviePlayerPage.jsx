import { Link, useParams } from 'react-router-dom'
import { movies } from '../store/utils'
import MovieCard from '../component/reuseableComponents/MovieCard'
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'
import StarRating from '../component/reuseableComponents/StarRating'

const MoviePlayerPage = () => {
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id === parseInt(id))
  if (!movie) return <div>Movie not found</div>

  const rating = 4.6 // Replace with dynamic data if available

  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-between text-gray-200 space-x-6">
      <div className="w-full sm:w-2/3 space-y-4">
        <div className="flex items-center justify-start">
          <h2 className="text-2xl font-bold">{movie.name}</h2>
          <StarRating rating={rating} />
        </div>

        <div className="w-full rounded-2xl overflow-hidden">
          <Plyr
            source={{
              type: 'video',
              sources: [{ src: 'JzmmS6ieq7I', provider: 'youtube' }],
            }}
          />
        </div>
      </div>

      <div className="w-full sm:w-1/3 space-y-4">
        <h3 className="text-lg font-bold">Related Movies</h3>

        <div className="h-[450px] overflow-y-auto">
          <ul className="flex flex-col gap-5">
            {movies.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} width="w-full" height="h-40" />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MoviePlayerPage
