import React from 'react';
import { motion } from 'framer-motion';
import SideBar from '../Sidebar/SideBar';
const Navbar = () => {
    return (

        <div className=" px-4 md:px-4 py-8 flex overflow-y-hidden max-w-[100vw] w-full items-center z-50  min-h-[100px] fixed top-0 justify-between">
            <div className='flex gap-2 items-center'>
                <SideBar />
                <motion.h3
                    initial={{ opacity: 0, scale: 0.5, }}
                    animate={{ opacity: 1, scale: 1, }}
                    transition={{ duration: 0.5 }}
                    className=" hidden sm:flex text-4xl ml-[60px] font-dance font-[700] tracking-wider">
                    Rakesh Shinde
                </motion.h3>
            </div>
            <a href='mailto:rakeshshinde5253@gmail.com' target={'_blank'}>
                <button className=" px-2 py-2 rounded-sm border-[1px] transition duration-200 hover:bg-green-500 hover:border-none border-slate-400 ">Contact Me</button>
            </a>
        </div>

    );
}

export default Navbar;
