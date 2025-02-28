import { PrimaryButtons } from "../../Buttons/Buttons.jsx";
import { SecondaryButtons } from "../../Buttons/Buttons.jsx";
import HeroImage from "../../../assets/png/pln-bg.png";
import logo1 from "../../../assets/svg/Your-logo1.svg";
import logo2 from "../../../assets/svg/Your-logo.svg";
import logo3 from "../../../assets/svg/Your-logo2.svg";
import logo4 from "../../../assets/svg/Your-logo1.svg";
import styles from "./home.module.css";

const Home = () => {
    return (
            <section className={styles.hero} id="home">
                <div className={styles.hero__content}>
                    <div className={styles.hero__text}>
                        <h1 className={styles.hero__title}>Lorem ipsum dolor sit amet</h1>
                        <p className={styles.hero__description}>Lorem ipsum dolor sit amet consectetur. Duis morbi scelerisque lectus sodales rhoncus.</p>
                        <div className={styles.hero__buttons}>
                            <SecondaryButtons>Get Started</SecondaryButtons>
                            <PrimaryButtons>Learn More</PrimaryButtons>
                        </div>
                    </div>

                    <div className={styles.hero__image}>
                        <img src={HeroImage} alt="hero" />
                    </div>
                </div>

                <div className={styles.hero__logos}>
                    <div className={styles.hero__logos_grid}>
                        <img src={logo1} alt="logo1" />
                        <img src={logo2} alt="logo2" />
                        <img src={logo3} alt="logo3" />
                        <img src={logo4} alt="logo4" />
                    </div>
                </div>
            </section>
    );
};

export default Home;
