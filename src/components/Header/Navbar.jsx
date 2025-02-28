import { useState } from 'react';
import logo from "../../assets/svg/Def LOFO.svg";
import { PrimaryButtons } from "../Buttons/Buttons.jsx";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./navbar.module.css";

const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        document.body.style.overflow = 'hidden';
        setNavBarOpen(open);
    };

    const handleLinkClick = (to) => {
        document.body.style.overflow = '';
        setNavBarOpen(false);
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "services", label: "Services" },
        { to: "price", label: "Price" },
        { to: "news", label: "News" }
    ];

    return (
            <nav className={styles.nav}>
                <div className={styles.nav__content}>
                    <img className={styles.nav__logo} src={logo} alt="Your Logo" />

                    <div className={styles.nav__links}>
                        <ul className={styles.nav__list}>
                            {navItems.map((item) => (
                                    <li key={item.to} className={styles.nav__item}>
                                        <button onClick={() => handleLinkClick(item.to)}>{item.label}</button>
                                    </li>
                            ))}
                            <li className={styles.nav__button}>
                                <PrimaryButtons>Get Started</PrimaryButtons>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.nav__mobile}>
                        <button
                                type="button"
                                className={styles.navbar__openBtn}
                                onClick={toggleDrawer(true)}
                        >
                            <MenuIcon style={{ fill: "var(--primary-color)", width: "40px", height: "40px"  }} />
                        </button>
                    </div>
                </div>

                {navBarOpen && (
                        <div className={styles.navbar__drawer}>
                            <div className={styles.navbar__box}>
                                <button
                                        type="button"
                                        onClick={toggleDrawer(false)}
                                        className={styles.navbar__closeBtn}
                                >
                                    <CloseIcon style={{ fill: "var(--primary-color)", width: "40px", height: "40px" }} />
                                </button>
                                <ul className={styles.nav__list_mobile}>
                                    {navItems.map((item) => (
                                            <li key={item.to} onClick={() => handleLinkClick(item.to)} className={styles.nav__item}>
                                                {item.label}
                                            </li>
                                    ))}
                                    <li className={styles.nav__button}>
                                        <PrimaryButtons onClick={toggleDrawer(false)} >Get Started</PrimaryButtons>
                                    </li>
                                </ul>
                            </div>
                        </div>
                )}
            </nav>
    );
};

export default Navbar;
