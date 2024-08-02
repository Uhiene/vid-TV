import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <main className="flex-grow mt-16 p-4 sm:p-8 max-w-7xl sm:mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
