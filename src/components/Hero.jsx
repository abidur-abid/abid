'use client'
import Image from 'next/image';
import React from 'react';
import abid from '@/assets/abid.jpeg'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-scroll';


const Hero = () => {
    return (
        <div className='mt-28'>
            <Image src={abid} className=' w-56 h-56 rounded-full mx-auto border-secondaryColor border-4'/>
            <h1 className='text-2xl text-center  mt-4 '>Abidur Rahman Abid</h1>
            <div className='flex justify-center'>
                <h2 className='text-4xl text-center  mt-4 rounded font-bold '>Front-end Developer</h2>
            </div>
            <ul className='socialLink mt-4'>
            <a href={'https://www.linkedin.com/in/mdabidurrahmanabid/'} target='_blank' ><FaLinkedin/></a>
                    <a href={'https://github.com/abidur-abid'} target='_blank' ><FaGithub /></a>
                    {/* <a href={'https://www.upwork.com/freelancers/~01e8f0b5d950da36b8?viewMode=1'} target='_blank' ><SiUpwork /></a> */}
                    <a href={'https://web.facebook.com/abidurabid40'} target='_blank' ><FaFacebook /></a>
                         
            </ul>
            <div className='flex justify-center mt-6'>
             <Link to='contact' 
                spy={true} 
                smooth={true} 
                offset={-150} 
                duration={500} className='button cursor-pointer'>Contact</Link>
            </div>
        </div>
    );
};

export default Hero;