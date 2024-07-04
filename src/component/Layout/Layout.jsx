// Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col bg-[#121926] p-4 sm:p-8 min-h-screen'>
      <Navbar />
        <main className='flex-grow mt-8'>
          {children} 
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
