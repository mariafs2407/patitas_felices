import React, { useState } from 'react';
import Contenedor from './Contenedor'; // Importa el componente Contenedor

const tabData = [
    { id: 'alimentacion', title: 'Alimentación' },
    { id: 'salud', title: 'Salud' },
    { id: 'higiene', title: 'Higiene' },
    { id: 'Comportamiento', title: 'Comportamiento' },

];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="tabs-container">
            <div className="tab-menu">
                {tabData.map(tab => (
                    <button
                        key={tab.id}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabData.map(tab => (
                    activeTab === tab.id && <Contenedor key={tab.id} id={tab.id} />
                ))}
            </div>
        </div>
    );
};

export default Tabs;
