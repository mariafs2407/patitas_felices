import React from 'react';
import logo from '../../assets/logo_pf.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faDog, faUsers,faPaw } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container_header'>
            <div className="header_nav">
                <div className="header_logo">
                    <img src={logo} alt="patitas_felices" />
                </div>
                <div className='header_link'>
                    <NavLink className="nav_Link" href="/">
                        <FontAwesomeIcon icon={faHouse} style={{ color: "#744c24", }} />
                        Home
                    </NavLink>
                    <NavLink className="nav_Link" href="nosotros">
                        <FontAwesomeIcon icon={faPaw} style={{ color: "#744c24", }} />
                        Nosotros
                    </NavLink>
                    <NavLink className="nav_Link" href="curiosidades">
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#744c24", }} />
                        Curiosidades
                    </NavLink>
                    <NavLink className="nav_Link" href="adopta">
                        <FontAwesomeIcon icon={faDog} style={{ color: "#744c24", }} />
                        Adopta
                    </NavLink>
                    <NavLink className="nav_Link" href="testimonio">
                        <FontAwesomeIcon icon={faUsers} style={{ color: "#744c24", }} />
                        Testimonio
                    </NavLink>
                </div>
            </div>
            <svg preserveAspectRatio="none" className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff8ec" fillOpacity="1" d="M0,128L30,133.3C60,139,120,149,180,144C240,139,300,117,360,133.3C420,149,480,203,540,218.7C600,235,660,213,720,181.3C780,149,840,107,900,117.3C960,128,1020,192,1080,192C1140,192,1200,128,1260,96C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
        </div>
    );
}

export default Header;