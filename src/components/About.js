import aboutImage from "../assets/images/aboutImage.png"

const Portfolio = () => {
    return (
        <>
            <div id="about" className="section section-Odd">
                <div className="aboutSection container">
                    <div className="image-container">
                        <img src={aboutImage} alt="About Image" className="about--image"/>
                    </div>
                    <div className="about--information">
                        <h3>About Me</h3>
                        <h3><span className="primarySpan">Front-End Developer</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias asperiores at consequuntur eligendi et eum excepturi facere, iure libero mollitia numquam, obcaecati omnis quaerat quam reiciendis soluta tenetur vitae!</p>
                        <button className="btn-custom">Read More</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Portfolio;