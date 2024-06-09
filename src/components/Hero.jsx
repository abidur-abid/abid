'use client'
import Image from 'next/image';
import React from 'react';
import abid from '@/assets/abid.jpeg';
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import resume from '@/assets/Resume.pdf';

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
        <a href={'https://web.facebook.com/abidurabid40'} target='_blank' ><FaFacebook /></a>
      </ul>
      <div className='flex justify-center mt-6'>
        <a href={resume} download='Resume' className='button cursor-pointer'>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
