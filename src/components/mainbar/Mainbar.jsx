import React from 'react-dom'
import { MdAccountCircle } from "react-icons/md";
import {MdDashboard} from "react-icons/md";
import {MdHome} from "react-icons/md";
import {MdDarkMode} from "react-icons/md";
import {MdSearch} from "react-icons/md";
import {MdCircleNotifications} from "react-icons/md";
import { Link } from 'react-router-dom';
import {MdChat} from "react-icons/md";
import './mainbar.scss'
import {MdLogout} from "react-icons/md";
//import {IconContext} from "react-icons";




function Mainbar() {
  return (
    <div className='mainbar'>
      
    <div className='left'>
      <Link to='/' style={{textDecoration:"none"}}>
        <span>Companion</span>
      </Link>
      <MdHome size={28}/>
      <MdDashboard size={28}/>
      <div className='search'><MdSearch size={28}/>
      <input type='text' placeholder='search'></input></div>
      
    </div>
    <div className='right'>
    
    <MdAccountCircle size={28}/>
      <MdDarkMode size={28}/>
      
      <MdChat size={28}/>
      <MdCircleNotifications size={28}/>
      <MdLogout size={28}/>
      <div className='user'>
      
      </div>
      
    </div>
    </div>
  )
}

export default Mainbar
