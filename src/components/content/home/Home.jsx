import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood ,faShieldDog } from '@fortawesome/free-solid-svg-icons';
import './Home.css';


const Home = (props) => {
    return (
        <>
            <Banner />
            <article className='container_beneficios'>
                <a className="donar" href="#">
                    <FontAwesomeIcon icon={faBowlFood} beatFade style={{ color: "#744c24", }} />
                    Donar                 
                </a>
                <a className="patrinar"  href="#">
                    <FontAwesomeIcon icon={faShieldDog} beatFade style={{ color: "#744c24", }} />
                    Patrinar
                </a>
            </article>
            <Carousel/>

        </>
    );
}

export default Home;