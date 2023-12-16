import styles from "./ProductList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDongSign,
    faRightLong,
    faMagnifyingGlassPlus,
    faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ProductList() {
    return (
        <section>
            <div className={styles["product-buy"]}>
                <div className={styles["main-content"]}>
                    {/* Product */}
                    <div className={styles["product-buy-list"]}>
                        <div className={styles["product-cat"]}>
                            {/* Item 1 */}
                            <div className={styles["producitem"]}>
                                <picture className={styles["img-item-hero"]}>
                                    <Link to={"/ProductDetail"}>
                                        <img
                                            src="Images/food-cat-thuc-an-hat-mem.webp"
                                            alt="Thức ăn hạt mềm cho mèo"
                                        />
                                    </Link>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles["line-clamp-2"]}>
                                        <Link to={""}>
                                            Thức ăn hạt cho mèo Whiskat.
                                        </Link>
                                    </div>
                                    <div className={styles["price-item-many"]}>
                                        <span className={styles["price-new"]}>
                                            120.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                        <span className={styles["price-old"]}>
                                            200.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles["box-modal-buy"]}>
                                    <button
                                        className={styles["hero-read-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faMagnifyingGlassPlus}
                                                />
                                            </i>
                                            <span>Xem nhanh</span>
                                        </Link>
                                    </button>
                                    <button
                                        className={styles["hero-buy-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faCartPlus}
                                                />
                                            </i>
                                            <span>Thêm ngay</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className={styles["producitem"]}>
                                <picture className={styles["img-item-hero"]}>
                                    <Link to={""}>
                                        <img
                                            src="Images/food-cat-thuc-an-dang-cung.webp"
                                            alt="Thức ăn hạt khô cho mèo."
                                        />
                                    </Link>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles["line-clamp-2"]}>
                                        <Link to={""}>
                                            Thức ăn hạt cho mèo Nutrience
                                            Original.
                                        </Link>
                                    </div>
                                    <div className={styles["price-item-many"]}>
                                        <span className={styles["price-new"]}>
                                            130.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                        <span className={styles["price-old"]}>
                                            360.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles["box-modal-buy"]}>
                                    <button
                                        className={styles["hero-read-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faMagnifyingGlassPlus}
                                                />
                                            </i>
                                            <span>Xem nhanh</span>
                                        </Link>
                                    </button>
                                    <button
                                        className={styles["hero-buy-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faCartPlus}
                                                />
                                            </i>
                                            <span>Thêm ngay</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className={styles["producitem"]}>
                                <picture className={styles["img-item-hero"]}>
                                    <Link to={""}>
                                        <img
                                            src="Images/food-cat-thuc-an-hat-kho.webp"
                                            alt="Thức ăn cho mèo khô"
                                        />
                                    </Link>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles["line-clamp-2"]}>
                                        <Link to={""}>
                                            Thức ăn hạt khô cho mèo MININO.
                                        </Link>
                                    </div>
                                    <div className={styles["price-item-many"]}>
                                        <span className={styles["price-new"]}>
                                            90.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                        <span className={styles["price-old"]}>
                                            180.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles["box-modal-buy"]}>
                                    <button
                                        className={styles["hero-read-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faMagnifyingGlassPlus}
                                                />
                                            </i>
                                            <span>Xem nhanh</span>
                                        </Link>
                                    </button>
                                    <button
                                        className={styles["hero-buy-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faCartPlus}
                                                />
                                            </i>
                                            <span>Thêm ngay</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            {/* Item 4 */}
                            <div className={styles["producitem"]}>
                                <picture className={styles["img-item-hero"]}>
                                    <Link to={""}>
                                        <img
                                            src="Images/food-dog-xuong-gap-tu-nhien.webp"
                                            alt="Xương gặm tự nhiên cho chó"
                                        />
                                    </Link>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles["line-clamp-2"]}>
                                        <Link to={""}>
                                            Xương gặp tự nhiên vị gà Ferplast
                                            Goodbite.
                                        </Link>
                                    </div>
                                    <div className={styles["price-item-many"]}>
                                        <span className={styles["price-new"]}>
                                            63.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                        <span className={styles["price-old"]}>
                                            90.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles["box-modal-buy"]}>
                                    <button
                                        className={styles["hero-read-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faMagnifyingGlassPlus}
                                                />
                                            </i>
                                            <span>Xem nhanh</span>
                                        </Link>
                                    </button>
                                    <button
                                        className={styles["hero-buy-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faCartPlus}
                                                />
                                            </i>
                                            <span>Thêm ngay</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            {/* Item 5 */}
                            <div className={styles["producitem"]}>
                                <picture className={styles["img-item-hero"]}>
                                    <Link to={""}>
                                        <img
                                            src="Images/food-cat-thuc-an-cao-cao-royal.webp"
                                            alt="Thức ăn cao cấp cho mèo royal."
                                        />
                                    </Link>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles["line-clamp-2"]}>
                                        <Link to={""}>
                                            Thức ăn cho mèo Royal Canin Hairball
                                            Care.
                                        </Link>
                                    </div>
                                    <div className={styles["price-item-many"]}>
                                        <span className={styles["price-new"]}>
                                            459.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                        <span className={styles["price-old"]}>
                                            500.000
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faDongSign}
                                                />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles["box-modal-buy"]}>
                                    <button
                                        className={styles["hero-read-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faMagnifyingGlassPlus}
                                                />
                                            </i>
                                            <span>Xem nhanh</span>
                                        </Link>
                                    </button>
                                    <button
                                        className={styles["hero-buy-produc"]}
                                    >
                                        <Link to={""}>
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faCartPlus}
                                                />
                                            </i>
                                            <span>Thêm ngay</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles["more-buy-products"]}>
                            <Link to={""}>Xem thêm sản phẩm.</Link>
                            <i>
                                <FontAwesomeIcon icon={faRightLong} />
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductList;
