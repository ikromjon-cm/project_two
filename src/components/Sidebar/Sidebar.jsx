import './Sidebar.css'
import React from 'react';

const Sidebar = ({data}) => {
  return (
    <div className='sidebar'>
        <h1>Bistro</h1>
        <p>menu</p>
      {data.map((item,index)=>
    <div className="bar">
        <nav key={ index}>
            <ul>
                <li>{item.url} <p>{item.title}</p></li>
            </ul>
        </nav>
    </div>
    
    )}
    <b>other</b>
    <nav>
        <ul>
            {data.map((item,index)=>
            <li key={index}>{item.icon} <p>{item.subtitle}</p></li>
            )}
        </ul>
    </nav>
    </div>
  );
}

export default Sidebar;
