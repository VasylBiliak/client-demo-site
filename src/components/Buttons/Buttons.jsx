import styles from "./button.module.css";

export const PrimaryButtons = ({ children }) => {
    return (
            <button className={`${styles.button} ${styles.button_primary}`}>
                {children}
            </button>
    );
};

export const SecondaryButtons = ({ children }) => {
    return (
            <button className={`${styles.button} ${styles.button_secondary}`}>
                {children}
            </button>
    );
};

export const BlackButtons = ({ children }) => {
    return (
            <button className={`${styles.button} ${styles.button_black}`}>
                {children}
            </button>
    );
};
