import Sidebar from "./components/Sidebar/Sidebar";
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
      }
    ]

import React from 'react';

const App = () => {
  return (
    <div>
      <Sidebar data={data} />
    </div>
  );
}

export default App;
