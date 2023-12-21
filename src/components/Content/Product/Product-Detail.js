import styles from "./Product-detail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDongSign, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import {
    FaCartPlus,
    FaShoppingBag,
    FaDiceD6,
    FaAudioDescription,
} from "react-icons/fa";
import Slide from "../Slide/Slide";

function ProductDetail({ data = [], imageDetail = [], dataRelare = [] }) {
    const [detailProduct] = data;
    const [imageDetail1, imageDetail2, imageDetail3] = imageDetail;
    const formatCurrency = (amount) => {
        amount = parseFloat(amount);
        return amount.toLocaleString("vi-VN");
    };
    return (
        <>
            {data.length > 0 ? (
                <>
                    <section>
                        <div className={styles["product-detail"]}>
                            <div className={styles["container"]}>
                                <div className={styles["product-detail-block"]}>
                                    <div
                                        className={
                                            styles["product-detail-left"]
                                        }
                                    >
                                        {imageDetail.length > 0 ? (
                                            <div
                                                className={
                                                    styles["product-left-colum"]
                                                }
                                            >
                                                <figure>
                                                    <img
                                                        src={
                                                            detailProduct.image
                                                        }
                                                        alt=""
                                                        className={
                                                            styles[
                                                                "product-detail-img"
                                                            ]
                                                        }
                                                    />
                                                </figure>
                                                <figure>
                                                    <img
                                                        src={
                                                            imageDetail2.images
                                                        }
                                                        alt=""
                                                        className={
                                                            styles[
                                                                "product-detail-img"
                                                            ]
                                                        }
                                                    />
                                                </figure>
                                                <figure>
                                                    <img
                                                        src={
                                                            imageDetail3.images
                                                        }
                                                        alt=""
                                                        className={
                                                            styles[
                                                                "product-detail-img"
                                                            ]
                                                        }
                                                    />
                                                </figure>
                                                <figure>
                                                    <img
                                                        src={
                                                            imageDetail1.images
                                                        }
                                                        alt=""
                                                        className={
                                                            styles[
                                                                "product-detail-img"
                                                            ]
                                                        }
                                                    />
                                                </figure>
                                            </div>
                                        ) : (
                                            ""
                                        )}

                                        <div
                                            className={
                                                styles["product-left-img"]
                                            }
                                        >
                                            <img
                                                src={detailProduct.image}
                                                alt="Detail Products"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            styles["product-detail-right"]
                                        }
                                    >
                                        <div
                                            className={
                                                styles["product-container"]
                                            }
                                        >
                                            <h1 className={styles["heading"]}>
                                                {detailProduct.name}
                                            </h1>
                                            <div
                                                className={
                                                    styles["product-content"]
                                                }
                                            >
                                                <span>
                                                    <strong>
                                                        Thương hiệu:{" "}
                                                    </strong>
                                                    {detailProduct.trademark}
                                                </span>
                                                <span>
                                                    <strong>
                                                        Tình trạng:{" "}
                                                    </strong>
                                                    {detailProduct.state}
                                                </span>
                                            </div>
                                            <div
                                                className={
                                                    styles[
                                                        "product-right-price"
                                                    ]
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles[
                                                            "product-price-one"
                                                        ]
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            styles[
                                                                "product-pricesale"
                                                            ]
                                                        }
                                                    >
                                                        {formatCurrency(
                                                            detailProduct.price
                                                        )}
                                                    </span>
                                                    <i>
                                                        <FontAwesomeIcon
                                                            icon={faDongSign}
                                                        />
                                                    </i>
                                                </div>
                                                <div
                                                    className={
                                                        styles[
                                                            "product-price-two"
                                                        ]
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            styles[
                                                                "product-price"
                                                            ]
                                                        }
                                                    >
                                                        {formatCurrency(
                                                            detailProduct.salePrice
                                                        )}
                                                    </span>
                                                    <i>
                                                        <FontAwesomeIcon
                                                            icon={faDongSign}
                                                        />
                                                    </i>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles["product-counter"]
                                                }
                                            >
                                                <label>Số lượng:</label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                ></input>
                                            </div>

                                            <div
                                                className={
                                                    styles["product-right-btn"]
                                                }
                                            >
                                                <button
                                                    className={styles["btn"]}
                                                >
                                                    <i>
                                                        <FaShoppingBag />
                                                    </i>
                                                    MUA NGAY
                                                </button>
                                                <button
                                                    className={styles["btn"]}
                                                >
                                                    <i>
                                                        <FaCartPlus />
                                                    </i>
                                                    THÊM VÀO GIỎ HÀNG
                                                </button>
                                            </div>
                                            <div
                                                className={
                                                    styles["product-info"]
                                                }
                                            >
                                                <div>
                                                    <i>
                                                        <FontAwesomeIcon
                                                            icon={faTruckFast}
                                                        />
                                                    </i>
                                                    <strong>
                                                        Vận chuyển toàn quốc:
                                                    </strong>
                                                    <span>
                                                        Miễn phí vận chuyển
                                                        trong bán kính 15km
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        styles[
                                                            "product-info-two"
                                                        ]
                                                    }
                                                >
                                                    <i>
                                                        <FaDiceD6 />
                                                    </i>
                                                    <strong>
                                                        Hỗ trợ đổi trả:
                                                    </strong>
                                                    <span>
                                                        Trong vòng 15 ngày kể từ
                                                        khi mua hàng
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["product-describe"]}>
                                    <div
                                        className={
                                            styles["product-describe-title"]
                                        }
                                    >
                                        <i>
                                            <FaAudioDescription />
                                        </i>
                                        <span className={styles["title"]}>
                                            MÔ TẢ SẢN PHẨM
                                        </span>
                                    </div>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: detailProduct.descHTML,
                                        }}
                                        className={
                                            styles["product-describe-desc"]
                                        }
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div style={{ marginBottom: "50px" }}>
                        <Slide data={dataRelare} title="Sản phẩm tương tự" />
                    </div>
                </>
            ) : (
                <strong className={styles["Detail_empty"]}>
                    Sản phẩm chưa có trang Detail. Vui lòng chọn sản phẩm khác.
                </strong>
            )}
        </>
    );
}

export default ProductDetail;
