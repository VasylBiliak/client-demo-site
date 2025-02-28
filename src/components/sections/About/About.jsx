import aboutImg from "../../../assets/png/bg-planetary-system.png";
import { PrimaryButtons } from "../../Buttons/Buttons.jsx";
import styles from "./about_us.module.css";

const About = () => {
    return (
            <section className={styles.about_us} id="about">
                <div className={styles.about_us__container}>
                    <div>
                        <img className={styles.about_us__image} src={aboutImg} alt="About Us" />
                    </div>

                    <div className={styles.about_us__content}>
                        <h2 className={styles.about_us__title}>About Us</h2>
                        <h2 className={styles.about_us__heading}>Lorem ipsum dolor sit amet consectetur</h2>
                        <p className={styles.about_us__text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda illo
                            mollitia nihil sint! Consectetur consequuntur ea ex ipsam, libero molestiae nobis
                            porro quae quaerat quasi repudiandae sit vel veniam.
                        </p>
                        <PrimaryButtons>Learn More</PrimaryButtons>
                    </div>
                </div>
            </section>
    );
};

export default About;
