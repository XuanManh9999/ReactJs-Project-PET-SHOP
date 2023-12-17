import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Item.module.scss";
import {
    faDongSign,
    faMinus,
    faPlus,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
function Item({ data = [] }) {
    return (
        <>
            {data && data.length > 0 ? (
                <>
                    {/* Tí map ra sau */}
                    <div className={clsx(styles.cart_item)}>
                        <picture className={clsx(styles.img)}>
                            <img
                                src="images/Calcium-possphorus.webp"
                                alt="products"
                            />
                        </picture>
                        <div className={clsx(styles.content)}>
                            <p className={clsx(styles.title)}>
                                Nước rửa mắt cho méo beaphar
                            </p>
                            <span className={clsx(styles.price)}>
                                190.000
                                <FontAwesomeIcon icon={faDongSign} />
                            </span>
                            <div className={clsx(styles.numbers_products)}>
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
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                    {/* Phần pay dữ nguyên */}
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
                        <img src="https://i.ibb.co/C7CmWTT/empty-cart.png" alt="cart_empty" />
                    </picture>
                    <p>Không có sản phẩm nào trong giỏ hàng.</p>
                </div>
            )}
        </>
    );
}

export default Item;
