import clsx from "clsx";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faDongSign } from "@fortawesome/free-solid-svg-icons";
import styles from "./QuickProducts.module.scss";

function QuickProducts({ hendleQuickViewProduct }) {
    const handleContentClick = (e) => {
        e.stopPropagation(); // ngăn chặn hành vi mặc định
    };
   console.log("xuan manh check ", hendleQuickViewProduct());
    return (
        <div
            onClick={hendleQuickViewProduct}
            className={clsx(styles.containerQuickViewProduct)}
        >
            <div className={clsx(styles.mainContent)}>
                <div
                    onClick={handleContentClick}
                    className={clsx(styles.content)}
                >
                    <FontAwesomeIcon
                        onClick={hendleQuickViewProduct}
                        className={clsx(styles.closeBoxModal)}
                        icon={faXmark}
                    />
                    <div className={clsx(styles.contentLeft)}>
                        <div className={clsx(styles.imageHome)}>
                            <picture>
                                <img
                                    src="https://i.ibb.co/D4gGMW7/Detai-Thuc-an-hat-cho-meo-nutrience-original-healthy-1.webp"
                                    alt=""
                                />
                            </picture>
                        </div>
                        <div className={clsx(styles.subImage)}>
                            <picture>
                                <img
                                    src="https://i.ibb.co/D4gGMW7/Detai-Thuc-an-hat-cho-meo-nutrience-original-healthy-1.webp"
                                    alt=""
                                />
                            </picture>
                            <picture>
                                <img
                                    src="https://i.ibb.co/D4gGMW7/Detai-Thuc-an-hat-cho-meo-nutrience-original-healthy-1.webp"
                                    alt=""
                                />
                            </picture>
                            <picture>
                                <img
                                    src="https://i.ibb.co/D4gGMW7/Detai-Thuc-an-hat-cho-meo-nutrience-original-healthy-1.webp"
                                    alt=""
                                />
                            </picture>
                        </div>
                    </div>
                    <div className={clsx(styles.contentRight)}>
                        <div className={clsx(styles.top)}>
                            <h2>Nước rửa khóe mắt chó mèo beaphar.</h2>
                            <div className={clsx(styles.price)}>
                                <span className={clsx(styles.priceNew)}>
                                    190.000
                                    <FontAwesomeIcon icon={faDongSign} />
                                </span>
                                <span className={clsx(styles.priceOld)}>
                                    230.000
                                    <FontAwesomeIcon icon={faDongSign} />
                                </span>
                            </div>
                        </div>
                        <div className={clsx(styles.desc)}>
                            <p>Thông tin sản phẩm đang cập nhật</p>
                        </div>
                        <div className={clsx(styles.manyProduct)}>
                            <span>Số lượng: </span>
                            <input type="number" min={1} alt="" />
                        </div>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickProducts;
