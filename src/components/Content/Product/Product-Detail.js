import styles from "./Product-detail.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDongSign, faTruckFast } from "@fortawesome/free-solid-svg-icons";

import {
  FaCartPlus,
  FaShoppingBag,
  FaDiceD6,
  FaAudioDescription,
} from "react-icons/fa";
import Slide from "../Slide/Slide";

function ProductDetail({ data = [], dataRelare = [] }) {
  const formatCurrency = (amount) => {
    amount = parseFloat(amount);
    return amount.toLocaleString("vi-VN");
  };
  const [getDetailProduct] = data;
  console.log("Xuan manh check dataRelare", dataRelare);
  return (
    <>
      {data && data.length > 0 ? (
        <>
          <section>
            <div className={styles["product-detail"]}>
              <div className={styles["container"]}>
                <div className={styles["product-detail-block"]}>
                  <div className={styles["product-detail-left"]}>
                    {data.length > 0 ? (
                      <div className={styles["product-left-colum"]}>
                        <figure>
                          <img
                            src={
                              getDetailProduct.detailImages[0].hrefImage
                                ? getDetailProduct.detailImages[0].hrefImage
                                : ""
                            }
                            alt=""
                            className={styles["product-detail-img"]}
                          />
                        </figure>
                        <figure>
                          <img
                            src={
                              getDetailProduct.detailImages[0].hrefImage
                                ? getDetailProduct.detailImages[0].hrefImage
                                : ""
                            }
                            alt=""
                            className={styles["product-detail-img"]}
                          />
                        </figure>
                        <figure>
                          <img
                            src={
                              getDetailProduct.detailImages[0].hrefImage
                                ? getDetailProduct.detailImages[0].hrefImage
                                : ""
                            }
                            alt=""
                            className={styles["product-detail-img"]}
                          />
                        </figure>
                        <figure>
                          <img
                            src={
                              getDetailProduct.detailImages[0].hrefImage
                                ? getDetailProduct.detailImages[0].hrefImage
                                : ""
                            }
                            alt=""
                            className={styles["product-detail-img"]}
                          />
                        </figure>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className={styles["product-left-img"]}>
                      <img
                        src={getDetailProduct.avatar}
                        alt="Detail Products"
                      />
                    </div>
                  </div>
                  <div className={styles["product-detail-right"]}>
                    <div className={styles["product-container"]}>
                      <h1 className={styles["heading"]}>
                        {getDetailProduct.name}
                      </h1>
                      <div className={styles["product-content"]}>
                        <span>
                          <strong>Thương hiệu: </strong>
                          {getDetailProduct.trademark}
                        </span>
                        <span>
                          <strong>Tình trạng: </strong>
                          {getDetailProduct.manyProducts > 0
                            ? "Còn hàng"
                            : "Hết hàng"}
                        </span>
                      </div>
                      <div className={styles["product-right-price"]}>
                        <div className={styles["product-price-one"]}>
                          <span className={styles["product-pricesale"]}>
                            {formatCurrency(getDetailProduct.price)}
                          </span>
                          <i>
                            <FontAwesomeIcon icon={faDongSign} />
                          </i>
                        </div>
                        <div className={styles["product-price-two"]}>
                          <span className={styles["product-price"]}>
                            {formatCurrency(getDetailProduct.salePrice)}
                          </span>
                          <i>
                            <FontAwesomeIcon icon={faDongSign} />
                          </i>
                        </div>
                      </div>
                      {getDetailProduct && getDetailProduct.sizes.length > 0 ? (
                        <div className={styles["product-size"]}>
                          <label>Kích thước:</label>
                        </div>
                      ) : (
                        ""
                      )}
                      {getDetailProduct &&
                      getDetailProduct.colors.length > 0 ? (
                        <div className={styles["product-color"]}>
                          <label>Màu sắc:</label>

                          <div className="list-color"></div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className={styles["product-counter"]}>
                        <label>Số lượng:</label>
                        <input type="number" min="1"></input>
                      </div>

                      <div className={styles["product-right-btn"]}>
                        <Link
                          to={"/payment-processing"}
                          className={styles["btn"]}
                        >
                          <i>
                            <FaShoppingBag />
                          </i>
                          MUA NGAY
                        </Link>
                        <button className={styles["btn"]}>
                          <i>
                            <FaCartPlus />
                          </i>
                          THÊM VÀO GIỎ HÀNG
                        </button>
                      </div>
                      <div className={styles["product-info"]}>
                        <div>
                          <i>
                            <FontAwesomeIcon icon={faTruckFast} />
                          </i>
                          <strong>Vận chuyển toàn quốc:</strong>
                          <span>Miễn phí vận chuyển trong bán kính 15km</span>
                        </div>
                        <div className={styles["product-info-two"]}>
                          <i>
                            <FaDiceD6 />
                          </i>
                          <strong>Hỗ trợ đổi trả:</strong>
                          <span>Trong vòng 15 ngày kể từ khi mua hàng</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["product-describe"]}>
                  <div className={styles["product-describe-title"]}>
                    <i>
                      <FaAudioDescription />
                    </i>
                    <span className={styles["title"]}>MÔ TẢ SẢN PHẨM</span>
                  </div>
                  <main className={styles["detailProductContent"]}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: getDetailProduct.descHTML,
                      }}
                    ></div>
                  </main>
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
