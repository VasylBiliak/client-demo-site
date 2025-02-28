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
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-up',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }

  };



  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 56, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



const App = (props) => {
    return (
            <div >
                <div id="back-to-top-up" />
                <Navbar />
                <main className="loyaut">
                    <Home />
                    <About />
                    <Services />
                    <Price />
                    <TestimonialComponent />
                    <Crypto />
                    <News />
                </main>
                <Footer />

                <ScrollTop {...props}>
                    <Fab size="medium" aria-label="back to top" style={{background: "#de3434"}}>
                        <KeyboardArrowUpIcon style={{fill: "var(--hover-color)"}} />
                    </Fab>
                </ScrollTop>
            </div>
    )
}

export default App;
