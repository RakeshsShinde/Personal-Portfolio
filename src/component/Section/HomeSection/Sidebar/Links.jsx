import React from 'react';
import { motion } from 'framer-motion';
const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.08,
            staggerDirection: -1,
        }
    }
}
const itemVariants = {
    open: {
        x: 0,
        opacity: 1,
    },
    closed: {
        x: -50,
        opacity: 0,
    }
}

export const items = [
    "Home",
    "About",
    "Education",
    "Projects",
    "Skills",
    "Contact Me",
]

const Links = () => {
    return (
        <motion.div variants={variants} className='absolute  w-full h-full flex flex-col items-center justify-center md:justify-normal md:mt-[250px] gap-[20px] md:gap-[30px] '>
            {items.map((i, index) => (
                <motion.a variants={itemVariants} className='text-2xl md:text-[30px] font-mons font-semibold text-slate-500 hover:text-slate-800' href={`#${i}`}>{i}</motion.a>
            ))}
        </motion.div>
    );
}

export default Links;
