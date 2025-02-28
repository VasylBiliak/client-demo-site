import Navbar from "./components/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Price from "./components/sections/Price";
import TestimonialComponent from "./components/sections/Testimonial/testimonialComponent";
import Crypto from "./components/sections/Crypto";
import News from "./components/sections/News";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    return (
            <div>
                <Navbar />
                <main>
                    <Home />
                    <About />
                    <Services />
                    <Price />
                    <TestimonialComponent />
                    <Crypto />
                    <News />
                </main>
                <Footer />
            </div>
    )
}

export default App;
