import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood ,faShieldDog ,faDog} from '@fortawesome/free-solid-svg-icons';
import './Home.css';



const Home = (props) => {
    return (
        <div className='container_home'>
            <Banner/>
            <article className='container_donar_patrinar'>
                <NavLink className="donar" to="donar">
                    <FontAwesomeIcon className="home_icon" to="#"icon={faBowlFood} beatFade style={{ color: "#744c24", }} />
                    Donar                 
                </NavLink>
                <NavLink className="patrinar"  to="#">
                    <FontAwesomeIcon className="home_icon" to="#" icon={faShieldDog} beatFade style={{ color: "#744c24", }} />
                    Patrinar
                </NavLink>
            </article>
            <Carousel/>
            <article className='container_beneficios'>
                <NavLink className="beneficio" to="beneficios">
                    <FontAwesomeIcon className="home_icon" icon={faDog} beatFade style={{ color: "#744c24", }} />
                    Beneficios                 
                </NavLink>                
            </article>
            <NavLink className="link_beneficios" to="donar">Ver todos los beneficios...</NavLink>  
        </div>
    );
}

export default Home;