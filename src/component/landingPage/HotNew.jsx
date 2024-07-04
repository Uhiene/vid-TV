import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from '../reuseableComponents/MovieCard';
import { movies } from '../../store/utils';

const HotNew = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500, // Speed of the sliding animation (in ms)
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Delay between each auto-scroll (in ms)
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <div className='mt-10 lg:mt-20'>
            <h1 className='text-white text-xl lg:text-3xl font-semibold mb-5'>Hot New</h1>
            <div className="carousel-container">
                <Slider {...settings}>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HotNew;
