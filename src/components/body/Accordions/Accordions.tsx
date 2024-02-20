import React from "react";
import './accordions.css'
import Accordion from "./accordion/accordion";
import { fishTextType } from "../../../types/fishTextType";
import fishTextData from '../../../assest/fishText.json';

const Accordions = () => {

    const accordionsData: fishTextType = fishTextData;

    return(
        <div
            className="Accordions"
        >
            <h1>Часто задаваемые вопросы</h1>
            {accordionsData.second_block.map(item => {
                return(
                    <Accordion {...item}/>
                )
            })}
        </div>
    )
}

export default Accordions;