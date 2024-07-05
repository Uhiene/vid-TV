import React from 'react';
import StarRating from './StarRating';

const MovieCard = ({ movie, width = 'w-52', height = 'h-96' }) => {
    const rating = 4.6;

    return (
        <div className={`relative ${width} ${height} overflow-hidden transform transition-transform duration-500 hover:rotate-y-180 group`}>
            <img src={movie.image} alt={movie.name} className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-y-180">
                <div className="flex items-center justify-end space-x-2 mb-2">
                    <StarRating rating={rating} />
                </div>
                <h3 className="text-lg font-bold">{movie.name}</h3>
                <p>Price: {movie.price} ETH</p>
                <p>Release: {movie.release}</p>
                <p>Genre: {movie.genre}</p>
                <p>PG: {movie.pg}</p>
                <p>Language: {movie.language}</p>
                <p>Duration: {movie.duration}</p>
            </div>
        </div>
    );
};

export default MovieCard;
