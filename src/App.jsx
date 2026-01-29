import Sidebar from "./components/Sidebar/Sidebar";
import { HiOutlineHome } from "react-icons/hi2";
import { FaTableList } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { PiFlowerLotus } from "react-icons/pi";
import { LuSquareActivity } from "react-icons/lu";
import { FaWallet } from "react-icons/fa6";
import { CiChat1 } from "react-icons/ci";
const sidebar =


{
  url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRebaZBPICznY8rw4L5_MSv2pQ4swa3L_qF1sq-_CJNqqBbPq6s'
},
  {
    icon: [<HiOutlineHome />, <MdOutlineMenuBook />, <FaTableList />, <PiFlowerLotus />, <HiUsers />, <LuSquareActivity />, <FaWallet />, <CiChat1 />],
title: ['Dashboard', 'Order Line', 'Manage Table', 'Menus', 'Customer', 'Analytics', 'Payment', 'Chat']
    },
  
    
]
import React from 'react';

const App = () => {
  return (
    <div>
      <Sidebar data={sidebar} />
    </div>
  );
}

export default App;
