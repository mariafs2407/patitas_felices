import React, { Component } from "react";
import Slider from "react-slick";
import b1 from '../../../assets/beneficios/ecologia.png';
import b2 from '../../../assets/beneficios/entrenamiento.png';
import b3 from '../../../assets/beneficios/fotografia.png';
import b4 from '../../../assets/beneficios/juguetes.png';
import b5 from '../../../assets/beneficios/masct2.png';
import b6 from '../../../assets/beneficios/masct3.png';
import b7 from '../../../assets/beneficios/veterinaria.png';
import './Carousel.css';

const Carousel = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="container_carousel">            
            <Slider {...settings} className="container_carousel">
                <div>
                    <img src={b1} className="carousel_img" />
                </div>
                <div>
                    <img src={b2} className="carousel_img"  />
                </div>
                <div>
                    <img src={b3} className="carousel_img"  />
                </div>
                <div>
                    <img src={b4} className="carousel_img"  />
                </div>
                <div>
                    <img src={b5} className="carousel_img"  />
                </div>
                <div>
                    <img src={b6} className="carousel_img"  />
                </div>
                <div>
                    <img src={b7} className="carousel_img" />
                </div>
            </Slider>
        </div>
    );
}


export default Carousel;