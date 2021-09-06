import React, { useState } from 'react'
import { CarouselData } from './CarouselData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div className='carousel'>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {CarouselData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} key={slide.topic} alt={slide.topic} className='image' />)}
                        {index === current && <h1 className="topic">{slide.topic}</h1>}
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel
