import 'boxicons';
const Portfolio = () => {
    return (
        <>
            <div id="services" className="section servicesSection">
                <div className="servicesSection container">
                    <div className="services--information">
                        <h3>My <span className="primarySpan">Services</span></h3>
                    </div>
                    <div className="services--cards">
                        <div className="service">
                            <span className="primarySpan"><i className='bx bx-code-alt'></i></span>
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime, tenetur! Accusantium aliquid animi architecto deserunt esse excepturi harum impedit velit vero voluptatum. Cumque deserunt dignissimos dolores, ipsa quas voluptatem!</p>
                            <button className="btn-custom">Read More</button>
                        </div>
                        <div className="service">
                            <span className="primarySpan"><i className='bx bxs-paint'></i></span>
                            <h3>Graphics Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime, tenetur! Accusantium aliquid animi architecto deserunt esse excepturi harum impedit velit vero voluptatum. Cumque deserunt dignissimos dolores, ipsa quas voluptatem!</p>
                            <button className="btn-custom">Read More</button>
                        </div>
                        <div className="service">
                            <span className="primarySpan"><i className='bx bx-signal-4'></i></span>
                            <h3>Degital Marketing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime, tenetur! Accusantium aliquid animi architecto deserunt esse excepturi harum impedit velit vero voluptatum. Cumque deserunt dignissimos dolores, ipsa quas voluptatem!</p>
                            <button className="btn-custom">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Portfolio;