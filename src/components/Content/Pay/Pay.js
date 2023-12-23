import styles from "./Pay.module.scss";
import React, { useState } from "react";
import {
    FaTruck,
    FaMoneyBill,
    FaBuilding,
    FaAngleRight,
    FaAngleDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Pay() {
    const [showBankImage, setShowBankImage] = useState(false);

    const handleToggleBankImage = () => {
        setShowBankImage(!showBankImage);
    };
    return (
        <section>
            <div className={styles["pay"]}>
                <div className={styles["container"]}>
                    {/* form_container */}
                    <div className={styles["send_products"]}>
                        <h1 className={styles["title"]}>PET SHOP</h1>
                        <div className={styles["send_products__main"]}>
                            {/* form_container */}
                            <div className={styles.form_container}>
                                <h2 className={styles.title}>
                                    Thông tin nhận hàng
                                </h2>
                                <form
                                    id="form_4"
                                    action="#!"
                                    className={styles.form__4}
                                >
                                    <div className={styles.form_group}>
                                        <input
                                            type="text"
                                            className={styles.email}
                                            placeholder="Email:"
                                        />
                                        <span
                                            className={styles.form_message}
                                        ></span>
                                    </div>
                                    <div className={styles.form_group}>
                                        <input
                                            type="text"
                                            placeholder="Họ Và tên"
                                            className={styles.surname}
                                        />
                                        <span
                                            className={styles.form_message}
                                        ></span>
                                    </div>
                                    <div className={styles.form_group}>
                                        <input
                                            type="text"
                                            placeholder="Số điện thoại"
                                            className={styles.phone}
                                        />
                                        <span
                                            className={styles.form_message}
                                        ></span>
                                    </div>
                                    <div className={styles.form_group}>
                                        <input
                                            type="text"
                                            placeholder="Địa chỉ"
                                            className={styles.adresss}
                                        />
                                        <span
                                            className={styles.form_message}
                                        ></span>
                                    </div>
                                    <select name="" id="province"></select>
                                    <select name="" id="district">
                                        <option value="">chọn quận</option>
                                    </select>
                                    <select name="" id="ward">
                                        <option value="">chọn phường</option>
                                    </select>
                                    <div className={styles.form_group}>
                                        <textarea
                                            type="text"
                                            placeholder="Ghi chú (tùy chọn)"
                                            className={styles.pay_note}
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className={styles.pay_sub_mid}
                                        style={{ display: "none" }}
                                    ></button>
                                </form>
                            </div>
                            {/* form_container */}
                            <div className={styles.transport_container}>
                                <h2 className={styles.title}>Vận chuyển</h2>
                                <div
                                    className={`${styles.transport_container__item} ${styles.mt_28}`}
                                >
                                    <span className={styles.desc}>
                                        <i>
                                            <FaTruck />
                                        </i>
                                        <p>Giao hàng tận nơi</p>
                                    </span>
                                    <span className={styles.price}>
                                        40.000₫
                                    </span>
                                </div>
                                <h2
                                    className={`${styles.title} ${styles.mt_28} ${styles.pt}`}
                                >
                                    Thanh toán
                                </h2>
                                <div
                                    className={styles.transport_container__item}
                                >
                                    <span className={styles.desc}>
                                        <i>
                                            <FaTruck />
                                        </i>
                                        <p>Thanh toán khi giao hàng</p>
                                    </span>
                                    <span className={styles.price}>
                                        <i>
                                            <FaMoneyBill />
                                        </i>
                                    </span>
                                </div>
                                <div
                                    className={
                                        styles.transport_container__item_bank
                                    }
                                >
                                    <div className={styles.bank_contents}>
                                        <span className="">
                                            <i>
                                                <FaBuilding />
                                            </i>
                                            <p>Thanh toán trực tiếp</p>
                                        </span>
                                        <span
                                            className={styles.price}
                                            onClick={handleToggleBankImage}
                                        >
                                            {showBankImage ? (
                                                <i>
                                                    <FaAngleDown />
                                                </i>
                                            ) : (
                                                <i>
                                                    <FaAngleRight />
                                                </i>
                                            )}
                                        </span>
                                    </div>
                                    <div
                                        className={styles.bank_img}
                                        style={{
                                            display: showBankImage
                                                ? "block"
                                                : "none",
                                        }}
                                    >
                                        <img
                                            src="Images/ngan_hang.jpg"
                                            alt="Ảnh ngân hàng"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* form_container */}
                    <div className={styles["products_pay"]}>
                        <h1 className={styles["title"]}>
                            Đơn hàng (0 sản phẩm)
                        </h1>
                        <div
                            className={styles["products_pay_list_products"]}
                        >
                            123
                        </div>
                        {/* form_container */}
                        <div
                            className={
                                styles.products_pay_list_products_discount
                            }
                        >
                            <div className={styles.discount_pay_products}>
                                <input
                                    type="text"
                                    placeholder="Nhập mã giảm giá"
                                />
                                <button className={styles.btn}>Áp dụng</button>
                            </div>
                            <div className={styles.loadding_price}>
                                <div className={styles.lds_ring}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div
                                className={`${styles.discount_pay_products_status_true} ${styles.hidden}`}
                            >
                                <p className={styles.title}>
                                    Áp dụng mã giảm giá thành công.
                                </p>
                            </div>
                            <div
                                className={`${styles.discount_pay_products_status_flase} ${styles.hidden}`}
                            >
                                <p className={styles.title}>
                                    Không tồn tại mã giảm giá này.
                                </p>
                            </div>
                        </div>

                        <div
                            className={
                                styles.products_pay_list_products_content
                            }
                        >
                            <div
                                className={
                                    styles.products_pay_list_products_item
                                }
                            >
                                <span>Tạm tính</span>
                                <span className={styles.money_products}>
                                    0₫
                                </span>
                            </div>
                            <div
                                className={`${styles.products_pay_list_products_item} ${styles.item_discont} ${styles.hidden}`}
                            >
                                <span>Giảm giá</span>
                                <span className={styles.money_products}>
                                    100.000₫
                                </span>
                            </div>
                            <div
                                className={
                                    styles.products_pay_list_products_item
                                }
                            >
                                <span>Phí vận chuyển</span>
                                <span className={styles.shipping_fee}>
                                    40.000₫
                                </span>
                            </div>
                            <div
                                className={
                                    styles.products_pay_list_products_item
                                }
                            >
                                <span>Tổng cộng</span>
                                <span className={styles.shipping_sum_money}>
                                    0₫
                                </span>
                            </div>
                            <div
                                className={
                                    styles.products_pay_list_products_item
                                }
                            >
                                <Link to={"/"} className={styles.back_home_pay}>
                                    <i className="fa-solid fa-chevron-left"></i>
                                    Quay về trang chủ
                                </Link>
                                <button
                                    className={styles.btn_order_products}
                                    type="submit"
                                >
                                    Đặt hàng
                                </button>
                            </div>
                            <div className={styles.loadding_price}>
                                <div className={styles.lds_ring}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div
                                className={`${styles.pay_Notification_false} ${styles.hidden}`}
                            >
                                <p className={styles.title}>
                                    Đặt hàng không thành công
                                </p>
                            </div>
                            <div
                                className={`${styles.pay_Notification_true} ${styles.hidden}`}
                            >
                                <p className={styles.title}>
                                    Đặt hàng thành công
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pay;
