import React from 'react';
import './Nosotros.css';
import somos from '../../../assets/nosotros/n1.jpg';
import vision from '../../../assets/nosotros/n2.jpg';
import mision from '../../../assets/nosotros/n3.jpg';

const Nosotros = (props) => {
    return (
        <div class="container_nosotros">
            <img class="img_opacidad" src={somos} alt="" />

            <div class="nosotros_caja_texto  ">
                <h2 className="nosotros_subtitulo">¿Quiénes Somos?</h2>
                <p>
                    Somos una asociación sin fines de lucro que busca construir un mundo mejor para los perros a través de iniciativas sostenibles como la adopción responsable, salud, educación y cuidados a través de este espacio virtual que centralice las oportunidades de adopción para cientos de perritos que se encuentran bajo nuestro cuidado. Asimismo, a través de esta plataforma brindamos una asesoría integral para los futuros adoptantes.
                </p>
            </div>

            <div class="nosotros_caja_texto  ">
                <h2 class="nosotros_subtitulo">Visión</h2>
                <p>Soñamos con vivir en una sociedad responsable con su entorno, que respete a todos los seres vivos; y donde adoptar sea siempre la primera opción. Por lo tanto, nuestra visión es expandir y crecer potencialmente nuestro albergue  con el objetivo de poder brindar más apoyo a los perritos que se encuentran fuera de nuestro alcance actual.</p>
            </div>

            <img class="img_opacidad" src={vision} alt="" />

            <img class="img_opacidad left" src={mision} alt="" />

            <div class="nosotros_caja_texto   top3 espacio3">
                <h2 className="nosotros_subtitulo">Misión</h2>
                <p>Somos un equipo de jóvenes estudiantes voluntarias que buscan darle a las mascotas abandonadas, ya sean cachorros, adultos o seniors, oportunidades de adopción. Asimismo,  contribuyendo a que tanto las familias como las mascotas puedan llevar una vida más feliz bajo un hogar permanente (lo ideal) o temporal.
                </p>
            </div>
        </div>
    );
}

export default Nosotros;