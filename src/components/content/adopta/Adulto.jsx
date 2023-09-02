import React from 'react';
import a1 from '../../../assets/adopta/adulto/2.png';
import a2 from '../../../assets/adopta/adulto/3.png';
import a3 from '../../../assets/adopta/adulto/13.png';
import a4 from '../../../assets/adopta/adulto/14.png';
import a5 from '../../../assets/adopta/adulto/16.png';
import a6 from '../../../assets/adopta/adulto/17.png';
import a7 from '../../../assets/adopta/adulto/19.png';
import a8 from '../../../assets/adopta/adulto/32.png';
import a9 from '../../../assets/adopta/adulto/33.png';
import a10 from '../../../assets/adopta/adulto/35.png';
import a11 from '../../../assets/adopta/adulto/42.png';
import a12 from '../../../assets/adopta/adulto/45.png';
import a13 from '../../../assets/adopta/adulto/48.png';
import a14 from '../../../assets/adopta/adulto/49.png';
import './Adopt.css'

const Adulto = (props) => {
    return (
        <div className='container_adopt'>
            <div className="galeria">
                <div className="img">
                    <img className="perro" src={a1} />
                    <div className="texto">
                        <h5>EDAD: 6 años</h5> <br />
                        <p>Fernanda fue rescatada de las calles cuando tenia 5 o 6 meses de vida. Desde entonces ha vivido en el albergue.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a2} />
                    <div className="texto">
                        <h5>EDAD: 4 años</h5> <br />
                        <p>Almudena fue rescatada junto con sus 5 hermanitos cuando tenia apenas 2 meses, estaba en malas condiciones: sin comida ni abrigo. Hoy se encuentra vacunada y lista para encontrar una familia que le de mucho amor.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a3} />
                    <div className="texto">
                        <h5>EDAD: 3 años</h5>   <br />
                        <p>Guilda fue encontrada perdida y enferma en las calles de Pueblo libre a mediado del 2017. Ella le gusta correr y jugar, es muy sociable pero algo dominante.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a4} />
                    <div className="texto">
                        <h5>EDAD: 4 años</h5><br />
                        <p>Paolo fue encontrado en las calles de Lima a mediado de 2017, flaco, desnutrido y con frío. Él es un perrito amoroso le encanta dar y recibir amor, es muy sociable.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a5} />
                    <div className="texto">
                        <h5> EDAD: 2 años</h5><br />
                        <p>Matias fue abandonado cuando era un bebe y rescatado en enero del 2019. Él es un cachorro alegres, juguetón y bastante emocional como todo cachorro que necesita paciencia y educación.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a6} />
                    <div className="texto">
                        <h5> EDAD: 3 años</h5> <br />      
                        <p> Moly fue abandonada en un parque. Ella es una perrita súper amigable, "besucona" y cariñosa. Siempre anda con una sonrisa y contagia su felicidad a pesar de ser aún una pequeña cachorra.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a7} />
                    <div className="texto">
                        <h5>EDAD: 3 años </h5><br />
                        <p>Luz fue rescatada de las calles luego de haber sido atropellada a mediados del 2017, fue operada y ahora tiene una cicatriz. No llegó a recuperarse al 100% y por eso no camina bien, sobre todo después de correr mucho.Es una perrita muy alegre!</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a8} />
                    <div className="texto">
                        <h5>EDAD: 1 años</h5> <br />
                        <p>Rambito fue encontrado con su mamá y hermanitos bajo un puento de Lurín en enero del 2020. Él es el más grande de la camada, nació con una condicion especial en los ojitos llamada "ectropión"; pero aún asi no le dificultad la visión ni genera molestia.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a9} />
                    <div className="texto">
                        <h5>EDAD: 1 años</h5> <br />
                        <p>Misky fue encontrado con su mamá y hermanitos bajo un puento de Lurín en enero del 2020. Ella es la más pequeña de su camada, es una perrita joven, cariñosa,energética y algo traviesa. </p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a10} />
                    <div className="texto">
                         <h5>EDAD: 2 años</h5> <br />
                         <p>Cooper nació en el albergue a finales del año 2018. Su mami fue rescatada de las calles poco antes de dar a luz. Él es un cachorro con mucha energía, ya que disfruta de los paseos largos, le encanta corretear y jugar.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a11} />
                    <div className="texto">
                        <h5>EDAD: 6 años</h5>  <br />
                        <p> Tuna fue rescatada de las calles a mediado del 2020. Es una perrita super cariñosa, encantadora y tranquila. También, es muy sociables y tolerante.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a12} />
                    <div className="texto">
                        <h5>EDAD: 4 años </h5><br />
                        <p>Fue rescatada de la comisaría de Huachipa en el 2020.Poli es una perrita sumamente tranquila y buena. Le encanta dormir y de estar al aire libre.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a13} />
                    <div className="texto">
                        <h5> EDAD: 2 años</h5><br />
                        <p>Pedrito fue rescatado junto a su mamá, que es una perrita cieguita. La persona que se hacia cargo de ellos falleció. A pesar de eso es un perrito muy bueno, pero un poco tímido; ya que por momento le tiene miedo a las personas.</p>
                    </div>
                </div>
                <div className="img">
                    <img className="perro" src={a14} />
                    <div className="texto">
                        <h5> EDAD: 1 años</h5> <br />
                        <p>Charlie es un perrito que estuvo desde pequeño con un persona que vivia en la calle, quien lo maltrataba. A pesar de eso es un perrito cariñoso y activo; pero tambien disfruta de las siestas, aunque aún necesita aprender a socializar.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adulto;