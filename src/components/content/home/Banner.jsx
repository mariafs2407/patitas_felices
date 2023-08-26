import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from '../../../assets/banner1.png';
import banner2 from '../../../assets/banner2.png';
import banner3 from '../../../assets/banner3.png';
import './Banner.css';

const Banner = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container_banner">
            <Slider {...settings} className="container_slide">
                <div className="slide">
                    <img src={banner1} alt="Banner 1" />
                </div>
                <div >
                    <img src={banner2} alt="Banner 2" />
                </div>
                <div >
                    <img src={banner3} alt="Banner 3" />
                </div>
            </Slider>
        </div>
    );
}


export default Banner;