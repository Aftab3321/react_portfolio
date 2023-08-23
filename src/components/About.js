
const Header = () => {
    return (
        <>
            <header id="mainHeader" className="header">
                <div className="logo">
                    <h2>Aftab Ahmed</h2>
                </div>
                <nav>
                    <ul id="navigation-menu">
                        <li><a href="/" className="nav-btn active">Home</a></li>
                        <li><a href="/about" className="nav-btn">About</a></li>
                        <li><a href="/services" className="nav-btn">Services</a></li>
                        <li><a href="/portfolio" className="nav-btn">Portfolio</a></li>
                        <li><a href="/contact" className="nav-btn">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;