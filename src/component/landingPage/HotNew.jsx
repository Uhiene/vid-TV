import React from 'react'
import MovieCard from '../reuseableComponents/MovieCard'
import { movies } from '../../store/utils'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'

const HotNew = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <h1 className="text-white text-xl lg:text-3xl font-semibold text-center mb-5">
        Hot New
      </h1>

      <div className="carousel-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-2/3 overflow-hidden"
          breakpoints={{
            450: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {movies.map((movie, i) => (
            <SwiperSlide key={i}>
              <Link to={`/movie/${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default HotNew
