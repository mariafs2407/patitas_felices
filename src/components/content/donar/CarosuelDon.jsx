import React from 'react';
import Slider from "react-slick";
import b1 from '../../../assets/beneficios/ecologia.png';
import b2 from '../../../assets/beneficios/entrenamiento.png';
import b3 from '../../../assets/beneficios/fotografia.png';
import b4 from '../../../assets/beneficios/juguetes.png';
import b5 from '../../../assets/beneficios/masct2.png';
import b6 from '../../../assets/beneficios/masct3.png';
import b7 from '../../../assets/beneficios/veterinaria.png';
import './CarouselDon.css';

const CarosuelDon = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='container_beneficios' id='beneficios'>
            <h1 className='titulo_beneficio'>"CONOCE LOS BENEFICIOS"</h1>
            <Slider {...settings} className="cars_beneficio">
                <div>
                    <div className='cars_beneficio_content'>
                        <div className='cars_beneficio_text'>
                            <h1>TOYSHOP</h1>
                            <h2>¡19% de descuento en todos nuestros productos!</h2>
                            <p>Somos una jugueteria especializada en ventas de juguetes para niños de todas las edades.Si estas en búsqueda de un juguete espacial para tu hijo o algún familiar somos la tienda adecuada para ti.</p>
                        </div>
                        <div className="cars_beneficio_img">
                            <img src={b1} className="beneficio_img" />
                            <h2>¿Cómo usar el beneficio?</h2>
                            <h5>Identifícate como miembro de Patitas Felices con tu DNI y accede al descuento.</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='cars_beneficio_content'>
                        <div className='cars_beneficio_text'>
                            <h1>Veterinary Center</h1>
                            <h2>¡15% de dscto. en exámenes sanguíneos para tu mascota!</h2>
                            <p>Somos una Clínica Veterinaria en la que consideramos las Veterinary Center mascotas como parte de nuestra familia, nuestra labor se basa en mantener contentos a nuestros pacientes y clientes. Nuestra  atención y servicio se caracteriza por el compromiso que tenemos en realizar nuestro trabajo con la ética y moral que nos define como profesionales, así como la motivación que nos lleva a brindar bienestar animal.</p>
                        </div>
                        <div className="cars_beneficio_img">
                            <img src={b2} className="beneficio_img" />
                            <h2>¿Cómo usar el beneficio?</h2>
                            <h5>Identifícate como miembro de Patitas Felices con tu DNI y accede al descuento.</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='cars_beneficio_content'>
                        <div className='cars_beneficio_text'>
                            <h1>PetFecto</h1>
                            <h2>¡19% de descuento en todos nuestros productos!</h2>
                            <p>Somos una jugueteria especializada en ventas de juguetes para niños de todas las edades.Si estas en búsqueda de un juguete espacial para tu hijo o algún familiar somos la tienda adecuada para ti.</p>
                        </div>
                        <div className='cars_beneficio_img'>
                            <img src={b3} className="beneficio_img" />
                            <h2>¿Cómo usar el beneficio?</h2>
                            <h5>Identifícate como miembro de Patitas Felices con tu DNI y accede al descuento.</h5>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='cars_beneficio_content'>
                        <div className='cars_beneficio_text'>
                            <h1>TIENDAPET</h1>
                            <h2>¡19% de descuento en todos nuestros productos!</h2>
                            <p>Somos una jugueteria especializada en ventas de juguetes para niños de todas las edades.Si estas en búsqueda de un juguete espacial para tu hijo o algún familiar somos la tienda adecuada para ti.</p>
                        </div>
                        <div className="cars_beneficio_img">
                            <img src={b4} className="beneficio_img" />
                            <h2>¿Cómo usar el beneficio?</h2>
                            <h5>Identifícate como miembro de Patitas Felices con tu DNI y accede al descuento.</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='cars_beneficio_content'>
                        <div className='cars_beneficio_text'>
                            <h1>ENRIPERROS</h1>
                            <h2>¡Hasta 15% de dscto. en tus compra y delivery gratis!</h2>
                            <p>Tienda Pet, tienda virtual para mascotas, ofrece alimento seco, húmedo y medicado de las mejores marcas del mercado para perros y gatos. También ofrece artículos de higiene, cuidado y accesorios para mascotas.</p>
                        </div>
                        <div className="cars_beneficio_img">
                            <img src={b5} className="beneficio_img" />
                            <h2>¿Cómo usar el beneficio?</h2>
                            <p>Contáctate con Tienda Pet por Whatsapp o email, identifícate como miembro de Patitas Felices con tu DNI y accede a tu cupón de descuento.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='cars_beneficio_content'>
                        <div className='cars_beneficio_text'>
                            <h1>ECOTA</h1>
                            <h2>¡Hasta 25% de descuento en tu compra!</h2>
                            <p>Somos una marca de moda ecológica para mascotas. Regeneramos y revalorizamos tela deadstock para convertirla en prendas únicas con un propósito amigable con el medio ambiente. Somos libres de Plástico de un solo uso, y todos nuestros empaques son reutilizables. Realizamos envíos a nivel nacional siguiendo todas las normas sanitarias.</p>
                        </div>
                        <div className="cars_beneficio_img">
                            <img src={b6} className="beneficio_img" />
                            <h2>¿Cómo usar el beneficio?</h2>
                            <h5>Identifícate como miembro de Patitas Felices con tu DNI y accede al descuento.</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='cars_beneficio_content'>
                        <div className='cars_beneficio_text'>
                            <h1>PHOTOLIFE</h1>
                            <h2>¡Te regalamos una sesión de fotos con tu mascota!</h2>
                            <p>Somos la cadena de estudios de fotografía artística más grande a nivel latinoamérica. Brindamos un servicio de calidad premium en amplios, elegantes y cómodos ambientes que hacen de la sesión una experiencia extraordinaria.</p>
                            <h2>¿Cómo usar el beneficio?</h2>
                            <h5>Contáctate con Tienda Pet por Whatsapp o email, identifícate como miembro de Patitas Felices con tu DNI y accede a tu cupón de descuento.</h5>
                        </div>
                        <div className="cars_beneficio_img">
                            <img src={b7} className="beneficio_img" />
                            <ul>
                                <h5>Retratamos tu esencia y te regalamos:</h5>
                                <li>30 minutos de sesión fotográfica</li>
                                <li>01 foto digital tamaño 15x20cm</li>
                                <li>02 fotos impresas tamaño 5x7cm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default CarosuelDon;