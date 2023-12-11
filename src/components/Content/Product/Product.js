
import styles from "./Product.module.scss";


function Product() {
    return (
        <section>
            <div className={styles['product-buy']}>
                <div className={styles['main-content']}>

                    <div className={styles['intro-product-buy']}>
                        <h1 className={styles.title}>Sản phẩm shop đang bán</h1>
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
                </div>
            </div>


        </section>
    );
}

export default Product;