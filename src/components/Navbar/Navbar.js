import React from "react";
import './Navbar.css';
import logo from '../images/logo.png';
import bad from '../images/bad.png';
import menu from '../images/menu.png';
import { useState } from 'react';




function Navbar() {
    const [state, setState]= useState(false);
    const toggle =() => {
       setState(!state);
    
    }


    return(
        <div>
        <div className='navimages'>
            <img src={logo} alt='logo' className='logo'/>
            {
                state ===true && 
                <div className='menulist'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Home</a></li>
                    </ul>
                </div>
            }
            <button className='menubutton' onClick={toggle}>{state ? <img src={bad} alt='menu' className='menu' id="mennu"/>:<img src={menu} alt='menu' className='menu'/>}</button>
           
        </div>

        </div>
    )
}

export default Navbar;