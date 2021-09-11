import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStar } from 'react-icons/fa'
import logo from '../images/logo.png'


const About = () => {
    return (
        <div className='about' id='about'>
            <h3>Blue Flamingo Bar, Ikeja, Lagos</h3>
            <span>
                <FaStar className='full' />
                <FaStar className='full' />
                <FaStar className='full' />
                <FaStar className='full' />
                <FaStar className='hollow' />
            </span>
            <div className="icons">
                <a href="#location"><FaMapMarkerAlt className='icon' /></a>
                <a href="#phone"><FaPhoneAlt className='icon' /></a>
                <a href="#mail"><FaEnvelope className='icon' /></a>
                <img src={logo} alt="" />
            </div>
            <p>
                Blue Flamingo&trade; is a 5-star bar and restuarant in the heart of the city. It is a great get away from the hustle and bustle of the city life. We serve a wide variety of cocktails, wines and beers from everywhere in the world, our excellent barmen also ensures the taste and delivery is top-notch. The restuarant serves continental and national dishes. We also have bespoke halls and conference rooms for that function or meeting.
            </p>
        </div>
    )
}

export default About
