import React from 'react'

const Menu = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item"><a href="#about" className="nav-link">Blue Flamingo</a></li>
                <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                <li className="nav-item"><a href="#reservations" className="nav-link">Reservations</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Menu
