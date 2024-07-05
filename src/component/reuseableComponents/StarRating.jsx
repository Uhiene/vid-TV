import React from 'react';

const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 1l2.76 5.65L18 7.5l-4 4.1.95 5.87L10 15.4 5.05 17.47 6 11.6l-4-4.1 5.24-.85L10 1z" clipRule="evenodd" />
            </svg>
            <span>{rating}</span>
        </div>
    );
};

export default StarRating;
