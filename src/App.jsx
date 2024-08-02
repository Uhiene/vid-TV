import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Create from './pages/Create'
import Account from './pages/Account'
import Edit from './pages/movies/Edit'
import Movie from './pages/movies/Movie'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/account" element={<Account />} />
        <Route path="/movies/edit/:slug" element={<Edit />} />
        <Route path="/movies/:slug" element={<Movie />} />
      </Routes>
    </Layout>
  )
}

export default App
