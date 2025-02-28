import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import styles from "./testimonialButtonGroup.module.css";

const TestimonialButtonGroup = ({ next, previous }) => {
    return (
            <div className={styles.buttonGroup}>
                <button className={styles.buttonGroup__button} onClick={() => previous()}>
                    <ChevronLeft className={styles.buttonGroup__icon} />
                </button>
                <button className={styles.buttonGroup__button} onClick={() => next()}>
                    <ChevronRight className={styles.buttonGroup__icon} />
                </button>
            </div>
    );
};

export default TestimonialButtonGroup;
