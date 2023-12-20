import React, { useState } from 'react';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';

function Product() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(index === selectedItem ? null : index);
    };

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
                                <li className={selectedItem === 0 ? styles['action-navigation'] : ''} onClick={() => handleItemClick(0)}>
                                    <Link className={selectedItem === 0 ? styles['action-navigation-a'] : ''} to={""}>Thức ăn cho Mèo</Link>
                                </li>
                                <li className={selectedItem === 1 ? styles['action-navigation'] : ''} onClick={() => handleItemClick(1)}>
                                    <Link className={selectedItem === 1 ? styles['action-navigation-a'] : ''} to={""}>Thức ăn cho Chó</Link>
                                </li>
                                <li className={selectedItem === 2 ? styles['action-navigation'] : ''} onClick={() => handleItemClick(2)}>
                                    <Link className={selectedItem === 2 ? styles['action-navigation-a'] : ''} to={""}>Thức ăn cho Hamster</Link>
                                </li>
                                <li className={selectedItem === 3 ? styles['action-navigation'] : ''} onClick={() => handleItemClick(3)}>
                                    <Link className={selectedItem === 3 ? styles['action-navigation-a'] : ''} to={""}>Thức ăn cho Chim</Link>
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
