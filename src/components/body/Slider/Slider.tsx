import React from "react";
import './slider.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { fishTextType } from "../../../types/fishTextType";
import fishTextData from '../../../assest/fishText.json';

const Slider = () => {

    const slidersData: fishTextType['third_block'] = fishTextData.third_block;

    const [isFormOpen, setIsFormOpen] = React.useState<boolean>(false);

    return(
        <>
            <Swiper
                modules={[Pagination]} 
                pagination={{clickable: true}}
                className="Slider"
            >
                {slidersData.map(item => {
                    return(
                        <SwiperSlide
                            className="slideHolder"
                        >
                            <div
                                className="slide"
                            >
                                <h1>{item.mainTitle}</h1>
                                <h3>{item.cooTitle}</h3>
                                {item.ul.map((item, index) => {
                                    return(
                                        <li key={index}>{item}</li>
                                    )
                                })}
                                <h4>Всего {item.price}₽ <small>{item.price + 700}₽</small></h4>
                                <button className="slideFirstButton" onClick={() => {
                                    setIsFormOpen(prev => !prev);
                                    window.scrollTo({top: 0})
                                }}>Записаться</button>
                                <button className="slideSecondButton" onClick={() => {
                                    setIsFormOpen(prev => !prev);
                                    window.scrollTo({top: 0})
                                }}>Подробнее</button>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <form className="form_modal"
                style={{
                    display: isFormOpen ? 'flex' : 'none'
                }}
            >
                <div className="form_modal_holder">
                    <img src="https://sun9-17.userapi.com/impg/XeIDm3L-BxjUNybkXG0HQB_qzOJkaQsNWhJPZg/BMsoRVTOsqw.jpg?size=44x44&quality=96&sign=eb828042d47924bf1ce1813afbf4d766&type=album" 
                        className="closeIcon" 
                        alt="close" 
                        onClick={() => {
                            setIsFormOpen(prev => !prev)
                        }}
                    />
                    <div className="formDescription">
                        <h1>Запишитесь <br /> на приём онлайн</h1>
                        <p>Администратор свяжется с вами <br /> через WhatsApp в течении дня<br /> и уточнит детали</p>
                    </div>
                    <div className="formFillArea">
                        <input type="text" className="nameInput" placeholder="ФИО"/>
                        <input type="number" className="phoneInput" placeholder="Номер телефона"/>
                        <input type="email" name="email" className="emailInput" placeholder="Электронная почта"/>
                        <button type="submit"
                            onClick={(e) => e.preventDefault()}
                        >Записаться</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Slider