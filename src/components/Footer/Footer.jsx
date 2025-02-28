import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoFooter from "../../assets/svg/Def LOFO.svg";
import styles from "./footer.module.css";

const Footer = () => {
    return (
            <footer className={styles.footer}>
                <div className={styles.footer__top}>
                    <div className={styles.footer__info}>
                        <img className={styles.footer__logo} src={logoFooter} alt="Vernchain Logo" />
                        <p className={styles.footer__text}>
                            Lorem ipsum dolor sit amet consectetur. Fusce nisl lacus elementum neque.
                        </p>
                    </div>
                    <div className={styles.footer__contact}>
                        <h1 className={styles.footer__title}>Contact Us</h1>
                        <div className={styles.footer__contact_info}>
                            <p>(075) 000 7531</p>
                            <p>example@email.com</p>
                        </div>
                    </div>
                </div>

                <div className={styles.footer__middle}>
                    <ul className={styles.footer__nav}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Price</li>
                        <li>News</li>
                    </ul>

                    <div className={styles.footer__social}>
                        <FaWhatsapp className={styles.footer__social_icon} />
                        <FaXTwitter className={styles.footer__social_icon} />
                        <FaFacebookF className={styles.footer__social_icon} />
                        <FaInstagram className={styles.footer__social_icon} />
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <p>© 2025 Lorem ipsum dolor sit amet consectetur</p>
                    <div className={styles.footer__links}>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;

