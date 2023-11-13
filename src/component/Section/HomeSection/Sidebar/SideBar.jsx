import React from 'react';
import { useState } from 'react';
import Links from './Links';
import ToggleButtons from './ToggleButtons';
import { motion } from 'framer-motion'
const SideBar = () => {
    const [open, setopen] = useState(false);
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }
    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className='flex flex-col justify-center items-center z-40 bg-white text-black '>
            <motion.div
                variants={variants}
                className='fixed top-0 h-[700px] md:h-[800px] left-0 bottom-0 w-[300px] md:w-[400px] bg-white'>
                <Links />
            </motion.div>
            <ToggleButtons setopen={setopen} />
        </motion.div>
    );
}

export default SideBar;
