import React, { useState } from 'react';
import './Menu.css';
import Contenedor from './Contenedor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faHeartCircleExclamation, faSoap, faBone }
    from '@fortawesome/free-solid-svg-icons';

const tabData = [
    { id: 'alimentacion', title: 'Alimentación', icono: faBowlFood },
    { id: 'salud', title: 'Salud', icono: faHeartCircleExclamation },
    { id: 'higiene', title: 'Higiene', icono: faSoap },
    { id: 'comportamiento', title: 'Comportamiento', icono: faBone },
];

const Menu = (props) => {
    const [activeTab, setActiveTab] = useState('alimentacion'); // Establece 'alimentacion' como pestaña activa por defecto

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="tabs-container">
            <div className="container_menu_curiosities">
                {tabData.map(tab => (
                    <a
                        key={tab.id}
                        id={tab.id}
                        className={`curiosities_link ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}>
                        <FontAwesomeIcon icon={tab.icono} className='curios_icono' beat style={{ color: "#fff8ec" }} />
                        {tab.title}
                    </a>
                ))}
            </div>
            <div className="tab-content">
                <Contenedor key={activeTab} id={activeTab}/>
            </div>
        </div>
    );
}

export default Menu;