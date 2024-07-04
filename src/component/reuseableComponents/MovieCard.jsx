// src/components/resuableComponents/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="relative w-52 h-96 overflow-hidden">
            <img src={movie.image} alt={movie.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2">
                {movie.name}
            </div>
        </div>
    );
};

export default MovieCard;
