import React from 'react';
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import '../../../index.css';
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}
const SliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        opacity: 1,
        transition: {
            repeat: "Infinity",
            repeatType: "mirror",
            duration: 15,
        }
    }
}

const Hero = () => {
    return (
        <div className='h-[100vh] w-full  flex justify-between bg-gradient overflow-hidden  '>
            <div className='mt-[100px] w-full px-8 flex flex-col md:flex-row justify-between md:px-20 py-1 '>
                <div className='w-full h-[50%] text-center md:text-left md:w-[60%] md:h-full flex flex-col justify-center '>
                    <motion.div variants={textVariants} initial="initial" animate="animate" className='mx-auto  py-8 mb-[20px] flex flex-col  gap-2'>
                        <motion.h3 className='text-2xl md:text-4xl font-mons font-semibold tracking-wide'>Hi,I am</motion.h3>
                        <motion.h2 variants={textVariants} className=' text-2xl md:text-4xl font-mons font-semibold tracking-wide'>Rakesh Shinde</motion.h2>
                        <motion.div className=' w-[300px] md:w-[800px] lg:w-[900px]  text-[30px] md:text-[40px] xl:text-[80px] font-bold font-mons'>
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer', 'Mern Developer', "Passionate Learner", "Coding Enthusiast"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 200,
                                    wrapperClassName: 'typewriter_text'

                                }}
                            />
                        </motion.div>
                        <motion.div variants={textVariants} className='flex gap-6 md:gap-4 w-full items-center'>
                            <a className='cursor-pointer' href='#Projects' >
                                <button
                                    className='p-[8px] md:p-[10px] z-50 cursor-pointer border-[1px] rounded-lg border-white'>
                                    See Latest Work
                                </button>
                            </a>
                            <a className='cursor-pointer' target={'_blank'} href='https://drive.google.com/file/d/1Ihusy6R-TXYZKNVL-Ycx_iU5_lvVzFmb/view' download={true}>
                                <button
                                    className='p-[8px] md:p-[10px] z-50 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg border-white'>
                                    Download Cv
                                </button>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div
                    variants={SliderVariants}
                    initial="initial"
                    animate="animate"
                    className='absolute h-[250px]  z-0 invisible md:visible md:w-[30%] lg:w-[50%] text-[20vh] -bottom-[40px] whitespace-nowrap text-[#ffffff49]'>
                    Rakesh shinde
                </motion.div>
                <motion.div
                    initial={{ x: 250, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                    className='h-full overflow-hidden w-full mx-auto flex  md:flex justify-center items-center  z-20 '>
                    <img src={'/images/rakeshs.jpg'}
                        className='max-h-[250px] max-w-[250px] md:max-w-[400px] md:max-h-[400px] w-[400px] filter grayscale hover:grayscale-0 relative rounded-[50%] lg:max-h-[450px] lg:max-w-[500px] object-cover object-center' />
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
