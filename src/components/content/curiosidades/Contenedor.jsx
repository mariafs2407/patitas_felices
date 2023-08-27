import React from 'react';
import higiene from '../../../assets/curiosidades/higiene.png';
import comportamiento from '../../../assets/curiosidades/comportamiento.png';
import salud from '../../../assets/curiosidades/salud.png';
import alimenta from '../../../assets/curiosidades/alimentacion.png';
import './Contenedor.css'

const Contenedor = (props) => {

    const { id } = props;

    return (
        <div className="container_curio">
            {id === 'alimentacion' && (
                <div  id="alimentacion">
                    {/* Contenido para la pestaña de Alimentación */}
                    <div className="container_curio_content">
                        <article>
                            <p>
                                Los productos naturales, como las frutas y verduras, pueden ser tan beneficiosas para los perros como para nosotros. ¡Pero no todas! Estas son las frutas que pueden comer los perros.
                            </p>
                            <ul>
                                <li>
                                    <strong> Manzana: </strong> La manzana aporta fibra, potasio, vitaminas y otros nutrientes. </li>
                                <li>
                                    <strong>Pera: </strong> La pera es genial porque le dará a tu perro vitaminas A, C, E, B1 y B2 además de fibra, ácido fólico, fósforo, potasio, pectina… Dale uno o dos daditos de pera en función de su tamaño. </li>
                                <li>
                                    <strong> Kiwi: </strong> Aporta potasio, fibra y mucha vitamina C, ¡incluso más que las naranjas! Basta con que le des una o media rebanada en función de su tamaño, siempre sin piel. </li>
                                <li>
                                    <strong> Plátano: </strong> Una de las frutas favoritas de los perros. No se debe abusar porque tiene bastante azúcar y además puede causar estreñimiento. </li>
                                <li>
                                    <strong> Fresas, frambuesas, arándanos y moras: </strong> Las fresas y frutas del bosque son geniales para los perros y les encantan. Aportan muchas vitaminas y antioxidantes. </li>
                                <li>
                                    <strong> Calabaza: </strong> Además de gustarles mucho, la calabaza es un buen remedio natural contra el estreñimiento. </li>
                                <li>
                                    <strong> Naranja: </strong> Aporta vitaminas A, B1, B6  y C. Además, fibra, calcio, hierro y montones de nutrientes. </li>
                            </ul>
                        </article>
                        <div>
                            <h1>Evita la diabetes en tu perro</h1>
                            <img className="curios_img" src={alimenta} alt="" />
                        </div>
                    </div>
                </div>
            )}
            {id === 'salud' && (
                <div  id="salud">
                    {/* Contenido para la pestaña de Salud */}
                    <div className="container_curio_content">
                        <article>
                            <p>
                                Si tienes un perro en casa, quizás quieras saber si es posible evitar la diabetes en perros. La respuesta es que sí, en algunos casos se pueden tomar ciertas medidas para evitar que un perrete sufra esta enfermedad. La diabetes consiste en una producción muy baja de insulina, la hormona que regula el azúcar en sangre, provocando un aumento desproporcionado de la misma.
                                Sabiendo lo que es y lo arriesgado del problema, no podemos pasar por alto el comentar cuáles son los factores que con más frecuencia hacen que surja la enfermedad. Estos son:
                            </p>
                            <ul>
                                <li><strong> Cuidar su alimentación: </strong> En su dieta no debe falta la proteína de la carne animal, suprimir de su alimentación las golosinas. Si le das alguna específica para perros, que sea muy esporádicamente. Aunque es mejor que si quieres dar un premio a tu mascota, le ofrezcas algo más natural como un trozo de fruta de las que son buenas para perros.Los cereales no son necesarios en su plato. Tan solo el arroz es bueno para los perros, pero siempre que se le dé en su justa medida.</li>
                                <li>
                                    <strong>El ejercicio físico:</strong>Si pensabas que salir a la calle con tu perro tiene como única finalidad el que haga sus necesidades fuera de casa, lamentamos decirte que tenías una idea equivocada.
                                    Los perros necesitan ejercitarse diariamente, con largos paseos, corriendo y jugando.
                                    El ejercicio físico ayuda a quemar el exceso de glucosa, conserva en forma sus músculos, les ayuda emocionalmente a mantener el estrés y la ansiedad a raya, y evita el sobrepeso.
                                </li>
                                <li>
                                    <strong>Cuidado con sobre alimentar a tu perro:</strong>En algunos casos se dice que el sobrepeso canino es un factor de riesgo para la aparición de la diabetes. En otros, que el sobrepeso es un factor de riesgo una vez la diabetes ha aparecido.
                                    Independientemente de ello, el sobrepeso se debe evitar porque ocasiona muchos problemas en tu mascota.
                                    El ejercicio y cuidar las cantidades diarias de comida que ingiere el animal te ayudará a ello.
                                </li>
                                <li>
                                    <strong>Visita al veterinario:</strong>Las visitas regulares al veterinario ayudarán a detectar cualquier problema en tu mascota, incluso sin que tenga síntomas.
                                </li>
                            </ul>
                        </article>
                        <div>
                            <h1>Evita la diabetes en tu perro</h1>
                            <img className="curios_img" src={salud} alt="" />
                        </div>
                    </div>
                </div>
            )}
            {id === 'higiene' && (
                <div  id="higiene">
                    {/* Contenido para la pestaña de Alimentación */}
                    <div className="container_curio_content">
                        <article>
                            <p>
                                La caspa en perros tiene la misma definición que en el caso de las personas. Se trata de la caída fuera de la piel de un conjunto de células muertas que se quedan visiblemente sobre el pelo y la piel.
                                Los perros suelen tener caspa con bastante frecuencia y ninguno está exento de tenerla.
                                Lo cierto es que no existe solo un motivo causante de la caspa en perros.
                            </p>
                            <ul>
                                <li>
                                    <strong>Mala alimentación:</strong>A veces, una deficiencia nutricional se verá reflejada en la piel y el pelo del peludo, incluso con la aparición de caspa. Esto sucede, especialmente, cuando carece de ácidos grasos Omega 3.
                                </li>
                                <li>
                                    <strong>Alergia:</strong>Las alergias en los perros son de muchos tipos. La caspa puede aparecer como reacción a algunos alérgenos, como la exposición prolongada a productos químicos o al polen, por ejemplo.
                                </li>
                                <li>
                                    <strong>Fallos en el aseo</strong>Si mi perro tiene caspa, una de las primeras cosas que analizaré es si su rutina de aseo es la correcta. Para ello, debemos fijarnos en dos puntos importantes.
                                    El primero de ellos es que para sus baños esté usando un champú apropiado para perros. El uso de champús inapropiados, como los de los humanos, puede causar daños en la piel de los peludos: caspa, irritaciones, etc. Además de ser un jabón para el animal, este debe ser de calidad.
                                    El segundo de ellos será comprobar que lo baño con la frecuencia que requiere, puesto que hacerlo de más o hacerlo de menos puede influir en la aparición de caspa.
                                </li>
                                <li>
                                    <strong>Infecciones en la piel por hongos y bacterias</strong>Estamos hablando de un problema mayor, ya que la caspa aparecerá acompañada por heridas y ampollas que hay que vigilar y tratar.
                                    Requiere de un tratamiento inmediato, puesto que no solo causa malestar en el animal, sino que puede provocar la caída del pelo en las zonas más afectadas
                                </li>
                            </ul>
                        </article>
                        <div>
                            <h1>¿Por qué mi perro tiene caspa?</h1>
                            <img className="curios_img" src={higiene} alt="" />
                        </div>
                    </div>
                </div>
            )}
            {id === 'comportamiento' && (
                <div  id="comportamiento">
                    {/* Contenido para la pestaña de Alimentación */}
                    <div className="container_curio_content">
                        <article>
                            <p>
                                Falta de educación, una mala experiencia son algunos de los factores que  pueden provocar que un perro se porte de forma incorrecta
                            </p>
                            <ul>
                                <li>
                                    <strong>Prohibidos los castigos físicos:</strong>Nunca se deben emplear los castigos físicos. Si lo haces, tu peludo comenzará a temerte y, ante el temor, solo responderá con actitudes de desconfianza y agresividad.
                                </li>
                                <li>
                                    <strong>Cuida su alimentación y su salud:</strong>Un perro mal alimentado o enfermo presentará cambios en su comportamiento, algunos de ellos bastante desagradables.l perro puede volverse agresivo con otros animales que haya en la casa o con las personas; puede intentar robarte comida del plato o destrozar lo que pille a su alcance con tal de llenar el estómago.
                                    Si quieres evitar el mal comportamiento de los perros asegúrate de que ellos están sanos y que tienen cubiertas sus necesidades alimenticias.
                                </li>
                                <li>
                                    <strong>Mantener sus impulsos a raya:</strong>Es importante enseñarles a ser pacientes.
                                    Para evitar el mal comportamiento de los perros es muy necesario educarles en el respeto hacia nosotros y nuestras señales, y que no siempre se pueden cumplir sus deseos.
                                </li>
                                <li>
                                    <strong>Nada de juegos bruscos</strong>Jugar con tu mascota favorecerá el establecer grandes lazos entre ambos. Sin embargo, si estás tratando de evitar el mal comportamiento en los perros, es importante que no lleves a cabo juegos bruscos.
                                    Eso solo fomentará la agresividad en el peludo y en su mente se generará la idea de que la diversión es lo mismo que usar la fuerza
                                </li>
                            </ul>
                        </article>
                        <div>
                            <h1>Malos comportamientos en tu mascota</h1>
                            <img className="curios_img" src={comportamiento} alt="" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contenedor;