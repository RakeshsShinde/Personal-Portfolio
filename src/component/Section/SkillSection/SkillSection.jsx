import React from 'react';
import { useState } from 'react';
import SkillTag from './SkillTag';
import { Skills } from '../SkillSection/SkillsData';
import { motion, AnimatePresence } from 'framer-motion';
const SkillSection = () => {
    const [Tab, setTab] = useState('Languages/Technologies');

    const handleTabChange = (newTab) => {
        setTab(newTab);
    }

    const filteredSkills = Skills.filter((skill) => skill.type.includes(Tab))

    const containerVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
    };

    const skillItemVariants = {
        hidden: { opacity: 0, y: -20, translation: { duration: 1 } },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 2, delay: index * 0.1 },
        }),
    };
    return (
        <>
            <section id='Skills' className='max-h-[100%] overflow-y-hidden bg-gradient  max-w-full  px-2 py-2 min-h-[800px]  md:px-24  md:py-14 '>
                <motion.div
                    variants={containerVariants}
                    initial={'hidden'}
                    animate={'animate'}
                    className='text-white max-w-screen-lg  mx-auto p-4 
                flex flex-col w-full h-full justify-center '>
                    <div>
                        <p className='text-4xl font-bold border-b-4 border-green-500 p-1 inline'>Skills</p>
                        <p className='py-6 my-1 font-mons font-semibold text-neutral-300/90 '>These are Technologies I've worked with </p>
                    </div>
                    <div className='text-white flex-wrap md:flex flex-row justify-center items-center gap-4 py-6 text-[16px]  font-mons '>
                        <SkillTag onClick={handleTabChange} name={"Languages/Technologies"} isSelected={Tab === "Languages/Technologies"} />
                        <SkillTag onClick={handleTabChange} name={"FrameWork/libary"} isSelected={Tab === "FrameWork/libary"} />
                        <SkillTag onClick={handleTabChange} name={"Tools"} isSelected={Tab === "Tools"} />
                        <SkillTag onClick={handleTabChange} name={"Databases"} isSelected={Tab === "Databases"} />
                    </div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ' >
                        <AnimatePresence>

                            {
                                filteredSkills.map(({ id, src, title, style }, index) => (
                                    <motion.div
                                        variants={skillItemVariants}
                                        initial={'initial'}
                                        animate={'animate'}
                                        custom={index}
                                        exit="hidden"
                                        key={id}
                                        className={`shadow-md cursor-pointer hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                        <img className='w-20 mx-auto mb-1' src={`/images/Skills/${src}`} alt={'image'} />
                                        <p>{title}</p>
                                    </motion.div>
                                ))
                            }
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default SkillSection;
