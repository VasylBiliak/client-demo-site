import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { newsData } from "../../data.js";
import { PrimaryButtons } from "../../Buttons/Buttons.jsx";
import { FaArrowRight } from "react-icons/fa";  // Підключаємо нову іконку
import styles from "./news.module.css";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1200 }, items: 3 },
    tablet: { breakpoint: { max: 1200, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const News = () => {
    return (
            <section className={styles.news} id="news">
                <div className={styles.news__header}>
                    <h3 className={styles.news__subtitle}>News</h3>
                    <h1 className={styles.news__title}>Lorem ipsum dolor sit amet consectetur</h1>
                </div>

                <div className={styles.news__content}>
                    <Carousel
                            className={styles.news__carousel}
                            responsive={responsive}
                            showDots={true}
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                            swipeable={true}
                            draggable={true}
                            infinite={true}
                    >
                        {newsData.map((item) => (
                                <div key={item.id} className={styles.news__item}>
                                    <div className={styles.news__card}>
                                        <img src={item.imageUrl} className={styles.news__image} alt={item.title} />
                                        <div className={styles.news__details}>
                                            <h2 className={styles.news__item_title}>{item.title}</h2>
                                            <p className={styles.news__item_text}>{item.description}</p>
                                            <div className={styles.news__footer}>
                                                <h3 className={styles.news__date}>{item.date}</h3>
                                                <div className={styles.news__more}>
                                                    <h3 className={styles.news__more_text}>See more</h3>
                                                    <FaArrowRight className={styles.news__more_icon} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </Carousel>

                    <div className={styles.news__button}>
                        <PrimaryButtons>See More</PrimaryButtons>
                    </div>
                </div>
            </section>
    );
};

export default News;
