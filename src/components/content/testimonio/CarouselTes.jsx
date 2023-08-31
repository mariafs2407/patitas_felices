import React from 'react';
import Slider from "react-slick";
import t1 from '../../../assets/testimonios/1.jpg';
import t2 from '../../../assets/testimonios/1.jpg';
import t3 from '../../../assets/testimonios/1.jpg';
import t4 from '../../../assets/testimonios/1.jpg';
import './CarouselTes.css';

const CarouselTes = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container_carousel_testimony">
            <Slider {...settings} className="cars_testimony">
                <div >
                    <div className='cars_testimony_content'>
                        <div className='cars_testimony_text'>
                            <h1>"Un miembro más en la familia"</h1>
                            <h2>Nicole y Rocky</h2>
                            <p>Rocky es un perro muy tierno y juguetón.Le encanta estar con nosotros y disfruta mucho corriendo y jugando con Horacio. Ellos se llevan muy bien y se hacen compañía cuando nosotros no estamos. Rocky se ha adaptado muy bien en estas dos semanas a su nueva vida, ya es un miembro más de mi familia y estamos muy felices de que así sea.</p>
                        </div>
                        <img src={t1} className="testimonio_img" />
                    </div>

                </div>
                <div>
                    <div className="cars_testimony_content">
                        <div className='cars_testimony_text'>
                            <h1>"Me conquisto"</h1>
                            <h2>Ana Paula, Catalina y Paquita</h2>
                            <p>Desde hace mas de un año mi hija, me pedía un perrito. Yo solo daba largas con mis respuestas porque sentía que ya cuidar de ella era suficiente responsabilidad! Un día una amiga me mandó la foto de Paquita y no solo sus ojos me conquistaron, fue su nombre... Paquita la del barrio. Ahora lleva un poco mas de 3 meses con nosotras y hemos ido ganando pequeñas batallas de a pocos.
                            Yo pensaba que al adoptar podíamos cambiarle la vida a un perrito y darle una familia, lo que no sabía era como este perrito nos cambiaba la vida a nosotros. Paquita solo llegó a traerle mas amor a nuestra familia.
                            </p>
                        </div>
                        <img src={t2} className="testimonio_img" />
                    </div>
                </div>

                <div>
                    <div className="cars_testimony_content">
                        <div className='cars_testimony_text'>
                            <h1>"Nuestra engreída"</h1>
                            <h2>Claudia, Juan y Morocha</h2>
                            <p>Morocha se ha integrado a nuestro hogar para hacerlo más divertido y alegre. Al principio tuvimos muchas dudas de asumir la responsabilidad de cuidarla, hasta que un día no lo pensamos más y decidimos adoptarla. Fue un viernes por la noche que llego a casa y desde ahí todo ha cambiado para bien. En este tiempo se ha vuelto la engreída de toda nuestra familia y hasta piden verla más que a nosotros! Valió la pena la decisión!
                            </p>
                        </div>
                        <img src={t3} className="testimonio_img" />
                    </div>
                </div>
                <div>
                    <div className="cars_testimony_content">
                        <div className='cars_testimony_text'>
                            <h1>"Nos amamos</h1>
                            <h2>Susana y Hachico</h2>
                            <p>Hachico es súper tranquilo en casa, aunque en el parque no le gusta socializar mucho porque es adulto y algo celoso, me he dado cuenta. Sin embargo, apenas ve que agarro la correa salta de alegría y empieza a dar vueltas por la puerta porque ya sabe que lo sacaré a pasear. Pero sobre todas las cosas, su manera de agradecernos es no dejándonos solas ni un solo momento, a donde vayamos mi mami y yo él siempre está a nuestro lado. Lo amamos bastante y se que él nos ama también.</p>
                        </div>
                        <img src={t4} className="testimonio_img" />
                    </div>

                </div>
            </Slider>
        </div>
    );
}

export default CarouselTes;