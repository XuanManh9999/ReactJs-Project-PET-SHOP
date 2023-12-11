import styles from "./Price.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faDongSign } from "@fortawesome/free-solid-svg-icons";



function Price() {
    return (
        <section>
            <div className={styles['price_pandemic']}>
                <div className={styles['main-content']}>
                    <h1 className={styles['title']}>Bảng giá</h1>
                    <img src="Images/cat_sub_hero_top.png" alt="Chào mừng bạn đến với Catchy Pet" className={styles['hero_cat_top_products']} />
                    <div className={styles['price_pandemic__container']}>
                        <h2 className={styles['title']}>CHĂM SÓC THÚ CƯNG</h2>
                        <img src="Images/hero_animal.png" alt="Chào mừng bạn đến với Catchy Pet" />
                        <ul className={styles['price_pandemic__container--lists_item']}>
                            {/* Item 1 */}
                            <li className={styles['price_pandemic__container--item']}>
                                <span className={styles['desc']}>
                                    <i>
                                        <FontAwesomeIcon icon={faPaw} />
                                    </i>
                                    Tắm gội cho thú cưng
                                </span>
                                <span className={styles['price']}>
                                    180.000
                                    <i>
                                        <FontAwesomeIcon icon={faDongSign} />
                                    </i>
                                </span>
                            </li>
                            {/* Item 2 */}
                            <li className={styles['price_pandemic__container--item']}>
                                <span className={styles['desc']}>
                                    <i>
                                        <FontAwesomeIcon icon={faPaw} />
                                    </i>
                                    Cắt tỉa móng tay móng chân
                                </span>
                                <span className={styles['price']}>
                                    200.000
                                    <i>
                                        <FontAwesomeIcon icon={faDongSign} />
                                    </i>
                                </span>
                            </li>
                            {/* Item 3 */}
                            <li className={styles['price_pandemic__container--item']}>
                                <span className={styles['desc']}>
                                    <i>
                                        <FontAwesomeIcon icon={faPaw} />
                                    </i>
                                    Cắt tóc tạo kiểu lông thú cưng
                                </span>
                                <span className={styles['price']}>
                                    300.000
                                    <i>
                                        <FontAwesomeIcon icon={faDongSign} />
                                    </i>
                                </span>
                            </li>
                            {/* Item 4 */}
                            <li className={styles['price_pandemic__container--item']}>
                                <span className={styles['desc']}>
                                    <i>
                                        <FontAwesomeIcon icon={faPaw} />
                                    </i>
                                    Massage cho thú cưng
                                </span>
                                <span className={styles['price']}>
                                    800.000
                                    <i>
                                        <FontAwesomeIcon icon={faDongSign} />
                                    </i>
                                </span>
                            </li>
                            {/* Item 5 */}
                            <li className={styles['price_pandemic__container--item']}>
                                <span className={styles['desc']}>
                                    <i>
                                        <FontAwesomeIcon icon={faPaw} />
                                    </i>
                                    Vệ sinh móng tay móng chân
                                </span>
                                <span className={styles['price']}>
                                    150.000
                                    <i>
                                        <FontAwesomeIcon icon={faDongSign} />
                                    </i>
                                </span>
                            </li>
                            {/* Item 6 */}
                            <li className={styles['price_pandemic__container--item']}>
                                <span className={styles['desc']}>
                                    <i>
                                        <FontAwesomeIcon icon={faPaw} />
                                    </i>
                                    Dịch vụ đặc biệt
                                </span>
                                <span className={styles['price']}>
                                    1.000.000
                                    <i>
                                        <FontAwesomeIcon icon={faDongSign} />
                                    </i>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <img src="Images/cat_sub_hero_bottom.png" alt="Chào mừng bạn đến với Catchy Pet" className={styles['hero_cat_bottom_products']} />
                </div>
            </div>
        </section>
    );
}


export default Price;