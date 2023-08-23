import heroImage from "../assets/images/heroImage.png";
import 'boxicons';
import Typed from 'typed.js'
import React from "react";

const Hero = () => {
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Full-Stack Developer',
                'Front-End Developer',
                'WordPress Developer'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])
    return (
        <>
            <div className="section" id="hero">
                <div className="heroSection container">
                    <div className="hero--information">
                        <h3>Hello, It's Me</h3>
                        <h1>Aftab Ahmed</h1>
                        <h3>And I am a <span style={{ whiteSpace: 'pre' }} ref={el} /></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eum, fuga in maiores officiis ratione! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores est natus odio quisquam voluptatem?</p>
                        <div className="social-icons">
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                            <a href="#"><i className='bx bxl-whatsapp'></i></a>
                        </div>
                        <button className="btn-custom">Download CV</button>
                    </div>
                    <div className="hero--image-container">
                        <img src={heroImage} alt="Hero Image" className="hero--image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero