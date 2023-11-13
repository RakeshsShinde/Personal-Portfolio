import React from 'react';

const ProjectTag = ({
    name,
    onClick,
    isSelected
}) => {

    const buttonStyles = isSelected
        ? "text-white bg-purple-600 border-none"
        : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <div
            onClick={() => onClick(name)}
            className={`${buttonStyles} rounded-full border-2 px-6 py-1 text-xl cursor-pointer`}
        >
            {name}
        </div>
    );
}

export default ProjectTag;
