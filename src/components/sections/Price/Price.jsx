import { priceData } from "../../../data";
import { PrimaryButtons } from "../../Buttons/Buttons.jsx";
import { BlackButtons } from "../../Buttons/Buttons.jsx";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import styles from "./price.module.css";

const Price = () => {
    return (
            <section className={styles.price} id="price">
                <h1 className={styles.price__title}>PRICE</h1>

                <div className={styles.price__grid}>
                    <div className={styles.price__intro}>
                        <h2 className={styles.price__intro_title}>Flexible Pricing for Every Project</h2>
                        <p className={styles.price__intro_text}>
                            Lorem ipsum dolor sit amet consectetur. Sapien tortor purus vivamus mi non commodo
                            pellentesque iaculis. Enim pellentesque maecenas mauris varius.
                        </p>
                        <PrimaryButtons>Learn More</PrimaryButtons>
                    </div>

                    <div className={styles.price__cards}>
                        {priceData.map((item, index) => (
                                <div
                                        key={index}
                                        className={`${styles.price__card} ${index === 1 ? styles.price__card_active : ""}`}
                                >
                                    <h3 className={styles.price__card_title}>{item.title}</h3>
                                    <div className={styles.price__card_price}>
                                        <span className={styles.price__card_dollar}>$</span>
                                        <h2 className={styles.price__card_amount}>{item.price}</h2>
                                        <span className={styles.price__card_per_project}>/lrn</span>
                                    </div>
                                    <p className={styles.price__card_description}>{item.description}</p>
                                    <ul className={styles.price__card_details}>
                                        {item.detail.map((detail, detailsIndex) => (
                                                <li key={detailsIndex} className={styles.price__card_detail}>
                                                    <div className={styles.price__card_detail_item}>
                                                        <CheckCircleIcon
                                                                className={index === 1 ? styles.price__card_check_icon : ""}
                                                                fontSize="small"
                                                        />
                                                        <h3 className={styles.price__card_detail_text}>{detail}</h3>
                                                    </div>
                                                </li>

                                        ))}
                                    </ul>
                                    <div className={styles.price__card_button}>
                                        {index === 1 ? (
                                                <BlackButtons>Get Started</BlackButtons>
                                        ) : (
                                                <PrimaryButtons>Get Started</PrimaryButtons>
                                        )}
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default Price;
