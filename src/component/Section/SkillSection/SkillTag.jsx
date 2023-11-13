import React from 'react';

const SkillTag = ({
    onClick,
    isSelected,
    name
}) => {
    const buttonStyles = isSelected ?
        "text-white bg-sky-500 border-none" :
        "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button
            onClick={() => onClick(name)}
            className={`${buttonStyles} mb-2  rounded-full border-2 px-6 py-1 text-xl cursor-pointer`}>
            {name}
        </button>
    );
}

export default SkillTag;
