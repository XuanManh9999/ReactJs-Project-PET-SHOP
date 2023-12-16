import styles from "./Product-detail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDongSign, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FaCartPlus, FaShoppingBag, FaDiceD6, FaAudioDescription } from "react-icons/fa";

function ProductDetail() {
    return (
        <section>
            <div className={styles['product-detail']}>
                <div className={styles['container']}>
                    <div className={styles['product-detail-block']}>
                        <div className={styles['product-detail-left']}>
                            <div className={styles['product-left-colum']}>
                                <figure>
                                    <img src="Images/food-dog-thuc-an-kho.webp" alt="" className={styles['product-detail-img']} />
                                </figure>
                                <figure>
                                    <img src="Images/food-dog-thuc-an-kho.webp" alt="" className={styles['product-detail-img']} />
                                </figure>
                                <figure>
                                    <img src="Images/food-dog-thuc-an-kho.webp" alt="" className={styles['product-detail-img']} />
                                </figure>
                                <figure>
                                    <img src="Images/food-dog-thuc-an-kho.webp" alt="" className={styles['product-detail-img']} />
                                </figure>
                            </div>
                            <div className={styles['product-left-img']}>
                                <img src="Images/food-dog-thuc-an-kho.webp" alt="" />
                            </div>
                        </div>
                        <div className={styles['product-detail-right']}>
                            <div className={styles['product-container']}>
                                <h1 className={styles['heading']}>Thức ăn hạt cho mèo Whiskat</h1>
                                <div className={styles['product-content']}>
                                    <span><strong>Thương hiệu: </strong>Whiskat</span>
                                    <span><strong>Tình trạng: </strong>Còn hàng</span>
                                </div>
                                <div className={styles['product-right-price']}>

                                    <div className={styles['product-price-one']}>
                                        <span className={styles['product-pricesale']}>120.000</span>
                                        <i>
                                            <FontAwesomeIcon icon={faDongSign} />
                                        </i>
                                    </div>
                                    <div className={styles['product-price-two']}>
                                        <span className={styles['product-price']}>200.000</span>
                                        <i>
                                            <FontAwesomeIcon icon={faDongSign} />
                                        </i>
                                    </div>
                                </div>
                                <div className={styles['product-counter']}>
                                    <label>Số lượng:</label>
                                    <input type="number"></input>

                                </div>

                                <div className={styles['product-right-btn']}>
                                    <button className={styles['btn']}>
                                        <i>
                                            <FaShoppingBag />
                                        </i>
                                            MUA NGAY
                                    </button>
                                    <button className={styles['btn']}>
                                        <i>
                                            <FaCartPlus />
                                        </i>
                                        THÊM VÀO GIỎ HÀNG
                                    </button>
                                </div>
                                <div className={styles['product-info']}>
                                    <div>
                                        <i>
                                            <FontAwesomeIcon icon={faTruckFast} />
                                        </i>
                                        <strong>
                                            Vận chuyển toàn quốc:
                                        </strong>
                                        <span>Miễn phí vận chuyển trong bán kính 15km</span>
                                    </div>
                                    <div className={styles['product-info-two']}>
                                        <i>
                                            <FaDiceD6 />
                                        </i>
                                        <strong>
                                            Hỗ trợ đổi trả:
                                        </strong>
                                        <span>Trong vòng 15 ngày kể từ khi mua hàng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['product-describe']}>
                        <div className={styles['product-describe-title']}>
                            <i>
                                <FaAudioDescription />
                            </i>
                            <span className={styles['title']}>MÔ TẢ SẢN PHẨM</span>
                        </div>
                        <p className={styles['product-describe-desc']}>
                            Thức ăn cho mèo lớn Whiskas được lựa chọn từ những thành phần thịt, cá tươi ngon nhất trong chế biến, giàu protein, các vitamin và khoáng chất thiết yếu và không có chất bảo quản, mang đến tác dụng cân bằng dinh dưỡng hàng ngày cho thú cưng của bạn.<br></br>
                            Thức ăn cho mèo Whiskas được phát triển bởi các chất dinh dưỡng tối ưu và được các chuyên gia vật nuôi trên khắp thế giới công nhận là sản phẩm dinh dưỡng tốt nhất và khuyên dùng.<br></br>
                            <strong>Thành phần:</strong><br></br>Ngũ cốc nguyên hạt (gạo, bắp), thịt gia cầm và các phụ phẩm từ gia cầm, tinh bột bắp, chất béo từ cọ, cá biển...<br></br>
                            Thức ăn khô cho mèo Whiskas được lựa chọn từ những thành phần thịt, cá tươi ngon nhất trong chế biến, giàu protein, các vitamin và khoáng chất thiết yếu và không có chất bảo quản, đảm bảo cung cấp đủ những dưỡng chất cần thiết cho sự phát triển của những chú Mèo, tùy vào cân nặng và tháng tuổi bạn có thể phân bổ khối lượng thức ăn sao cho phù hợp nhất.<br></br>
                            Thức ăn khô Whiskas dành cho mèo được thiết kế dành riêng cho đặc thù dinh dưỡng của mèo, các hạt giàu các chất dinh dưỡng từ thịt, hải sản để đảm bảo cho sự phát triển toàn diện cho mèo của bạn mỗi ngày.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;