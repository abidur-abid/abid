'use client'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";
// import Link from "next/link";





const Footer = () => {
    

    return (
        <footer className='px-10 lg:px-0'>
            <div className='footer'>
            <div className='footerInfo '>
                <h1 className='logo mx-auto lg:ml-0'>Get In Touch</h1>
                <p className='my-4 text-lg text-center lg:text-start'>I will be happy to talk with you. Just contact me by any media, which are mentioned on this website!</p>
                <ul className='socialLink mx-auto lg:ml-0'>
                <a href={'https://www.linkedin.com/in/abid40/'} target='_blank' ><FaLinkedin/></a>
                    <a href={'https://github.com/abidur-abid'} target='_blank' ><FaGithub /></a>
                    {/* <a href={'https://www.upwork.com/freelancers/~01e8f0b5d950da36b8?viewMode=1'} target='_blank' ><SiUpwork /></a> */}
                    <a href={'https://web.facebook.com/abidurabid40'} target='_blank' ><FaFacebook /></a>
                    
                </ul>
            </div>
            <div className='boxGroup'>
                <Link to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-150} 
                    duration={500} className="cursor-pointer">
                <div className='box'>
                <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="20" fill="currentColor"><path d="M19.25 5.52l-8.574 7.6a1 1 0 0 1-1.331 0L.703 5.56c.064-.055.131-.105.203-.152L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872c.054.035.106.073.156.113zM20 7.69V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.698l8.014 6.916a3 3 0 0 0 3.992 0L20 7.69z"></path></svg>
                <p className='uppercase mt-2'>Email</p>
                </div>
                </Link>
               <Link to="projects" 
                    spy={true} 
                    smooth={true} 
                    offset={-150} 
                    duration={500} className="cursor-pointer">
               <div className='box'>
                <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2.5 24 24" width="20" fill="currentColor"><path d="M3 .565h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"></path></svg>
                <p className='uppercase mt-2'>Projects</p>
                </div>
               </Link>
            </div>
            </div>
        </footer>
    );
};

export default Footer;