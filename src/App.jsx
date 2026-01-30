import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import './App.css'
    const data =[
      {
        url:'🏠',
        title:'Dashboard'
      },
      {
        url:'📋',
        title:'Order list'
      },
      {
        url:'📨',
        title:'Manage Table'
      },
      {
        url:'🌺',
        title:'Menus'
      },
      {
        url:'👤',
        title:'Customer'
      },
      {
        url:'📈',
        title:'Analytics'
      },
      {
        url:'💳',
        title:'Payment'
      },

      {
        url:'💬',
        title:'Chat'
      },
      {
        icon:'💬',
        subtitle:'Help Center'
      },
      {
        icon:'👮‍♂️',
        subtitle:'Settings'
      }
    ]
    const headerData =[
      {
        url:'🔎',
        title:'search'
      },
      {
        icon:'🏬'
      },
      {
        icon:'📳'
      },
      {
        icon:'⛶'
      },
      {
        icon:'📃'
      },
      {
        icon:'🌧️',
        subtitle:'15'
      }
    ]



import React from 'react';

const App = () => {
  return (
    <div className="site">
      <Sidebar data={data} />
      <Header data={headerData}/>
    </div>
  );
}

export default App;
