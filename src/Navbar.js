import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './images/logo.png';

const Navbar = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
          if(window.scrollY > 100) {
              handleShow(true)
          } else handleShow(false)
      });

      return () => {
          window.removeEventListener("scroll")
      }
    }, [])
    

  return (
    <div className={`navbar ${show && 'nav__black'}`}>
        <img 
        className='nav__logo'
        src={logo}
        alt="Netflix Logo"
        />
        
        <img 
        className='nav__avatar'
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
        alt="Netflix Logo"
        />
    </div>
  )
}

export default Navbar