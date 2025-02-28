import image1 from "../../../assets/png/part-bush.png";
import image2 from "../../../assets/png/meteor.png";
import image3 from "../../../assets/png/comet.png";
import image4 from "../../../assets/png/plenet.png";
import styles from "./crypto.module.css";

const Crypto = () => {
    return (
            <section className={styles.crypto} id="crypto">
                {/* Background images */}
                <img className={`${styles.crypto__image} ${styles.crypto__imageBottomLeft}`} src={image1} alt="Decorative" />
                <img className={`${styles.crypto__image} ${styles.crypto__imageTopRight}`} src={image2} alt="Decorative" />
                <img className={`${styles.crypto__image} ${styles.crypto__imageCenter}`} src={image3} alt="Decorative" />
                <img className={`${styles.crypto__image} ${styles.crypto__imageBottomRight}`} src={image4} alt="Decorative" />

                {/* Content */}
                <div className={styles.crypto__content}>
                    <div className={styles.crypto__textContainer}>
                        <h1 className={styles.crypto__title}>Lorem ipsum dolor sit amet consectetur</h1>
                        <h3 className={styles.crypto__subtitle}>
                            Lorem ipsum dolor sit amet consectetur. Duis morbi scelerisque lectus sodales rhoncus.
                        </h3>
                        <div className={styles.crypto__buttons}>
                            <button className={`${styles.crypto__button} ${styles.crypto__buttonPrimary}`}>Get Started</button>
                            <button className={`${styles.crypto__button} ${styles.crypto__buttonSecondary}`}>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Crypto;
