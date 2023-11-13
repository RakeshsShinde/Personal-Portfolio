import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useAnimation, useInView } from 'framer-motion';
import { projectData } from './ProjectData'

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

const ProjectsSection = () => {
    const sectionControls = useAnimation();
    const ref = useRef();
    const isinView = useInView(ref, { triggerOnce: true });

    if (isinView && sectionControls) {
        sectionControls.start('animate');
    }

    return (
        <>
            <section id='Projects' className='max-h-[100%] overflow-hidden  min-h-[800px] max-w-full  px-24  py-8 '>
                <motion.div className='h-full' ref={ref} initial="initial" animate={sectionControls}>
                    <motion.div variants={variants} >
                        <p className='text-4xl font-bold border-b-4 text-white border-green-500 p-1  inline'>Projects</p>
                        <p className='py-6 my-3 font-mons font-semibold text-neutral-300/90 '>Check out my Projects.. </p>
                    </motion.div>
                    <motion.div variants={variants} className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12' >
                        {projectData?.map((project) => (
                            <motion.div key={project.id} variants={variants}>
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imgUrl={project.imageUrl}
                                    url={project.url}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}

export default ProjectsSection;
