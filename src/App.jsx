import { HiOutlineHome } from "react-icons/hi2";
import { FaTableList } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { PiFlowerLotus } from "react-icons/pi";
import { LuSquareActivity } from "react-icons/lu";
import { FaWallet } from "react-icons/fa6";
import { CiChat1 } from "react-icons/ci";
const sidebar = [
  {
    icon:<HiOutlineHome />,
    title:'Dashboard'
  },
    {
    icon:<MdOutlineMenuBook />,
    title:'Order Line'
  },
  {
    icon:<FaTableList />,
    title:'Manage Table'
  },
  {
    icon:<PiFlowerLotus />,
    title:'Menus'
  },
  {
    icon:<HiUsers />,
    title:'Customer'
  },
  {
    icon:<LuSquareActivity />,
    title:'Analytics'
  },
  {
    icon:<FaWallet />,
    title:'Payment'
  },
  {
    icon:<CiChat1 />,
    title:'Chat'
  },

]
import React from 'react';

const App = () => {
  return (
    <div>
      
    </div>
  );
}

export default App;
