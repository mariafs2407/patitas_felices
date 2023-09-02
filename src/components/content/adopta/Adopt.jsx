import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import ContenedorA from './ContenedorA';
import './Adopt.css'

const tabData = [
    { id: 'todos', title: 'Todos' },
    { id: 'senior', title: 'Senior' },
    { id: 'adulto', title: 'Adulto' },
    { id: 'cachorro', title: 'Cachorro' },
];

const Adopt = (props) => {

    const [activeTab, setActiveTab] = useState('todos'); 
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <div className='container_adopt_menu'>
                {tabData.map(tab => (
                    <a
                        key={tab.id}
                        id={tab.id}
                        className={`adopt_link ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}>
                        <FontAwesomeIcon icon={faDog} className='adopt_icono' beat style={{ color: "#fff8ec" }} />
                        {tab.title}
                    </a>
                ))}
            </div>
            <div className='tab_content_adopt'>
                <ContenedorA key={activeTab} id={activeTab}/>
            </div>           
        </div>
    );
}

export default Adopt;