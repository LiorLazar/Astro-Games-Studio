
const { useState } = React
export function AppHeader() {
    const [activeLink, setActiveLink] = useState('Home')

    const navItems = ['Home', 'About', 'Work-For-Hire', 'Our Games', 'Connect With Us']

    const handleNavClick = (item) => {
        setActiveLink(item)
    }

    return <header className="app-header containe">
        <img src="assets/images/logo.png" alt="" />
        <nav>
            {navItems.map(item => (
                <a
                    key={item}
                    href="#"
                    className={activeLink === item ? 'active' : ''}
                    onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item)
                    }}
                >
                    {item}
                </a>
            ))}
        </nav>
    </header>
}