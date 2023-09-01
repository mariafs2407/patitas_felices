import React from 'react';
import contac from '../../assets/footer/contactenos.svg';
import plaza from '../../assets/footer/plaza_vea.png';
import comercio from '../../assets/footer/comercio.svg';
import ricocan from '../../assets/footer/ricocan.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = (props) => {
    return (
        <div>
            <footer className='container_footer'>
                <svg preserveAspectRatio="none" className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff8ec" fillOpacity="1" d="M0,128L30,133.3C60,139,120,149,180,144C240,139,300,117,360,133.3C420,149,480,203,540,218.7C600,235,660,213,720,181.3C780,149,840,107,900,117.3C960,128,1020,192,1080,192C1140,192,1200,128,1260,96C1320,64,1380,64,1410,64L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                </svg>

                <div className="footer_content">
                    <address className='footer_contact'>
                        <img src={contac} alt="contactanos" />
                        <div className="link_footer">
                            <a href="https://www.facebook.com/patitas.felices.7359447/" target="_blank" >
                                <FontAwesomeIcon icon={faFacebook} style={{ color: "#744c24", }} />
                            </a>
                            <a href="mailto:papitasfelicessoficiall@gmail.com" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#744c24", }} />
                            </a>
                            <a href="http://wa.me/+519947987433#" target="_blank">
                                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#744c24", }} />
                            </a>
                            <a href="https://goo.gl/maps/4dXUKBAgnTL2GjMB6" target="_blank">
                                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#744c24", }} />
                            </a>
                        </div>
                    </address>
                    <figure className="footer_patrocinio" >
                        <h1>Patrocinado por:</h1>
                        <div className="patrocinadores">
                            <img src={plaza} width="150px" />
                            <img src={ricocan} />
                            <img src={comercio} />
                        </div>
                    </figure>
                </div>
            </footer>
        </div>
    );
}

export default Footer;