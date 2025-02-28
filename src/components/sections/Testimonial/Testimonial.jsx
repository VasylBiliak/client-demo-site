import quotationMarkStart from "../../../assets/png/quotationMarkEnd.png";
import quotationMarkEnd from "../../../assets/png/quotationMarkStart.png";

import styles from "./testimonial.module.css";

const Testimonial = ({ name, company, description, image }) => {
    return (
            <div className={styles.testimonial}>
                <div className={styles.testimonial__image}>
                    <img src={image} alt="Testimonial" />
                </div>

                <div className={styles.testimonial__content}>
                    <div className={styles.testimonial__header}>
                        <h2 className={styles.testimonial__title}>Testimonials</h2>
                        <h1 className={styles.testimonial__subtitle}>Client Stories, Vernchain Success</h1>
                    </div>

                    <div className={styles.testimonial__description}>
                        <div><img src={quotationMarkStart} alt="Start" /></div>
                        <p className={styles.testimonial__descriptionText}>{description}</p>
                        <div className={styles.testimonial__authorInfo}>
                            <div className={styles.testimonial__authorDetails}>
                                <h2 className={styles.testimonial__authorName}>{name}</h2>
                                <span className={styles.testimonial__authorCompany}>/</span>
                                <h3 className={styles.testimonial__authorCompany}>{company}</h3>
                            </div>
                            <div className={styles.testimonial__divider}>
                                <img src={quotationMarkEnd} alt="End" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Testimonial;
