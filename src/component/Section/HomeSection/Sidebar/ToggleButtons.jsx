import React from 'react';
import { motion } from 'framer-motion';
const ToggleButtons = ({
    setopen
}) => {
    return (
        <button
            onClick={() => setopen((prev) => !prev)}
            className='w-[50px] z-10 h-[50px] rounded-full  fixed top-[25px] left-[25px] bg-transparent border-none '>
            <svg width="40px" height="30px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <motion.path
                        variants={{
                            closed: { d: "M6 5L20 5" },
                            open: { d: "M6 5L20 18" }
                        }}
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round">
                    </motion.path>
                    <motion.path variants={{
                        closed: { d: "M6 10L20 10" },
                        open: { d: "" }
                    }} stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round">
                    </motion.path>
                    <motion.path
                        variants={{
                            closed: { d: "M6 15L20 15" },
                            open: { d: "M6 18L20 5" }

                        }}
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round">
                    </motion.path>
                </g>
            </svg>
        </button>
    );
}

export default ToggleButtons;
