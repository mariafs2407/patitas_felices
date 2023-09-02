import React from 'react';
import Todos from './Todos';
import Senior from './Senior';
import Adulto from './Adulto';
import Cachorro from './Cachorro';
import './ContenedorA.css';

const ContenedorA = (props) => {

    const { id } = props;

    return (
        <div className='container_content_adoptar'>
            {id === 'todos' && (
                <div className='adopt_opcion'>
                    <Todos />
                </div>
            )}
            {id === 'senior' && (
                <div className='adopt_opcion'>
                    <Senior />
                </div>
            )}
            {id === 'adulto' && (
                <div className='adopt_opcion'>
                    <Adulto />
                </div>
            )}
            {id === 'cachorro' && (
                <div className='adopt_opcion'>
                    <Cachorro />
                </div>
            )}
        </div>
    );
}

export default ContenedorA;