import styles from "./Product-detail.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  faCheck,
  faDongSign,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaCartPlus,
  FaShoppingBag,
  FaDiceD6,
  FaAudioDescription,
} from "react-icons/fa";

import Slide from "../Slide/Slide";
import { store } from "../../../redux/store.js";
import { saveDataFromLocalstore } from "../../../redux/actions.js";
import { useData } from "../../Common/DataContext";

function ProductDetail({ data = [], dataRelare = [] }) {
  const [getDetailProduct] = data;
  const [totalManyProduct, setTotalManyProduct] = useState(1);

  const { updateData } = useData();
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const formatCurrency = (amount) => {
    amount = parseFloat(amount);
    return amount.toLocaleString("vi-VN");
  };

  const hendleAddCart = (id) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      toast.warn("Sản phẩm đã tồn tài trong giỏ hàng");
    } else {
      existingCart.push({
        id,
        quantity: +totalManyProduct,
        size: selectedSize,
        color: selectedColor,
      });
      store.dispatch(saveDataFromLocalstore(existingCart));
      updateData(existingCart);
      toast.success("Thêm sản phẩm thành công");
    }
  };

  const hendlePaymentProduct = (id) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
    } else {
      existingCart.push({
        id,
        quantity: +totalManyProduct,
        size: selectedSize,
        color: selectedColor,
      });
      store.dispatch(saveDataFromLocalstore(existingCart));
      updateData(existingCart);
    }
  };
  const hendleClickChooseColor = (event, index) => {
    const selectedValue = event.target.value;
    setSelectedColor(selectedValue);
    setSelectedColorIndex(index);
  };

  const hendleSizeProduct = (event, index) => {
    const selectedValue = event.target.value;
    setSelectedSize(selectedValue);
    setSelectedSizeIndex(index);
  };

  return (
    <>
      {data && data.length > 0 ? (
        <>
          <section>
            <div className={styles["product-detail"]}>
              <div className={styles["container"]}>
                <div className={styles["product-detail-block"]}>
                  <div className={styles["product-detail-left"]}>
                    <PhotoProvider>
                      {data.length > 0 ? (
                        <div className={styles["product-left-colum"]}>
                          <figure>
                            {getDetailProduct &&
                            getDetailProduct.detailImages[0] &&
                            getDetailProduct.detailImages[0].hrefImage !==
                              "" ? (
                              <PhotoView
                                src={
                                  getDetailProduct &&
                                  getDetailProduct.detailImages[0] &&
                                  getDetailProduct.detailImages[0].hrefImage
                                    ? getDetailProduct.detailImages[0].hrefImage
                                    : ""
                                }
                              >
                                <img
                                  src={
                                    getDetailProduct &&
                                    getDetailProduct.detailImages[0] &&
                                    getDetailProduct.detailImages[0].hrefImage
                                      ? getDetailProduct.detailImages[0]
                                          .hrefImage
                                      : ""
                                  }
                                  alt=""
                                  className={styles["product-detail-img"]}
                                />
                              </PhotoView>
                            ) : (
                              ""
                            )}
                          </figure>
                          <figure>
                            {getDetailProduct &&
                            getDetailProduct.detailImages[1] &&
                            getDetailProduct.detailImages[1].hrefImage !==
                              "" ? (
                              <PhotoView
                                src={
                                  getDetailProduct &&
                                  getDetailProduct.detailImages[1] &&
                                  getDetailProduct.detailImages[1].hrefImage
                                    ? getDetailProduct.detailImages[1].hrefImage
                                    : ""
                                }
                              >
                                <img
                                  src={
                                    getDetailProduct &&
                                    getDetailProduct.detailImages[1] &&
                                    getDetailProduct.detailImages[1].hrefImage
                                      ? getDetailProduct.detailImages[1]
                                          .hrefImage
                                      : ""
                                  }
                                  alt=""
                                  className={styles["product-detail-img"]}
                                />
                              </PhotoView>
                            ) : (
                              ""
                            )}
                          </figure>
                          <figure>
                            {getDetailProduct &&
                            getDetailProduct.detailImages[2] &&
                            getDetailProduct.detailImages[2].hrefImage !==
                              "" ? (
                              <PhotoView
                                src={
                                  getDetailProduct &&
                                  getDetailProduct.detailImages[2] &&
                                  getDetailProduct.detailImages[2].hrefImage
                                    ? getDetailProduct.detailImages[2].hrefImage
                                    : ""
                                }
                              >
                                <img
                                  src={
                                    getDetailProduct &&
                                    getDetailProduct.detailImages[2] &&
                                    getDetailProduct.detailImages[2].hrefImage
                                      ? getDetailProduct.detailImages[2]
                                          .hrefImage
                                      : ""
                                  }
                                  alt=""
                                  className={styles["product-detail-img"]}
                                />
                              </PhotoView>
                            ) : (
                              ""
                            )}
                          </figure>
                          <figure>
                            {getDetailProduct &&
                            getDetailProduct.detailImages[3] &&
                            getDetailProduct.detailImages[3].hrefImage !==
                              "" ? (
                              <PhotoView
                                src={
                                  getDetailProduct &&
                                  getDetailProduct.detailImages[3] &&
                                  getDetailProduct.detailImages[3].hrefImage
                                    ? getDetailProduct.detailImages[3].hrefImage
                                    : ""
                                }
                              >
                                <img
                                  src={
                                    getDetailProduct &&
                                    getDetailProduct.detailImages[3] &&
                                    getDetailProduct.detailImages[3].hrefImage
                                      ? getDetailProduct.detailImages[3]
                                          .hrefImage
                                      : ""
                                  }
                                  alt=""
                                  className={styles["product-detail-img"]}
                                />
                              </PhotoView>
                            ) : (
                              ""
                            )}
                          </figure>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className={styles["product-left-img"]}>
                        <PhotoView src={getDetailProduct.avatar}>
                          <img
                            src={getDetailProduct.avatar}
                            alt="Detail Products"
                          />
                        </PhotoView>
                      </div>
                    </PhotoProvider>
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
                            {formatCurrency(getDetailProduct.salePrice)}
                          </span>
                          <i>
                            <FontAwesomeIcon icon={faDongSign} />
                          </i>
                        </div>
                        <div className={styles["product-price-two"]}>
                          <span className={styles["product-price"]}>
                            {formatCurrency(getDetailProduct.price)}
                          </span>
                          <i>
                            <FontAwesomeIcon icon={faDongSign} />
                          </i>
                        </div>
                      </div>
                      {getDetailProduct &&
                      getDetailProduct?.sizes[0].size !== null &&
                      getDetailProduct.sizes.length > 0 ? (
                        <div className={styles["product-size"]}>
                          <label>Kích thước:</label>
                          {getDetailProduct.sizes.map((item, index) => {
                            return (
                              <>
                                <input
                                  id={`sizes-${index}-cam`}
                                  type="radio"
                                  name="size"
                                  value={item.size}
                                  key={index}
                                  onChange={(event) => {
                                    hendleSizeProduct(event, index);
                                  }}
                                  checked={item.size === selectedSize}
                                />
                                <label
                                  className={styles["size-product"]}
                                  htmlFor={`sizes-${index}-cam`}
                                  style={{
                                    background:
                                      index === selectedSizeIndex
                                        ? "#f9a529"
                                        : "",
                                    color:
                                      index === selectedSizeIndex ? "#fff" : "",
                                  }}
                                  onClick={(event) =>
                                    hendleSizeProduct(event, index)
                                  }
                                >
                                  {item.size}
                                </label>
                              </>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                      {getDetailProduct &&
                      getDetailProduct?.colors[0].color !== null &&
                      getDetailProduct?.colors.length > 0 ? (
                        <div className={styles["product-color"]}>
                          <div className={styles["listColor"]}>
                            <label>Màu sắc:</label>
                            {getDetailProduct?.colors?.map((item, index) => (
                              <>
                                <input
                                  id={`swatch-${index}-cam`}
                                  type="radio"
                                  name="color"
                                  key={index}
                                  value={item.color}
                                  onChange={(event) =>
                                    hendleClickChooseColor(event, index)
                                  }
                                  checked={item.color === selectedColor}
                                />

                                <label
                                  className={styles["color-product"]}
                                  style={{ background: item.color }}
                                  htmlFor={`swatch-${index}-cam`}
                                  onClick={(event) =>
                                    hendleClickChooseColor(event, index)
                                  }
                                >
                                  <i
                                    className={styles["iconCheck"]}
                                    style={{
                                      display:
                                        index === selectedColorIndex
                                          ? "block"
                                          : "none",
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faCheck} />
                                  </i>
                                </label>
                              </>
                            ))}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className={styles["product-counter"]}>
                        <label>Số lượng:</label>
                        <input
                          type="number"
                          min="1"
                          value={totalManyProduct}
                          onChange={(e) => {
                            setTotalManyProduct(e.target.value);
                          }}
                        ></input>
                      </div>

                      <div className={styles["product-right-btn"]}>
                        <Link
                          to={"/payment-processing"}
                          className={styles["payment"]}
                          onClick={() => {
                            hendlePaymentProduct(getDetailProduct.id);
                          }}
                        >
                          <i>
                            <FaShoppingBag />
                          </i>
                          MUA NGAY
                        </Link>
                        <button
                          onClick={() => {
                            hendleAddCart(getDetailProduct.id);
                          }}
                          className={styles["btn"]}
                        >
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
            {dataRelare && dataRelare.length >= 4 ? (
              <Slide data={dataRelare} title="Sản phẩm tương tự" />
            ) : (
              ""
            )}
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
