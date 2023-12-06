import clsx from "clsx";
import styles from "./Product.module.scss";


function Product() {
    return (
        <section>
            <div className={styles['product-buy']}>
                <div className={styles['main-content']}>

                    <div className={styles['intro-product-buy']}>
                        <h1 className={styles.title}>Sản phẩm shop đang bán.</h1>
                        <picture className={styles['img-hero']}>
                            <img src="Images/hero_animal.png" alt="Chào mừng bạn đến với Catchy Pet" />
                        </picture>
                    </div>

                    {/* navigation */}
                    <div className={styles['product-buy-products']}>
                        <div className={styles['product-buy-navigation']}>
                            <ul>
                                <li className={styles['action-navigation']}>
                                    <a className={styles['action-navigation-a']} href="#!">Thức ăn cho Mèo</a>
                                </li>
                                <li>
                                    <a href="#!">Thức ăn cho Chó</a>
                                </li>
                                <li>
                                    <a href="#!">Thức ăn cho Hamster</a>
                                </li>
                                <li>
                                    <a href="#!">Thức ăn cho Chim</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Product */}
                    <div className={styles['product-buy-list']}>
                        <div className={styles['product-cat']}>
                            {/* Item 1 */}
                            <div className={styles['producitem']}>
                                <picture className={styles['img-item-hero']}>
                                    <a href="#!">
                                        <img src="Images/food-cat-thuc-an-hat-mem.webp" alt="Thức ăn hạt mềm cho mèo" />
                                    </a>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles['line-clamp-2']}>
                                        <a href="#!">Thức ăn hạt cho mèo Whiskat.</a>
                                    </div>
                                    <div className={styles['price-item-many']}>
                                        <span className={styles['price-new']}>
                                            120.000
                                            <i className="fa-solid fa-dong-sign">

                                            </i>
                                        </span>
                                        <span className={styles['price-old']}>
                                            200.000
                                            <i className="fa-solid fa-dong-sign"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles['box-modal-buy']}>
                                    <button className={styles['hero-read-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                                            <span>Xem nhanh</span>
                                        </a>
                                    </button>
                                    <button className={styles['hero-buy-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-cart-plus"></i>
                                            <span>Thêm ngay</span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className={styles['producitem']}>
                                <picture className={styles['img-item-hero']}>
                                    <a href="#!">
                                        <img src="Images/food-cat-thuc-an-dang-cung.webp" alt="Thức ăn hạt khô cho mèo." />
                                    </a>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles['line-clamp-2']}>
                                        <a href="#!" className={styles['line-clamp-2']}>Thức ăn hạt cho mèo Nutrience Original.</a>
                                    </div>
                                    <div className={styles['price-item-many']}>
                                        <span className={styles['price-new']}>
                                            130.000
                                            <i className="fa-solid fa-dong-sign"></i>
                                        </span>
                                        <span className={styles['price-old']}>
                                            360.000
                                            <i className="fa-solid fa-dong-sign"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles['box-modal-buy']}>
                                    <button className={styles['hero-read-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                                            <span>Xem nhanh</span>
                                        </a>
                                    </button>
                                    <button className={styles['hero-buy-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-cart-plus"></i>
                                            <span>Thêm ngay</span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className={styles['producitem']}>
                                <picture className={styles['img-item-hero']}>
                                    <a href="#!">
                                        <img src="Images/food-cat-thuc-an-hat-kho.webp" alt="Thức ăn cho mèo khô" />
                                    </a>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles['line-clamp-2']}>
                                        <a href="#!" className={styles['line-clamp-2']}>Thức ăn hạt khô cho mèo MININO.</a>
                                    </div>
                                    <div className={styles['price-item-many']}>
                                        <span className={styles['price-new']}>
                                            90.000
                                            <i className="fa-solid fa-dong-sign"></i>
                                        </span>
                                        <span className={styles['price-old']}>
                                            180.000
                                            <i className="fa-solid fa-dong-sign"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles['box-modal-buy']}>
                                    <button className={styles['hero-read-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                                            <span>Xem nhanh</span>
                                        </a>
                                    </button>
                                    <button className={styles['hero-buy-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-cart-plus"></i>
                                            <span>Thêm ngay</span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/* Item 4 */}
                            <div className={styles['producitem']}>
                                <picture className={styles['img-item-hero']}>
                                    <a href="#!">
                                        <img src="Images/food-dog-xuong-gap-tu-nhien.webp" alt="Xương gặm tự nhiên cho chó" />
                                    </a>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles['line-clamp-2']}>
                                        <a href="#!">Xương gặp tự nhiên vị gà Ferplast Goodbite.</a>
                                    </div>
                                    <div className={styles['price-item-many']}>
                                        <span className={styles['price-new']}>
                                            63.000
                                            <i className="fa-solid fa-dong-sign"></i>
                                        </span>
                                        <span className={styles['price-old']}>
                                            90.000
                                            <i className="fa-solid fa-dong-sign"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles['box-modal-buy']}>
                                    <button className={styles['hero-read-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                                            <span>Xem nhanh</span>
                                        </a>
                                    </button>
                                    <button className={styles['hero-buy-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-cart-plus"></i>
                                            <span>Thêm ngay</span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/* Item 5 */}
                            <div className={styles['producitem']}>
                                <picture className={styles['img-item-hero']}>
                                    <a href="#!">
                                        <img src="Images/food-cat-thuc-an-cao-cao-royal.webp" alt="Thức ăn cao cấp cho mèo royal." />
                                    </a>
                                </picture>
                                <div className={styles.price}>
                                    <div className={styles['line-clamp-2']}>
                                        <a href="#!">Thức ăn cho mèo Royal Canin Hairball Care.</a>
                                    </div>
                                    <div className={styles['price-item-many']}>
                                        <span className={styles['price-new']}>
                                            459.000
                                            <i className="fa-solid fa-dong-sign"></i>
                                        </span>
                                        <span className={styles['price-old']}>
                                            500.000
                                        <i className="fa-solid fa-dong-sign"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles['box-modal-buy']}>
                                    <button className={styles['hero-read-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                                            <span>Xem nhanh</span>
                                        </a>
                                    </button>
                                    <button className={styles['hero-buy-produc']}>
                                        <a href="#!">
                                            <i className="fa-solid fa-cart-plus"></i>
                                            <span>Thêm ngay</span>
                                        </a>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;
