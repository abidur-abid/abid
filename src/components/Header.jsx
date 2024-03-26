
'use client'
import Image from 'next/image';
// import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { Link } from 'react-scroll';

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(true);
    const handleMobileMenu = () =>{
        setMobileMenu(!mobileMenu);
        
    }

    return (
        <>
        <header className='sticky top-0 z-50 invisible lg:visible'>
            <div className='header'>
            <div>
                <Link to="home" 
                spy={true} 
                smooth={true} 
                offset={-500} 
                duration={500}  className='hover:text-secondaryColor cursor-pointer'><h1 className='logo'>ABID.</h1></Link>
            </div>
            <nav>
                <ul className='nav '>
                    <Link to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-5000} 
                    duration={500}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="20" fill="currentColor"><path d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2h-5z"></path></svg>Home</Link>
                    <Link to="skills" 
                    spy={true} 
                    smooth={true} 
                    offset={-150} 
                    duration={500}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="20" fill="currentColor"><path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z"></path></svg>Skills</Link>
                    <Link to="projects" 
                    spy={true} 
                    smooth={true} 
                    offset={-150} 
                    duration={500}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2.5 24 24" width="20" fill="currentColor"><path d="M3 .565h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"></path></svg>Projects</Link> 
                    <Link to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-150} 
                    duration={500}  className='navLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M19.25 5.52l-8.574 7.6a1 1 0 0 1-1.331 0L.703 5.56c.064-.055.131-.105.203-.152L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872c.054.035.106.073.156.113zM20 7.69V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.698l8.014 6.916a3 3 0 0 0 3.992 0L20 7.69z"></path></svg>Contact</Link>
                </ul>
            </nav>
            </div>
            
        </header>
        <header className='sticky top-0 z-50 visible lg:invisible px-10'>
          <div className='mobileHeader '>
          <div>
                <Link to="home" 
                spy={true} 
                smooth={true} 
                offset={-500} 
                duration={500} className='hover:text-secondaryColor cursor-pointer'><h1 className='logo'>ABID.</h1></Link>
            </div>
            <nav className='relative '>
               {
                mobileMenu ? <button onClick={handleMobileMenu}><IoMdMenu className='text-2xl hover:text-secondaryColor'/></button> 
                :
                <div className='absolute right-0 -mt-3 transition duration-700 ease-in-out ' onClick={handleMobileMenu}>
                <div className='flex justify-end' >
                <button   className=''><FaMinus className='text-2xl hover:text-secondaryColor '/></button>
                </div>
                <ul className=' bg-headerBackgroundColor w-40 h-36 rounded px-5 overflow-auto' >
                <Link to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-5000} 
                    duration={500} className='mobileNavLink cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="20" fill="currentColor"><path d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2h-5z"></path></svg>Home</Link>
                <Link to="skills" 
                    spy={true} 
                    smooth={true} 
                    offset={-150} 
                    duration={500} className='mobileNavLink mt-2 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="20" fill="currentColor"><path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z"></path></svg>Skills</Link>
                <Link to="projects" 
                    spy={true} 
                    smooth={true} 
                    offset={-150} 
                    duration={500} className='mobileNavLink mt-2 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2.5 24 24" width="20" fill="currentColor"><path d="M3 .565h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"></path></svg>Projects</Link> 
                <Link to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-150} 
                    duration={500} className='mobileNavLink mt-2 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M19.25 5.52l-8.574 7.6a1 1 0 0 1-1.331 0L.703 5.56c.064-.055.131-.105.203-.152L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872c.054.035.106.073.156.113zM20 7.69V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.698l8.014 6.916a3 3 0 0 0 3.992 0L20 7.69z"></path></svg>Contact</Link>                              
                </ul>
                </div>
                
               
               }
               
                
            </nav>
          </div>
            </header>
            
        </>
    );
};

export default Header;
