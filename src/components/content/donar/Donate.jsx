import React from 'react';
import banner from '../../../assets/donar/donar.png';
import d1 from '../../../assets/donar/d1.png';
import CarosuelDon from './CarosuelDon';
import './Donate.css';

const Donate = (props) => {
    return (
        <div className='container_donate'>
            <div className='donate_banner'>
                <img src={banner} alt="" />
            </div>
            <div className="container_donate_content">
                <article className="content_uno">
                    <h1>¿Por qué donar?</h1>
                    <img src={d1} />
                </article>
                <article className="content_dos">
                    <div>
                        <p>Con esta accion estarás ayudando a seguir creciendo y nos daras la oportunidad de poder llegar a mas perritos que necesitan de nuestra ayuda. Nuestros números de cuenta son :
                        </p>
                        <ul>
                            <li><strong>Cuenta de ahorro BCP:</strong><br />
                                194 584 083 809 98</li>
                            <li><strong>Cuenta Interbancaria:</strong><br />
                                0021941330835209895</li>
                            <li><strong>RUC:</strong><br />
                                20600584260</li>
                        </ul>
                    </div>
                </article>
            </div>
            <CarosuelDon/>
        </div>
    );
}

export default Donate;