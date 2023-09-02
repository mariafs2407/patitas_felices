import React from 'react';
import s1 from '../../../assets/adopta/senior/1.png';
import s2 from '../../../assets/adopta/senior/5.png';
import s3 from '../../../assets/adopta/senior/7.png';
import s4 from '../../../assets/adopta/senior/9.png';
import s5 from '../../../assets/adopta/senior/10.png';
import s6 from '../../../assets/adopta/senior/11.png';
import s7 from '../../../assets/adopta/senior/28.png';
import s8 from '../../../assets/adopta/senior/36.png';
import s9 from '../../../assets/adopta/senior/39.png';
import s10 from '../../../assets/adopta/senior/40.png';
import s11 from '../../../assets/adopta/senior/42.png';
import s12 from '../../../assets/adopta/senior/43.png';
import './Adopt.css'

const Senior = (props) => {
    return (
        <div className='container_adopt'>
            <div className='galeria'>
                <div class="img">
                    <img class="perro" src={s1} />
                    <div class="texto">
                        <p>  EDAD: 7 años <br />
                            Tomasa fue rescatada a mediados de 2014, desde entonces vive en el albergue.
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s2} />
                    <div class="texto">
                        <h5>EDAD: 7 años</h5>  <br />
                        <p> Fania fue encontrada en la época de Navidad en 2014. Fania es educada y cariñosa, pero tambien muy juguetona, espera una familia con quien compartir toda su energía.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s3} />
                    <div class="texto">
                        <h5> EDAD: 7 años</h5>  <br />
                        <p>Sebastián llegó al albergue  finales del 2015. Él tiene mucho amor para dar y buscar que una familia le de una nueva oportunidad.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s4} />
                    <div class="texto">

                        <p>  EDAD: 9 años <br />
                            Negra fue rescatada en el 2012. Desde ese entonces vive en el albergue.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s5} />
                    <div class="texto">

                        <p>  EDAD: 7 años <br />
                            Cota fue encontrada con su hermana. Ella es súper tranquila, dócil y sumisa, pero a veces al principio suele ser un poco introvertida; luego cuando entra en confianza es muy cariñosa.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s6}/>
                    <div class="texto">

                        <p>  EDAD: 7 años <br />
                            Bahiana es una perrita muy amorosa, quien le gusta que la mimen y que le presten mucha atención. Además, es muy  protectora y celosa.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s7} />
                    <div class="texto">

                        <p> EDAD: 8 años <br />
                            Evo fue rescatado a inicios de 2020.Evo es un perrito súper cariñoso y bonachón con los humanos.Algo territorial por recursos con otros perros.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s8} />
                    <div class="texto">

                        <p> EDAD: 7 años <br />
                            Habia sido atropellado en julio de 2019,se refugio en un edificio donde luego fue llevado al albergue.Draculin es un perrito bonachon y tranquilo,es pasivo y delicado;por su edad es mas independiente y sabio.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s9} />
                    <div class="texto">

                        <p> EDAD: 8 años <br />
                            Mandarina fue abadonara en EL olivar de San Isidro.Mandarina ama los abrazo,aunque al incio es un poco timida.Es una perrita muy tranquila,que disfruta mucho descansar durante el día.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s10} />
                    <div class="texto">

                        <p> EDAD: 13 años <br />
                            Vivia siempre en las calles ,sola y desnutrida.Le costo un poco ;pero aprendió a confiar en las personas y gozar del carño.Es una perrita independiente y tranquila,le encanta dormir y ama los paseos.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s11} />
                    <div class="texto">

                        <p>  EDAD: 6 años <br />
                            Tuna fue rescatada de las calles a mediado del 2020. Es una perrita super cariñosa, encantadora y tranquila. También, es muy sociables y tolerante.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={s12} />
                    <div class="texto">

                        <p> EDAD: 8 años <br />
                            Tuki fue encontrada en las calles de Ate,joven y en celo.Tuki es una perrita viejita muy cariñosa y sociable.Súper tranquila ,no pelea con nadie por nada.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Senior;