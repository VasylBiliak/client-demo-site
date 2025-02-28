import { services } from "../../../data";
import styles from "./services.module.css";

const ServicesPage = () => {
    return (
            <section className={styles.services} id="services">
                <div className={styles.services__header}>
                    <h1 className={styles.services__title}>Services</h1>
                    <h2 className={styles.services__subtitle}>Lorem ipsum dolor sit amet consectetur</h2>
                </div>

                <div className={styles.services__grid}>
                    {services.map((item) => (
                            <div key={item.id} className={styles.services__card}>
                                <img src={item.imageUrl} alt={item.title} className={styles.services__image} />
                                <div className={styles.services__card_title}>{item.title}</div>
                                <div className={styles.services__card_description}>{item.description}</div>
                            </div>
                    ))}
                </div>
            </section>
    );
};

export default ServicesPage;
