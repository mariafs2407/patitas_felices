import React from 'react';
import Adulto from './Adulto';
import Senior from './Senior';
import Cachorro from './Cachorro';
import './Adopt.css';     


const Todos = (props) => {
    return (
        <div className='container_adopt'>
            <Cachorro/>
            <Senior/>
            <Adulto/>
        </div>
    );
}

export default Todos;