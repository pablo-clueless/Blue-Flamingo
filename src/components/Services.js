import React from 'react'
import Button from './Button'
import { FaBed, FaLuggageCart, FaMugHot, FaSwimmer, FaTaxi, FaWifi } from 'react-icons/fa'

const Services = () => {
    return (
        <div className='services' id='services'>
            <h1 style={{ textAlign: 'center', color: '#108ce2' }}>Our Services</h1>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                <h3>Restaurant & Bar </h3>
                <p>
                    Taste African and international flavors at the Blue Flamingo. The onsite Quill Restaurant hosts our delicious breakfast buffet and serves up a mix of international and Nigerian options for lunch and dinner. Visit the Plumage Grill to enjoy light meals and an extensive drink list by the pool while taking in views of Lagos. This peaceful spot is well stocked with delicious drinks and tasty snacks. Wherever you choose to eat and drink, our dedicated staff are waiting to serve you with our signature <em>Yes I can!</em> service spirit
                </p>
            </div>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="" />
                <h3>Meetings & Events</h3>
                <p>
                    Discover the ideal setting for a conference or wedding in Lagos. Our hotel provides four meeting rooms and two boardrooms with the latest audiovisual equipment and free Wi-Fi. The largest room hosts up to 110 guests. Ideal for intimate gatherings, the two boardrooms can accommodate up to ten people each. Get your wedding photos taken or enjoy a break on an outdoor terrace that showcases views of Lagos.
                </p>
                <a href="#reservations">
                    <Button text='Book a Space' color='#108ce2' />
                </a>
            </div>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1598550489906-85edc42981c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                <h3>Children's Space</h3>
                <p>
                    We have a game room for older children and an indoor play area for children with proper supervision from trained professionals ensuring your children are not left out of the fun.
                </p>
            </div>
            <div className='icons_'>
                <div className='card_'>
                    <FaMugHot className='icon' />
                    <h6>Complimentary coffee & tea</h6>
                </div>
                <div className='card_'>
                    <FaWifi className='icon' />
                    <h6>Free WiFi</h6>
                </div>
                <div className='card_'>
                    <FaSwimmer className='icon' />
                    <h6>Swimming Pool</h6>
                </div>
                <div className='card_'>
                    <FaLuggageCart className='icon' />
                    <h6>Luggage storage</h6>
                </div>
                <div className='card_'>
                    <FaTaxi className='icon' />
                    <h6>Taxi service</h6>
                </div>
                <div className='card_'>
                    <FaBed className='icon' />
                    <h6>Limited bedspace</h6>
                </div>
            </div>
        </div>
    )
}

export default Services
