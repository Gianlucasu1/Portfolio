import React from 'react'
import "./portfolio.css"
import memeImg from "../../assets/meme__project.png"
import travelImg from "../../assets/travel.png"


export const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">

            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>
            <div className="portfolio__container container swiper-container">
                <Swiper
                    cssMode={true}
                    loop={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="portfolio__content grid swiper-slide">
                            <img src={travelImg} alt="" className="portfolio__img" />
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio__description">Website dadaptable to all devices,
                            with ui components and animated interactions.</p>
                                <a href="" className="button button--flex button--small portfolio__button">
                                    Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                                </a>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="portfolio__content grid swiper-slide">
                            <img src={travelImg} alt="" className="portfolio__img" />
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio__description">Website dadaptable to all devices,
                            with ui components and animated interactions.</p>
                                <a href="" className="button button--flex button--small portfolio__button">
                                    Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                                </a>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="portfolio__content grid swiper-slide">
                            <img src={travelImg} alt="" className="portfolio__img" />
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio__description">Website dadaptable to all devices,
                            with ui components and animated interactions.</p>
                                <a href="" className="button button--flex button--small portfolio__button">
                                    Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                                </a>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className="swipper-button-next"></div>
                <div className="swipper-button-prev"></div>
                <div className="swipper-pagination"></div>

            </div>

        </section>
    )
}
