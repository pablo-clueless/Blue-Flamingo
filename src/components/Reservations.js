import React from 'react'
import { FaBed, FaGlassMartiniAlt, FaHandshake, FaUtensils } from 'react-icons/fa'

const Reservations = () => {
    return (
        <div className='reservations' id='reservations'>
            <h3>Make a reservation for your next event/stay at the Blue Flamingo</h3>
            <div className="box">
                <div className='box_s'>
                    <FaGlassMartiniAlt className='xs' />
                    <p>Plumage Grill</p>
                    <button className='btn-sm'>Book Now</button>
                </div>
                <div className="box_s">
                    <FaUtensils className='xs' />
                    <p>Quill Restuarant</p>
                    <button className='btn-sm'>Book Now</button>
                </div>
                <div className="box_s">
                    <FaHandshake className='xs' />
                    <p>Conference Rooms</p>
                    <button className='btn-sm'>Book Now</button>
                </div>
                <div className="box_s">
                    <FaBed className='xs' />
                    <p>Deluxe Rooms</p>
                    <button className='btn-sm'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Reservations
