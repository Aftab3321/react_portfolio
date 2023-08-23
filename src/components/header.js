import {useState} from "react";

const Header = () => {
    const [active, setActive] = useState(false);
    const triggerThis = () => {
        console.log("Scroll Triggered");
    }
    
    return (
        <>
            <header id="mainHeader" className="header" onScroll={triggerThis}>
                <div className="logo">
                    <h2>Aftab Ahmed</h2>
                </div>
                <nav>
                    <ul id="navigation-menu">
                        <input type="checkbox" id="checkbox_toggle" />

                        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                        <div className="navMenu">
                            <li><a href="#hero" className="nav-btn active">Home</a></li>
                            <li><a href="#about" className="nav-btn">About</a></li>
                            <li><a href="#services" className="nav-btn">Services</a></li>
                            <li><a href="#portfolio" className="nav-btn">Portfolio</a></li>
                            <li><a href="#contact" className="nav-btn">Contact</a></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;