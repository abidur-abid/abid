import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import alphaneauten from '@/assets/project1.png'
import abid1 from '@/assets/project2.png'
import justice from '@/assets/project3.png'
import lgud from '@/assets/project4.png'
import rakib from '@/assets/project5.png'
import abid2 from '@/assets/project6.png'
import nexthunger from '@/assets/p7.png'
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
    return (
        <section className='mt-28'>
           <div className='lg:grid grid-cols-3 justify-center  gap-x-10  px-10'>
                <Link href='https://alphanauten.netlify.app/' target='_blank' className='singleProject'><Image src={alphaneauten} className='my-5 skeleton'/></Link>
                <Link href='https://resilient-chimera-b2f6ac.netlify.app/' target='_blank' className='singleProject'><Image src={justice} className='my-5 skeleton'/></Link>
                <Link href='https://mdabid.netlify.app/' target='_blank' className='singleProject'><Image src={abid2} className='my-5 skeleton'/></Link>
                <Link href='https://lgud.vercel.app/' target='_blank' className='singleProject'><Image src={lgud} className='lg:mt-12 my-5 skeleton'/></Link>
                <Link href='https://client-23b8b.web.app/' target='_blank' className='singleProject'><Image src={abid1} className='lg:-mt-36 my-5 skeleton'/></Link>
                <Link href='https://rakibsir-client.web.app/' target='_blank' className='singleProject'><Image src={rakib} className='lg:-mt-96 my-5 skeleton'/></Link>
                <Link href='https://nexthunger.vercel.app/' target='_blank' className='singleProject'><Image src={nexthunger} className='lg:-mt-96 my-5 skeleton'/></Link>
           </div>
        </section>
    );
};

export default Projects;