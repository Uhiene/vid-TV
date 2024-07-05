import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center">
            <button
                className="text-gray-500 focus:outline-none lg:hidden"
                onClick={toggleMenu}
            >
                {isOpen ? <AiOutlineClose className="h-6 w-6 text-red-500" /> : <AiOutlineMenu className="h-6 w-6 text-green-500" />}
            </button>

            <div
                className={`lg:hidden ${isOpen ? 'p-6 flex flex-col items-center gap-4 absolute top-14 left-0 w-full bg-black text-center text-white text-lg ' : 'hidden'}`}
            >
                <Link to='/create'>Create</Link>
                <p>Movies</p>
                <p>Series</p>
                <p>Anime</p>
                <p>Shows</p>
                <button className='bg-green-500 text-white rounded-lg p-2 min-w-28 text-lg font-medium'>Login</button>
            </div>
        </div>
    );
};

export default HamburgerMenu;
