import React, {useState} from 'react'
import "./qualifications.css"

export const Qualifications = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab= (index) => {
        setToggleState(index);
    }



    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 0 
                                ? "qualification__button qualification__active button--flex" 
                                :"qualification__button button--flex"
                         }
                         onClick={() => toggleTab(0)}
                    >
                        <i className="uil uil-graduation-cap qualification__active qualification__icon">Education</i>
                    </div>

                    <div 
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex" 
                                :"qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 0 
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }
                    >

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Spain-Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2021-Present</i>
                                </div>
                            </div>

                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line-2"></span>
                            </div>
                            <div className="">
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">UTP</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2017-Present</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Spain-Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2021-Present</i>
                                </div>
                            </div>

                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line-2"></span>
                            </div>
                            <div className="">
                                <h3 className="qualification__title">Ux Expert</h3>
                                <span className="qualification__subtitle">UTP</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2017-Present</i>
                                </div>
                            </div>
                        </div>
                    
                    </div>

                    <div 
                        className={
                            toggleState === 1
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }
                    >

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Microsoft-Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2021-Present</i>
                                </div>
                            </div>

                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line-2"></span>
                            </div>
                            <div className="">
                                <h3 className="qualification__title">Ux Designer</h3>
                                <span className="qualification__subtitle">Spain-Inst</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2017-Present</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Web Desginer</h3>
                                <span className="qualification__subtitle">Spain-Figma</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2021-Present</i>
                                </div>
                            </div>

                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
