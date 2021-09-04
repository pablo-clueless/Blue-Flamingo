const Header = ({ title }) => {
    return (
        <header>
            <h3 style={{ color: "#108Ce2" }}>{title}</h3>
        </header>
    )
}
Header.defaultProps = {
    title: "Blue Flamingo",
}

export default Header