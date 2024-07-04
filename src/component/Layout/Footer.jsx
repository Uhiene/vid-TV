// src/components/Footer.jsx

import React from 'react';
import { SiGoogledisplayandvideo360 } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-20 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between sm:items-center p-4 sm:p-0 gap-6 sm:gap-0">
        <div>
          <div className='flex gap-2 items-center text-lg sm:text-2xl'>
            <span><SiGoogledisplayandvideo360 /></span>
            <h1 className='font-semibold'>VidTV</h1>
          </div>
          <p className="text-sm">A project to showcase movies and their details.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p>Email: info@movieproject.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
