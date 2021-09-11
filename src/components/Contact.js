import React from 'react'
import { FaChevronDown, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import Button from './Button'
import logo from '../images/logo.png'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="flex_c">
                <p>Contact Blue Flamingo Bar</p>
                <Button text='Need help?' color='#fff' textColor='#108ce2' />
            </div>
            <div className="flex_c">
                <p>Follow us on social media</p>
                <div className='flex_b'>
                    <FaTwitter className='sm-icon' />
                    <FaInstagram className='sm-icon' />
                    <FaPinterest className='sm-icon' />
                    <FaFacebook className='sm-icon' />
                    <FaYoutube className='sm-icon' />
                    <FaLinkedin className='sm-icon' />
                </div>
            </div>
            <div className="flex_c">
                <p>Never miss out on our most popular deals</p>
                <div className="flex_b">
                    <form action="" className='input-box' >
                        <input type="email" name="email" id="" placeholder='email' />
                        <Button text='Subscribe' color='#fff' textColor='#108ce2' />
                    </form>
                </div>
            </div>
            <div className="grid_c c">
                <img src={logo} alt="" />
                <div>
                    <div className="flex_b b">
                        <h6>FAQs</h6>
                        <FaChevronDown className='acc-btn' />
                    </div>
                    <div className="flex_b b">
                        <h6>QUICK LINKS</h6>
                        <FaChevronDown className='acc-btn' />
                    </div>
                    <div className="flex_b b">
                        <h6>LEGAL</h6>
                        <FaChevronDown className='acc-btn' />
                    </div>

                    <div className="flex_b b">
                        <h6>EMPLOYMENT OPPORTUNiTIES</h6>
                        <FaChevronDown className='acc-btn' />
                    </div>
                    <div className="flex_b b">
                        <h6>HELP</h6>
                        <FaChevronDown className='acc-btn' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
