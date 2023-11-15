import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { EducationData } from '../EducationSection/EducationData';
import EducationIcon from '../../../Icons/EducationIcon';
import CertificateIcon from '../../../Icons/CertificateIcon';
import '../../../index.css';
const Education = () => {

    const studyIconStyles = {
        background: '#fefcfb',
    }

    const certificateIconStyles = {
        background: '#788bff',
    }
    return (
        <section id="Education" className='min-h-screen h-[fit-content] p-10 max-w-full  overflow-x-hidden  bg-gradient text-white font-mons '>
            <h2 className='text-white text-center text-4xl font-mons font-semibold mb-10'>Education & certificate</h2>
            <div className='w-full h-full flex justify-center items-center'>

                <VerticalTimeline
                >
                    {
                        EducationData.map((element) => {
                            let isStudyIcon = element.icon === 'study';
                            let showButton =
                                element.btnText !== undefined
                                && element.btnText !== null
                                && element.btnText !== ""
                            return (
                                <VerticalTimelineElement
                                    key={element.id}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={isStudyIcon ? studyIconStyles : certificateIconStyles}
                                    icon={isStudyIcon ? <EducationIcon /> : <CertificateIcon />
                                    }
                                >
                                    <h3 className=' text-black text-[22px] font-mons font-bold'>{element.title}</h3>
                                    <h5 className='text-[16px] text-neutral-800/80 font-[700] font-raleway'>{element.location}</h5>
                                    <p id='description' className='text-2xl text-neutral-600/90 font-mons py-4 font-[800]'>{element.description}</p>
                                    {showButton && (
                                        <a target={'_blank'} href={element.link} className={`
                                        ${element.icon == "study" ? "bg-green-500" : "bg-sky-500"}
                                        ${element.icon == "study" ? "hover:bg-green-600" : "hover:bg-sky-600"}
                                         transition-all duration-150 py-1 md:py-2 px-1 text-white rounded-md float-left
                                        `}>{element.btnText}</a>
                                    )}
                                </VerticalTimelineElement>

                            )
                        })
                    }

                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Education;
