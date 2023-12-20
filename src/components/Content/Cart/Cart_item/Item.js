import clsx from "clsx";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Item.module.scss";
import {
    faDongSign,
    faMinus,
    faPlus,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { getDataCardProducts } from "../../../../services/hendleProducts";

function Item() {
    const [productDetails, setProductDetails] = useState([]);
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDataCardProducts(cartItems);
                if (response && response.data.length > 0) {
                    setProductDetails(response.data); // Dữ liệu chi tiết của sản phẩm
                } else {
                    setProductDetails([]);
                }
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchData();
    }, []);

    const hendleDeleteProduct = (id) => {
        // if (id) {
        //     let newArray = productDetails.filter((item) => item !== id);
        //     localStorage.setItem("cartItems", JSON.stringify(newArray));
        //     setProductDetails(newArray);
        // }
    };
    return (
        <>
            {productDetails && productDetails.length > 0 ? (
                <>
                    {productDetails.map((item, index) => {
                        return (
                            <div key={index} className={clsx(styles.cart_item)}>
                                <picture className={clsx(styles.img)}>
                                    <img src={item.image} alt={item.name} />
                                </picture>
                                <div className={clsx(styles.content)}>
                                    <p className={clsx(styles.title)}>
                                        {item.name}
                                    </p>
                                    <span className={clsx(styles.price)}>
                                        {item.price}
                                        <FontAwesomeIcon icon={faDongSign} />
                                    </span>
                                    <div
                                        className={clsx(
                                            styles.numbers_products
                                        )}
                                    >
                                        <input
                                            value={"1"}
                                            alt="many"
                                            className={clsx(styles.many)}
                                        />
                                        <span className={clsx(styles.plus)}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                        <span className={clsx(styles.minus)}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </span>
                                    </div>
                                </div>
                                <div className={clsx(styles.footer)}>
                                    <FontAwesomeIcon
                                        onClick={() => {
                                            hendleDeleteProduct(item.id);
                                        }}
                                        icon={faTrash}
                                    />
                                </div>
                            </div>
                        );
                    })}
                    ;{/* Phần pay dữ nguyên */}
                    <div className={clsx(styles.pay)}>
                        <div className={clsx(styles.header_pay)}>
                            <p>Tổng tiền thanh toán: </p>
                            <span className={clsx(styles.price)}>
                                190.000
                                <FontAwesomeIcon icon={faDongSign} />
                            </span>
                        </div>
                        <div className={clsx(styles.pay_money)}>
                            <button className={clsx(styles.btn_pay)}>
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className={clsx(styles.cart_empty)}>
                    <picture className={clsx(styles.img_empty)}>
                        <img
                            src="https://i.ibb.co/C7CmWTT/empty-cart.png"
                            alt="cart_empty"
                        />
                    </picture>
                    <p>Không có sản phẩm nào trong giỏ hàng.</p>
                </div>
            )}
        </>
    );
}

export default Item;
