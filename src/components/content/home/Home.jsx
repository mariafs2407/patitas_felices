import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood ,faShieldDog ,faDog} from '@fortawesome/free-solid-svg-icons';
import './Home.css';


const Home = (props) => {
    return (
        <div className='container_home'>
            <Banner/>
            <article className='container_donar_patrinar'>
                <a className="donar" href="#">
                    <FontAwesomeIcon className="home_icon" icon={faBowlFood} beatFade style={{ color: "#744c24", }} />
                    Donar                 
                </a>
                <a className="patrinar"  href="#">
                    <FontAwesomeIcon className="home_icon" icon={faShieldDog} beatFade style={{ color: "#744c24", }} />
                    Patrinar
                </a>
            </article>
            <Carousel/>
            <article className='container_beneficios'>
                <a className="beneficio" href="#">
                    <FontAwesomeIcon className="home_icon" icon={faDog} beatFade style={{ color: "#744c24", }} />
                    Beneficios                 
                </a>                
            </article>
            <a href="#">Ver todos los beneficios...</a>  
        </div>
    );
}

export default Home;