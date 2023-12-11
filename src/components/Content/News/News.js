import styles from "./News.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function News() {
    return (
        <section>
            <div className={styles['pet-news']}>
                <div className={styles['main-content']}>

                    <div className={styles['intro-pet-news']}>
                        <h1 className={styles.title}>Tin thú cưng.</h1>
                        <picture className={styles['img-hero']}>
                            <img src="Images/hero_animal.png" alt="Chào mừng bạn đến với Catchy Pet" />
                        </picture>
                    </div>

                    <div className={styles['pet-news-list-items']}>
                        {/* Item 1 */}
                        <div className={styles['pet-news-item']}>
                            <picture className={styles['pet-news-img']}>
                                <img src="Images/wallpaperflare-com-wallpaper-1-1.webp" alt="Ảnh mèo đi ngủ" />
                            </picture>
                            <div className={styles['pet-news-content']}>
                                <div className={styles['pet-news-title']}>
                                    <a>Cách ít người biết để dạy mèo đi vệ sinh đúng chỗ.</a>
                                </div>
                                <p className={`${styles['pet-news-desc']} line-clamp-3`}>
                                    Với không ít người nuôi mèo, việc dạy cho mèo cách đi vệ sinh đúng chỗ là một chuyện không hề dễ,
                                    và nếu không chú ý tới vấn đề này ngay từ khi mèo còn nhỏ
                                </p>
                                <span className={styles['pet-news-date']}>
                                    <i>
                                        <FontAwesomeIcon icon={faClock} />
                                    </i>
                                     11/07/2023
                                </span>
                                <a href="#!" className={styles['pet-new-more-watch_1']}>
                                    Xem tiếp
                                </a>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className={styles['pet-news-item']}>
                            <picture className={styles['pet-news-img']}>
                                <img src="Images/wallpaperflare-com-wallpaper-3.webp" alt="Ảnh mèo đi ngủ" />
                            </picture>
                            <div className={styles['pet-news-content']}>
                                <div className={styles['pet-news-title']}>
                                    <a>Huấn luyện chó mèo ngủ đúng chỗ hiệu quả nhất!</a>
                                </div>
                                <p className={`${styles['pet-news-desc']} line-clamp-3`}>
                                    Chó mèo là những thú cưng đáng yêu, nhưng nhiều khi
                                    các bé ấy dễ làm bạn bực mình lắm nhé. Nhất là vấn đề ngủ nghỉ.
                                </p>
                                <span className={styles['pet-news-date']}>
                                    <i>
                                        <FontAwesomeIcon icon={faClock} />
                                    </i>
                                     11/07/2023
                                </span>
                                <a href="#!" className={styles['pet-new-more-watch_1']}>
                                    Xem tiếp
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles['more-buy-products']}>
                        <Link to={""}>
                            Xem thêm bài viết.
                            </Link>
                        <i>
                            <FontAwesomeIcon icon={faRightLong} />
                        </i>
                    </div>

                    <div className={styles['pet-news-logo-items']} data-aos="fade-up-right">
                        <img src="Images/brand_1.webp" alt="brand_1" />
                        <img src="Images/brand_2.webp" alt="brand_2" />
                        <img src="Images/brand_3.webp" alt="brand_3" />
                        <img src="Images/brand_4.webp" alt="brand_4" />
                        <img src="Images/brand_5.webp" alt="brand_5" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;