import Hero from "./heroSection";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "./Footer";
const Body = () => {
    const thisisit = () => {
        console.log("Clicked");
    }
    return (
        <>
            <div className="body" onScroll={thisisit}>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
export default Body;