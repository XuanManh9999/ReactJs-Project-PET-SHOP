
import styles from "./Accessoire.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDongSign, faMagnifyingGlassPlus, faCartPlus, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Accessoire() {
    return (
        <section>
            <div className={styles['accessoire']}>
                <div className={styles['main-content']}>
                    <div className={styles['intro-accessoire-buy']}>
                        <h1 className={styles.title}>Phụ kiện cho thú cưng</h1>
                        <picture className={styles['img-hero']}>
                            <img src="Images/hero_animal.png" alt="Chào mừng bạn đến với Catchy Pet" />
                        </picture>
                    </div>

                    <div className={styles['accessoire-container-products']}>
                        {/* Item 1 */}
                        <div className={styles['producitem']}>
                            <div className={styles['producitem-content']}>
                                <picture className={styles['img-item-hero']}>
                                    <a href="#!">
                                        <img src="Images/balo_cho_meo.webp" alt="Balo cho mèo" />
                                    </a>
                                </picture>
                                <div className={styles['price']}>
                                    <div className={styles['line-clamp']}>
                                        <a href="#!">Balo vận chuyển chó mèo Phi hành.</a>
                                    </div>
                                    <div className={styles['price-item-many']}>
                                        <span className={styles['price-new']}>
                                            400.000
                                            <i>
                                                <FontAwesomeIcon icon={faDongSign} />
                                            </i>
                                        </span>
                                        <span className={styles['price-old']}>
                                            800.000
                                            <i>
                                                <FontAwesomeIcon icon={faDongSign} />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['box-modal-buy']}>
                                <button className={styles['hero-read-produc']}>
                                    <Link to={""}>
                                        <i>
                                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                        </i>
                                        <span>Xem nhanh</span>
                                    </Link>
                                </button>
                                <button className={styles['hero-buy-produc']}>
                                    <Link to={""}>
                                        <i>
                                            <FontAwesomeIcon icon={faCartPlus} />
                                        </i>
                                        <span>Thêm ngay</span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className={styles['producitem']}>
                            <div className={styles['producitem-content']}>
                                <picture className={styles['img-item-hero']}>
                                    <a href="#!">
                                        <img src="Images/balo_cho_meo.webp" alt="Balo cho mèo" />
                                    </a>
                                </picture>
                                <div className={styles['price']}>
                                    <div className={styles['line-clamp']}>
                                        <a href="#!">Balo vận chuyển chó mèo Phi hành.</a>
                                    </div>
                                    <div className={styles['price-item-many']}>
                                        <span className={styles['price-new']}>
                                            400.000
                                            <i>
                                                <FontAwesomeIcon icon={faDongSign} />
                                            </i>
                                        </span>
                                        <span className={styles['price-old']}>
                                            800.000
                                            <i>
                                                <FontAwesomeIcon icon={faDongSign} />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['box-modal-buy']}>
                                <button className={styles['hero-read-produc']}>
                                    <Link to={""}>
                                        <i>
                                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                        </i>
                                        <span>Xem nhanh</span>
                                    </Link>
                                </button>
                                <button className={styles['hero-buy-produc']}>
                                    <Link to={""}>
                                        <i>
                                            <FontAwesomeIcon icon={faCartPlus} />
                                        </i>
                                        <span>Thêm ngay</span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className={styles['producitem']}>
                            <div className={styles['producitem-content']}>
                                <picture className={styles['img-item-hero']}>
                                    <a href="#!">
                                        <img src="Images/balo_cho_meo.webp" alt="Balo cho mèo" />
                                    </a>
                                </picture>
                                <div className={styles['price']}>
                                    <div className={styles['line-clamp']}>
                                        <a href="#!">Balo vận chuyển chó mèo Phi hành.</a>
                                    </div>
                                    <div className={styles['price-item-many']}>
                                        <span className={styles['price-new']}>
                                            400.000
                                            <i>
                                                <FontAwesomeIcon icon={faDongSign} />
                                            </i>
                                        </span>
                                        <span className={styles['price-old']}>
                                            800.000
                                            <i>
                                                <FontAwesomeIcon icon={faDongSign} />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['box-modal-buy']}>
                                <button className={styles['hero-read-produc']}>
                                    <Link to={""}>
                                        <i>
                                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                        </i>
                                        <span>Xem nhanh</span>
                                    </Link>
                                </button>
                                <button className={styles['hero-buy-produc']}>
                                    <Link to={""}>
                                        <i>
                                            <FontAwesomeIcon icon={faCartPlus} />
                                        </i>
                                        <span>Thêm ngay</span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles['more-buy-products']}>
                        <Link to={""}>
                            Xem thêm sản phẩm.
                            </Link>
                        <i>
                            <FontAwesomeIcon icon={faRightLong} />
                        </i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accessoire;
