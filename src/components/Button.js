import React from 'react'
import '../button.css'

const Button = ({ color, text, textColor }) => {
    return (
        <div>
            <button className="btn" style={{ backgroundColor: color, color: textColor }}>{text}</button>
        </div>
    )
}

export default Button