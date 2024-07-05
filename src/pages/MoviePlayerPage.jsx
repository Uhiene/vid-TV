import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { movies } from '../store/utils';
import Layout from '../component/Layout/Layout'
import MovieCard from '../component/reuseableComponents/MovieCard';
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import StarRating from '../component/reuseableComponents/StarRating';

const MoviePlayerPage = () => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));

    if (!movie) return <div>Movie not found</div>;

    const rating = 4.6; // Replace with dynamic data if available


    return (
        <Layout>
            <div className="flex flex-col md:flex-row w-full items-start justify-between text-gray-200">
                <div className="w-full md:w-3/4">
                    <div className='flex items-center justify-between'>
                        <h2 className="text-2xl font-bold mb-4">{movie.name}</h2>
                        <StarRating rating={rating} />
                    </div>
                    <div className="w-full">
                        <Plyr
                            source={{
                                type: "video",
                                sources: [
                                    {
                                        src:
                                            movie?.videoUrl ||
                                            "https://file.dappmentors.duckdns.org/download/video/1708596030238__AQgH.mp4",
                                        provider: "html5",
                                    },
                                ],
                            }}
                        />
                    </div>

                </div>
                <div className='w-64 hidden md:block'>
                    <h3 className="text-lg font-bold mb-4">Other Movies</h3>
                    <div className="h-[420px] overflow-y-auto">
                        <ul className="flex flex-col gap-5">
                            {movies.map((movie) => (
                                <Link to={`/movie/${movie.id}`} key={movie.id}>
                                    <MovieCard movie={movie} width="w-60" height="h-40" />
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MoviePlayerPage;
