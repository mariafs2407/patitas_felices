import React from 'react';
import patrinar from '../../../assets/patrinar/patrinar.png';
import p1 from '../../../assets/patrinar/p1.png';
import Formulario from './Formulario';
import './Patrinar.css'

const Patrinar = (props) => {
    return (
        <div className='container_patrinar'>
            <div className="patrinar_banner">
                <img src={patrinar} alt="" />
            </div>
            <div className='container_patrinar_content'>
                <section className="content_uno">                    
                    <img src={p1} class="adop" alt="" />
                </section>
                <div className="content_dos">
                    <div>
                        <aside className="content_dos_texto">
                            <p>El padrinazgo es una maravillosa opción para aquellas personas que anhelan la compañía de una mascota pero, por diversas circunstancias, no pueden tener una peludito propio. Si te encuentras en esta situación, te invitamos a unirte a esta inspiradora iniciativa y convertirte en padrino o madrina de uno de nuestros adorables amigos peludos. Al hacerlo, no solo estarás cambiando la vida de un animalito, sino que también estarás brindándole la oportunidad de tener una vida digna y llena de amor.
                            </p>
                        </aside>
                    </div>
                </div>
            </div>
            <Formulario />
        </div>
    );
}

export default Patrinar;