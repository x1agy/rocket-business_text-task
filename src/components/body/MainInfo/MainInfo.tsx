import React from "react";
import './MainInfo.css';
import { fishTextType } from "../../../types/fishTextType";
import fishTextData from '../../../assest/fishText.json';

const MainInfo = () => {

    const fishText: fishTextType = fishTextData;

    return(
        <div
            className="MainInfo"
        >
            <div className="mainInfo_textHolder">
                <h1>{fishText?.first_block.title}</h1>
                <p>{fishText?.first_block.description}</p>
            </div>
            <img src="https://sun9-29.userapi.com/impg/5Q0EPLfWtAMaZV6j2CNBJM6ZM8vrNoG_xs3yaQ/fgg4xcE8Rgk.jpg?size=1900x1064&quality=96&sign=e57260dbc303661c7910e722f77f1269&type=album" 
                alt="sideImage" 
                
                />
        </div>
    )
}

export default MainInfo;