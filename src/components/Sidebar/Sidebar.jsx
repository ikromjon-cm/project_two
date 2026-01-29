import React from 'react';

const Sidebar = ({data}) => {
  return (
    <div>
      {data.map((item,index)=>
    <div key={index} className="sidebar">
        <div className="logo">
            <img src={item.url} alt="icon" />
            <h2>Bistro</h2>
        </div>
        <p>menu</p>
        <nav>
            <ul>
                {data.map((item,index)=>
                <li key={index}>
                    {item.icon } <span>{item.title}</span>
                </li>
                )}
            </ul>
        </nav>
    </div>
    )}
    </div>
  );
}

export default Sidebar;
