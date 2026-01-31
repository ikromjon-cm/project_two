import './Sidebar.css'
import React, { useState } from 'react'; 

const Sidebar = ({data}) => {
  const [Open, setOpen] = useState(true);

  const none = () => {
    setOpen(!Open);
  };

  return (
    <div className={`sidebar ${Open ? 'open' : 'closed'}`}>
        
        <button className="btn" onClick={none}>
            {Open ? '❌' : '✅'}
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