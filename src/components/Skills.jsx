import Image from 'next/image';
import html from '@/assets/html.png'
import css from '@/assets/css.png'
import js from '@/assets/js.png'
import tailwindcss from '@/assets/tailwindcss.png'
import reactjs from '@/assets/reactjs.png'
import firebase from '@/assets/firebase.png'
import nextjs from '@/assets/nextjs.png'
import nodejs from '@/assets/nodejs.png'
import mongodb from '@/assets/mongodb.png'
import reactrouter from '@/assets/reactrouter.png'
import expressjs from '@/assets/expressjs.png'
import mongoose from '@/assets/mongoose.png'

const Skills = () => {
    return (
        <section className='skills'>
            <div className='card'>
                <Image src={html} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>HTML</h1>
            </div>
            <div className='card'>
                <Image src={css} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>CSS</h1>
            </div>
            <div className='card'>
                <Image src={js} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>JS</h1>
            </div>
            <div className='card'>
                <Image src={tailwindcss} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>TAILWIND CSS</h1>
            </div>
            <div className='card'>
                <Image src={reactjs} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>REACT JS</h1>
            </div>
            {/* <div className='card'>
                <Image src={reactrouter} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>REACT ROUTER</h1>
            </div> */}
            <div className='card'>
                <Image src={firebase} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>FIREBASE</h1>
            </div>
            <div className='card'>
                <Image src={nextjs} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>NEXT JS</h1>
            </div>
            {/* <div className='card'>
                <Image src={nodejs} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>NODE JS</h1>
            </div> */}
            {/* <div className='card'>
                <Image src={expressjs} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>EXPRESS JS</h1>
            </div> */}
            <div className='card'>
                <Image src={mongodb} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>MONGODB</h1>
            </div>
            {/* <div className='card'>
                <Image src={mongoose} className='cardImg'/>
                <h1 className='text-xl text-center -mt-8'>MONGOOSE</h1>
            </div> */}
        </section>
    );
};

export default Skills;