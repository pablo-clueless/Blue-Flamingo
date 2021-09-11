import Menu from "./Menu"
import HamburgerMenu from './HamburgerMenu'
import { useState, useEffect } from "react"

const Header = ({ title }) => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 700) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses = [''];
    if (scrolled) {
        navbarClasses.push('scrolled')
    }

    return (
        <header className={navbarClasses.join("")}>
            <h3 style={{ color: "#108Ce2" }}>{title}</h3>
            <HamburgerMenu />
            <Menu />

        </header>
    )
}
Header.defaultProps = {
    title: "Blue Flamingo",
}

export default Header