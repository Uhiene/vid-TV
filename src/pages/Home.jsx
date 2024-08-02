'use client'
import React, { useEffect, useState } from 'react'
import Banners from '../components/home/Banners'
import Posters from '../components/home/Posters'
import Subscriptions from '../components/home/Subscriptions'
import { posters } from '../data/posters'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = posters
      setMovies(moviesData)
    }

    fetchMoviesData()
  }, [])

  return (
    <>
      <Banners />
      <Posters movies={movies} />
      <Subscriptions />
    </>
  )
}

export default Home
