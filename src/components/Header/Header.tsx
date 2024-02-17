import React from "react";
import './comp_header.css';
import './header.css';
import './mob_header.css'

const Header = () => {

    const [isMenuExpanded, setIsMenuExpanded] = React.useState<boolean>(false);
    const [isFormOpen, setIsFormOpen] = React.useState<boolean>(false);

    const mobileMenuExpandAllButtonsLinks = [
        'https://sun9-77.userapi.com/impg/8lxgakSyIWefQ-exNImbmdkcTFLX-MWtMG2HBQ/qIfzWhK9jLM.jpg?size=74x52&quality=96&sign=7a9f79d5b5ab95deda82a65024593cc0&type=album',
        'https://sun9-55.userapi.com/impg/X2XHV2v4W0KPaZFzL2UvqaKa2XtKazNmxsxWLQ/vHLc-ApOXFM.jpg?size=58x60&quality=96&sign=b73553c1752325d977339621c35f022f&type=album'
    ]

    return(
        <>
            <div className="comp_header">
                <div className="comp_header_header">
                    <div className="comp_headerLocation">
                        <img src="/logo.jpg" alt="LOGO" className="comp_headerLogo"/>
                        <img src="https://sun9-21.userapi.com/impg/W9uUG-HP4DanrLkec0C1qcFHUpd_tVe738-2_w/3IeIfL29oQM.jpg?size=266x76&quality=96&sign=4f96cc3cc9dc293d53ed4704fa3b3e20&type=album" alt="location" className="headerLargeLocation"/>
                    </div>
                    <div className="comp_headerFeedback">
                        <img src="https://sun9-1.userapi.com/impg/UrH-iU2NAlUKyKnqxfbeoqXyvjGdZ1yC_4v2sw/YS0qJQpRSpU.jpg?size=56x56&quality=96&sign=cd96d71e4a1d35ae438af00e532c7059&type=album" alt="whatsappIcon" />
                        <a href="tel:+78630000000">+7(863) 000 00 00</a>
                        <button
                            onClick={() => setIsFormOpen(prev => !prev)}
                        >Записаться на приём</button>
                    </div>
                </div>
                <div className="comp_header_footer">
                    <a href="/">О клинике</a>
                    <a href="/">Услуги</a>
                    <a href="/">Специалисты</a>
                    <a href="/">Цены</a>
                    <a href="/">Контакты</a>
                </div>
            </div>
            
            <div className="mob_header">
                <>
                    <button
                        onClick={() => {
                            setIsMenuExpanded(prev => !prev)
                        }}
                        className="expandMenuButton"
                    >
                        <img src={isMenuExpanded ? mobileMenuExpandAllButtonsLinks[1] : mobileMenuExpandAllButtonsLinks[0]} alt="menubtn" />
                    </button>
                    <img src="/logo.jpg" alt="LOGO" className="mob_headerLogo"/>
                    <div className="mob_header_contacts">
                        <a href="tel:+78630000000">+7(863) 000 00 00</a>
                        Ростов-на-Дону 
                    </div>
                </>
                <div 
                    className="mob_header_menu"
                    style={{
                        display: isMenuExpanded ? 'flex' : 'none'
                    }}
                >
                    <a href="/">О клинике</a>
                    <a href="/">Услуги</a>
                    <a href="/">Специалисты</a>
                    <a href="/">Цены</a>
                    <a href="/">Контакты</a>
                    <button
                        onClick={() => {
                            setIsFormOpen(prev => !prev)
                            setIsMenuExpanded(prev => !prev)
                        }}
                    >Записаться на приём</button>
                </div>
            </div>
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

export default Header