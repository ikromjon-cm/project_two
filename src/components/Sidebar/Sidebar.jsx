import './Sidebar.css'
import React, { useState } from 'react'; 

const Sidebar = ({data}) => {
  const [isOpen, setIsOpen] = useState(true);

  const none = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        
        <button className="btn" onClick={none}>
            {isOpen ? '❌' : '✅'}
        </button>

        <h1>Bistro</h1>
        <p>menu</p>

        {data.map((item, index) => (
            <div key={index} className="bar">
                <nav>
                    <ul>
                        <li>{item.url} <p>{item.title}</p></li>
                    </ul>
                </nav>
            </div>
        ))}

        <b>other</b>
        <nav>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.icon} <p>{item.subtitle}</p></li>
                ))}
            </ul>
        </nav>
    </div>
  );
}

export default Sidebar;