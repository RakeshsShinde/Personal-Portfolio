import React from 'react';
import { BsCodeSlash } from 'react-icons/bs'
const ProjectCard = ({
    imgUrl,
    title,
    description,
    url,

}) => {
    return (
        <div>
            <div
                className='h-52 md:h-72 rounded-t-xl relative group cursor-pointer'
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: 'center' }} >
                <div
                    className={`
                overlay 
                absolute 
                items-center
                justify-center
                top-0 
                left-0 
                w-full
                h-full
              bg-neutral-900/60
                bg-opacity-0
                hidden
                group-hover:flex
                group-hover:bg-opacity-80
                transition-all
                duration-500
                `}>
                    <a
                        href={url}
                        target={'_blank'}
                        className='h-14 group  w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'
                    >
                        <BsCodeSlash
                            size={22}
                            className='
                        h-10 
                        w-10 
                        text-[#ADB7BE] 
                        cursor-pointer 
                        absolute 
                        left-1/2 
                        top-1/2 
                        -translate-x-1/2
                        -translate-y-1/2
                        group-hover:text-white
                        transform ' />
                    </a>
                </div>
            </div>
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE] text-[15px] font-mons font-semibold'>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
