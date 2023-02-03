import logo from './assets/images/logo.svg'
import closeMenu from './assets/images/icon-menu-close.svg'
import menuMobile from './assets/images/icon-menu.svg'
import React, { useState, useEffect } from 'react';




export default function MenuLogo () {
const [exit, setExit] = useState(false)
useEffect(()=> {
    if(exit){
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
}, [exit]);


function handleClick () {
    setExit(!exit)
}


    return (
        <div className="module1">
            <img className='img1' src={logo} alt=""/>
            <img onClick={handleClick} className='menu' src={menuMobile} alt=''/>
            {exit &&
            <div className="menuBackground" onClick={handleClick}>
                <div className='menuList'  >
                    <img onClick={handleClick} className='menuClose' src={closeMenu} alt=''/>
                    <ul>
                        <li><a href='test'>Home</a></li>
                        <li><a href='test'>New</a></li>
                        <li><a href='test'>Popular</a></li>
                        <li><a href='test'>Trending</a></li>
                        <li><a href='test'>Categories</a></li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}