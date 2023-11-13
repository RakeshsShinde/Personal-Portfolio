import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
const socialLinks = [
    {
        image: '/images/About/insta.svg',
        link: 'https://www.instagram.com'
    },
    {
        image: '/images/About/github.svg',
        link: 'https://github.com/RakeshsShinde'
    },
    {
        image: '/images/About/linkdin.svg',
        link: 'https://www.linkedin.com/in/rakesh-shinde-a9689519b/'
    }
]

const variants = {
    initial: {
        x: -300,
        opacity: 0,
        y: 100,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
            staggerDirecttion: 1,
        }
    }
}

const AboutSection = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <>
            <section id='About' className='min-h-screen  max-w-full flex flex-col items-center  justify-center text-white'>
                <motion.div
                    ref={ref}
                    variants={variants}
                    initial={'initial'}
                    animate={isInView && "animate"}
                    className='h-[100%] w-full px-14 md:w-[60%]  md:px-8 py-20 flex flex-col gap-8 justify-center'>
                    <motion.h1
                        variants={variants}
                        className='text-center font-mons text-[50px] border-b-[5px] border-b-green-500  font-semibold tracking-wide'
                    >
                        About <span className='text-green-500 tracking-wide font-open_sans font-semibold'>Me</span>
                    </motion.h1>
                    <motion.div
                        variants={variants}
                        className='h-[50%] text-[18px] font-mons text-slate-400/90 '>
                        Greetings, I'm Rakesh Shinde, a Full Stack Developer who graduated with a Master's degree in Computer Science in 2023. My passion for coding and technology has been the driving force behind my journey.
                        I'm well-versed in a variety of web development technologies, including HTML, CSS, JavaScript, React, Node.js, Express, Redux, and Git/GitHub. These tools allow me to create seamless, user-friendly web applications and websites that captivate audiences.
                        I thrive on turning concepts into tangible, functional solutions. This drive has led me to build a diverse range of projects that showcase my skills, from interactive web applications to responsive, visually engaging user interfaces.
                        With a strong foundation in both front-end and back-end development, I relish the challenges of optimizing server-side performance and crafting delightful user experiences. My proficiency in version control with Git and collaborative development on GitHub ensures efficient project management and teamwork.

                    </motion.div>
                    <motion.div variants={variants} className='flex justify-center gap-6 '>
                        {socialLinks.map((item) => (
                            <motion.a href={item.link} variants={variants}>
                                <img className='cursor-pointer transition duration-150 hover:scale-110' src={item.image} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}

export default AboutSection;
