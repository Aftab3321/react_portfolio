import folio1 from "../assets/images/folio-1.png"
import folio2 from "../assets/images/folio-2.png"
import folio3 from "../assets/images/folio-3.png"
import folio4 from "../assets/images/folio-4.png"
import folio5 from "../assets/images/folio-5.png"
import folio6 from "../assets/images/folio-6.png"

const folios = [
    {
        id: 1,
        img: folio1,
        title: "Figma to HTML Conversion",
        description: "I converted a figma design to a fully functional html/css website"
    },
    {
        id: 2,
        img: folio2,
        title: "Fastfix.be",
        description: "I redesigned this WordPress Website according to the client's needs"
    },
    {
        id: 3,
        img: folio6,
        title: "Tb Clinic",
        description: "I improved the performance of this site and fixed some bugs. This website is also on WordPress."
    },
    {
        id: 4,
        img: folio4,
        title: "Platingnums",
        description: "I made this wordpress website responsive."
    },
    {
        id: 5,
        img: folio5,
        title: "Sell On Auto Pilot",
        description: "I manage this WordPress website as this client is highly satisfied with my work and has subscribed to my services"
    },
    {
        id: 6,
        img: folio3,
        title: "Gentle and Calm",
        description: "I Created this website on WordPress using Divi Theme"
    },
]


const Portfolio = () => {
    return (
        <>
            <div id="portfolio" className="section section-Odd">
                <div className="portfolioSection innerSection container">
                    <div className="portfolio--information">
                        <h3>My <span className="primarySpan">Portfolio</span></h3>
                    </div>
                    <div className="portfolio--contents">
                        {
                            folios.map(folio => {
                                let customid = "folio" + folio.id;
                                return (
                                    <>
                                        <div key={folio.id} className="folio-card">
                                            <div className="folio-card--image">
                                                <img src={folio.img} />
                                            </div>
                                            <div className="folio-card--information">
                                                <h4>{folio.title}</h4>
                                                <p>{folio.description}</p>
                                                <div className="folio-card--buttons">
                                                    <span className="folio-card--button"><i className='bx bx-link-external'></i></span>
                                                    <span className="folio-card--button"><i className='bx bx-link' ></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );

}

export default Portfolio;