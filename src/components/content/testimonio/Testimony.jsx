import React from 'react';
import testimonios from '../../../assets/testimonios/testimonios.png';
import CarouselTes from './CarouselTes';
import './Testimony.css';

const Testimony = (props) => {
    return (
        <div className='container_testimony'>
            <div className='testi_banner'>
                <img src={testimonios} alt="" />
            </div>
            <CarouselTes/>
        </div>
    );
}

export default Testimony;