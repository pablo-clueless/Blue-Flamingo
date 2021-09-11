import React from 'react'
import { useState } from 'react'
import '../menu.css'

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div>
            <div className={`menu-btn ${showMenu ? "close" : ""}`} onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className={`menu ${showMenu ? "show" : ""}`}>
                <ul className={`menu-nav ${showMenu ? "show" : ""}`}>
                    <li className={`nav-item ${showMenu ? "show" : ""}`}>
                        <a className='nav-link' href="#about">Blue Flamingo</a>
                    </li>
                    <li className={`nav-item ${showMenu ? "show" : ""}`}>
                        <a className='nav-link' href="#services">Services</a>
                    </li>
                    <li className={`nav-item ${showMenu ? "show" : ""}`}>
                        <a className='nav-link' href="#reservations">Reservations</a>
                    </li>
                    <li className={`nav-item ${showMenu ? "show" : ""}`}>
                        <a className='nav-link' href="#contact">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
