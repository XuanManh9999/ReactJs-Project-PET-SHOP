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
                        <div className={styles['product-cat block']}>
                            {/* Item 1 */}
                            <div className={styles['product-item']}>
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
                                            <i className="fa-solid fa-dong-sign"></i>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;
