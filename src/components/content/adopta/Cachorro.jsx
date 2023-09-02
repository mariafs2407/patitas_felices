import React from 'react';
import c1 from '../../../assets/adopta/cachorro/34.png';
import c2 from '../../../assets/adopta/cachorro/53.png';
import c3 from '../../../assets/adopta/cachorro/54.png';
import c4 from '../../../assets/adopta/cachorro/55.png';
import c5 from '../../../assets/adopta/cachorro/56.png';
import c6 from '../../../assets/adopta/cachorro/58.png';
import c7 from '../../../assets/adopta/cachorro/59.png';
import c8 from '../../../assets/adopta/cachorro/60.png';
import c9 from '../../../assets/adopta/cachorro/61.png';
import c10 from '../../../assets/adopta/cachorro/62.png';
import c11 from '../../../assets/adopta/cachorro/63.png';
import c12 from '../../../assets/adopta/cachorro/64.png';
import './Adopt.css';

const Cachorro = (props) => {
    return (
        <div className='container_adopt'>
            <div class="galeria">
                <div class="img">
                    <img class="perro" src={c1} />
                    <div class="texto">
                        <h5>EDAD: 11 meses</h5>  <br />
                        <p>Camote nació en las calles de Arequipa, lo rescataron de ese lugar en agosto de 2020 y fue llevado a Lima. Él es un cachorro alegre y juguetón; pero algo tímido al inicio, luego toma confianza y te da todo su amor.
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c2} />
                    <div class="texto">
                        <h5>EDAD: 7 meses </h5><br />
                        <p>Rosita y sus hermanas fueron rescatadas con 30 días de haber nacido. Ella es una perrita juguetona, alegre y activa. Además, disfruta mucho jugar con los demás perros; pero al igual que sus hermanas es nerviosa y timida al conocer a un humano.
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c3} />
                    <div class="texto">
                        <h5>EDAD: 7 meses </h5> <br />
                        <p>Fresa y sus hermanas fueron rescatadas con 30 días de haber nacido. Ella es una perrita juguetona, alegre y activa. Además, disfruta mucho jugar con los demás perros; pero al igual que sus hermanas es nerviosa y timida al conocer a un humano.
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c4} />
                    <div class="texto">
                        <h5></h5>EDAD: 7 meses <br />
                        <p>Violeta y sus hermanas fueron rescatadas con 30 días de haber nacido. Ella es una perrita juguetona, alegre y activa. Además, disfruta mucho jugar con los demás perros; pero al igual que sus hermanas es nerviosa y timida al conocer a un humano.
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c5} />
                    <div class="texto">
                        <h5>EDAD: 7 meses</h5><br />
                        <p>Lila y sus hermanas fueron rescatadas con 30 días de haber nacido. Ella es una perrita juguetona, alegre y activa. Además, disfruta mucho jugar con los demás perros; pero al igual que sus hermanas es nerviosa y timida al conocer a un humano.
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c6} />
                    <div class="texto">
                        <h5>EDAD: 6 meses </h5><br />
                        <p>Cocoa fue rescatada de las calles de Chorillos junto a su hermano Medel en abril del 2021. Ella es súper juguetona, activa y amororsa por naturaleza.
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c7} />
                    <div class="texto">
                        <h5>EDAD: 5 meses </h5> <br />
                        <p>Marcelo fue abandonado en una caja en las pistas de Chorrillos. A pesar de eso, es un cachorro amoroso, tierno y disfruta mucho de los paseos.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c8} />
                    <div class="texto">
                        <h5> EDAD: 5 meses </h5><br />
                        <p>Medel fue abandonado en una caja en las pistas de Chorrillos. A pesar de eso él es un cachorro amoroso y juguetón.
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c9} />
                    <div class="texto">
                        <h5>EDAD: 5 meses</h5> <br />
                        <p>Vidal fue abandona en una casa vieja. Él es un cachorro amoroso y juguetón, y disfruta mucho de los paseos. Necesita una familia que le amor y paciencia.
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c10}/>
                    <div class="texto">
                        <h5>EDAD: 5 meses </h5> <br />
                        <p>Cavani fue abandonado en un parque, donde estuvo días escondido en una caja hasta que fue rescatado. Él es un cachorro amoroso y juguetón, y como cualquier cachorro es muy travieso.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c11} />
                    <div class="texto">
                        <h5>EDAD: 3 meses</h5> <br />
                        <p>Lio fue rescatado de las calles de San Juan de Lurigancho en mayo del 2021. Él es un perrito alegre y juguetón; pero algo timido al inicio al principio, luego te da todo su amor.</p>
                    </div>
                </div>
                <div class="img">
                    <img class="perro" src={c12} />
                    <div class="texto">
                        <h5>EDAD: 3 meses</h5> <br />
                        <p>Luisito fue rescatado de las calles de Los Olivos en mayo del 2021. Él es pequeño tierno cachorro al que le encanta ser el centro de atención, juega mucho y disfruta dormir panza arriba.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Cachorro;