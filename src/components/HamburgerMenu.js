import React from 'react'
import { useState } from 'react'

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div>
            <div className={`menu-btn ${showMenu ? "close" : ""}`} onClick={toggleMenu}>
                <div class="btn-line"></div>
                <div class="btn-line"></div>
                <div class="btn-line"></div>
            </div>
            <nav className={`menu ${showMenu ? "show" : ""}`}>
                <ul className={`menu-nav ${showMenu ? "show" : ""}`}>
                    <li className={`nav-item ${showMenu ? "show" : ""}`}>Welcome</li>
                    <li className={`nav-item ${showMenu ? "show" : ""}`}>Menu</li>
                    <li className={`nav-item ${showMenu ? "show" : ""}`}>Resevations</li>
                    <li className={`nav-item ${showMenu ? "show" : ""}`}>Contact Us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
