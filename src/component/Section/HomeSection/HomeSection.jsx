import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero';
const HomeSection = () => {
    return (
        <>
            <section id='Home' className="max-h-screen max-w-full  overflow-y-hidden  flex flex-col justify-between text-white">
                <Navbar />
                <Hero />
            </section>
        </>
    );
}

export default HomeSection;
