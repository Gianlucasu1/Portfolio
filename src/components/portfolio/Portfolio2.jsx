import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import travelImg from "../../assets/travel.png"
import gianluca from "../../assets/gianluca.jpg"
import meme from "../../assets/meme.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./portfolio.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Portfolio2() {
  return (
    <div className="portfolio">

        {/*Header*/}
        <span>Recent projects</span>
        <span>Portfolio</span>

        {/**SLIDER**/}
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
                <div className="portfolio__content swiper-slide">
                        <div className="portfolio__img-2"></div>
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
                <div className="portfolio__content swiper-slide">
                        <div className="portfolio__img-2"></div>
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
                <div className="portfolio__content swiper-slide">
                        <img src={travelImg} alt="" className="portfolio__img"/>
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
    </div>
  );
}