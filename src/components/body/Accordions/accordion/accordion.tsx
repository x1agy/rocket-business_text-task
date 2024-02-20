import React, { useState } from "react";
import './accordion.css';

const Accordion: React.FC<{title: string, description: string | string[] }> = ({title, description}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const expandIcons = [
        'https://sun9-65.userapi.com/impg/j7P1gl_VRTWjfzGZfrP488AIAFersWDSIU1niQ/P6gE4APOWmU.jpg?size=48x48&quality=96&sign=ec01e45834e83c5d21f33a2aed8199bf&type=album', 
        'https://sun9-31.userapi.com/impg/jR4BuMagWj1a_q9VfiWtWRSiTtCBfoLRClOVhw/1iTdi5ON-wk.jpg?size=48x4&quality=96&sign=fbdc6ef32283b009405fcf35cc161a1d&type=album',
    ];

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <div
            className='Accordion'
            onClick={handleToggle}
        >
            <h1>{title}</h1>
            <img src={isExpanded ? expandIcons[1] : expandIcons[0]} alt="" />
            <div 
                style={{
                    display: isExpanded ? 'block' : 'none'
                }}
            >
                {/* @ts-ignore */}
                {typeof description !== 'string' ? description.map(item => <p>{item}</p>) : <p>{description}</p>}
            </div>
        </div>
    )
}

export default Accordion;
