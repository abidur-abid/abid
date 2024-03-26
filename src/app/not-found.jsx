import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import notFound from '@/assets/notFound.png'

const NotFound = () => {
    return (
        <section className='my-28'>
            <Image src={notFound} className='mx-auto'/>
           <div className='flex justify-center my-4'>
           <Link href={'/'} className='button'>Back To Home</Link>
           </div>
        </section>
    );
};

export default NotFound;