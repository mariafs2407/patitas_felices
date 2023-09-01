import React from 'react';
import './Formulario.css';

const Formulario = (props) => {
    return (
        <div>
            <section className="container_formulario">
                <form action="procesa.php" method="POST">
                    <h1>Únete a esta familia</h1>
                    <div className="entrada">
                        <input type="text" placeholder="Nombres y Apellidos" required />
                    </div>
                    <div className="entrada">
                        <input type="text" placeholder="DNI" required />
                    </div>
                    <div className="entrada">
                        <input type="email" placeholder="Correo Electrónico" required />
                    </div>
                    <div className="entrada">
                        <select name="Distrito" id="">
                            <option value="0" selected> Seleccione un Distrito </option>
                            <option value="1"> Surco </option>
                            <option value="1"> Jesús María </option>
                            <option value="3"> San Isidro </option>
                            <option value="4"> Chorrillos </option>
                            <option value="5"> Jesus María </option>
                        </select>
                    </div>
                    <div className="entrada">
                        <input type="tel" placeholder="Teléfono" required />
                    </div>
                    <h5 className='condiciones'>
                        <input type="checkbox" name="acepto" required />
                        Acepto las condiciones de uso y Políticas de Privacidad
                    </h5>
                    <button type="submit" required className="boton">Enviar Datos </button>
                </form>
            </section>
        </div>
    );
}

export default Formulario;