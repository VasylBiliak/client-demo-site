import image1 from "../../../assets/png/part-bush.png";
import image2 from "../../../assets/png/meteor.png";
import image3 from "../../../assets/png/comet.png";
import image4 from "../../../assets/png/plenet.png";
import styles from "./crypto.module.css";

const Crypto = () => {
    return (
            <section className={styles.cryptoPage} id="crypto">
                {/* Background images */}
                <img className={`${styles.cryptoPage__image} ${styles.cryptoPage__imageBottomLeft}`} src={image1} alt="Decorative" />
                <img className={`${styles.cryptoPage__image} ${styles.cryptoPage__imageTopRight}`} src={image2} alt="Decorative" />
                <img className={`${styles.cryptoPage__image} ${styles.cryptoPage__imageCenter}`} src={image3} alt="Decorative" />
                <img className={`${styles.cryptoPage__image} ${styles.cryptoPage__imageBottomRight}`} src={image4} alt="Decorative" />

                {/* Content */}
                <div className={styles.cryptoPage__content}>
                    <div className={styles.cryptoPage__textContainer}>
                        <h1 className={styles.cryptoPage__title}>Lorem ipsum dolor sit amet consectetur</h1>
                        <h3 className={styles.cryptoPage__subtitle}>
                            Lorem ipsum dolor sit amet consectetur. Duis morbi scelerisque lectus sodales rhoncus.
                        </h3>
                        <div className={styles.cryptoPage__buttons}>
                            <button className={`${styles.cryptoPage__button} ${styles.cryptoPage__buttonPrimary}`}>Get Started</button>
                            <button className={`${styles.cryptoPage__button} ${styles.cryptoPage__buttonSecondary}`}>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Crypto;
