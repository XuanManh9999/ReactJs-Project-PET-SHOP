import clsx from "clsx";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  faXmark,
  faDongSign,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./QuickProducts.module.scss";

import { getDataProductsEqualId } from "../../../services/hendleProducts";

import { useData } from "../../Common/DataContext";
function QuickProducts({ hendleQuickViewProduct, id }) {
  const [dataProduct, setDataProduct] = useState({});
  const [totalProduct, setTotalProduct] = useState(1);
  const { updateData, yourData } = useData();

  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const product = await getDataProductsEqualId(id);
        const res = product.data[0];
        setDataProduct(res);
      } catch (e) {
        console.log("Lỗi khi gọi API trong componets QUickProducts");
      }
    };
    getData();
  }, [id]);
  const handleContentClick = (e) => {
    e.stopPropagation(); // ngăn chặn hành vi mặc định
  };
  const formatCurrency = (amount) => {
    amount = parseFloat(amount);
    return amount.toLocaleString("vi-VN");
  };

  const hendleTotalProduct = (value) => {
    setTotalProduct(value);
  };

  const hendleAddCart = (id) => {
    const existingProductIndex = yourData.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      toast.warn("Sản phẩm đã tồn tài trong giỏ hàng");
    } else {
      updateData([
        ...yourData,
        {
          id,
          quantity: +totalProduct,
          size: selectedSize,
          color: selectedColor,
        },
      ]);
      toast.success("Thêm sản phẩm thành công");
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
    <div
      onClick={hendleQuickViewProduct}
      className={clsx(styles.containerQuickViewProduct)}
    >
      {dataProduct && (
        <div className={clsx(styles.mainContent)}>
          <div onClick={handleContentClick} className={clsx(styles.content)}>
            <FontAwesomeIcon
              onClick={hendleQuickViewProduct}
              className={clsx(styles.closeBoxModal)}
              icon={faXmark}
            />
            <div className={clsx(styles.contentLeft)}>
              <PhotoProvider>
                <div className={clsx(styles.imageHome)}>
                  <picture>
                    <PhotoView src={dataProduct.avatar}>
                      <img src={dataProduct.avatar} alt={dataProduct.name} />
                    </PhotoView>
                  </picture>
                </div>
                <div className={clsx(styles.subImage)}>
                  <picture>
                    {dataProduct.detailImages?.length > 0 &&
                    dataProduct.detailImages[0].hrefImage !== "" ? (
                      <PhotoView
                        src={
                          dataProduct.detailImages?.length > 0 &&
                          dataProduct.detailImages[0].hrefImage
                        }
                      >
                        <img
                          src={dataProduct.detailImages[0].hrefImage}
                          alt={dataProduct.name}
                        />
                      </PhotoView>
                    ) : (
                      ""
                    )}
                  </picture>
                  <picture>
                    {dataProduct.detailImages?.length > 1 &&
                    dataProduct.detailImages[1].hrefImage !== "" ? (
                      <PhotoView
                        src={
                          dataProduct.detailImages?.length > 1 &&
                          dataProduct.detailImages[1].hrefImage
                        }
                      >
                        <img
                          src={
                            dataProduct.detailImages?.length > 1 &&
                            dataProduct.detailImages[1].hrefImage
                          }
                          alt={dataProduct.name}
                        />
                      </PhotoView>
                    ) : (
                      ""
                    )}
                  </picture>
                  <picture>
                    {dataProduct.detailImages?.length > 2 &&
                    dataProduct.detailImages[2].hrefImage !== "" ? (
                      <PhotoView
                        src={
                          dataProduct.detailImages?.length > 2 &&
                          dataProduct.detailImages[2].hrefImage
                        }
                      >
                        <img
                          src={
                            dataProduct.detailImages?.length > 2 &&
                            dataProduct.detailImages[2].hrefImage
                          }
                          alt={dataProduct.name}
                        />
                      </PhotoView>
                    ) : (
                      ""
                    )}
                  </picture>
                </div>
              </PhotoProvider>
            </div>
            <div className={clsx(styles.contentRight)}>
              <div className={clsx(styles.top)}>
                <h2>{dataProduct.name}</h2>
                <div className={clsx(styles.price)}>
                  <span className={clsx(styles.priceNew)}>
                    {formatCurrency(dataProduct.price)}
                    <FontAwesomeIcon icon={faDongSign} />
                  </span>
                  <span className={clsx(styles.priceOld)}>
                    {formatCurrency(dataProduct.salePrice)}
                    <FontAwesomeIcon icon={faDongSign} />
                  </span>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: dataProduct ? dataProduct.descHTML : "",
                }}
                className={clsx(styles.desc)}
              ></div>
              <div className={clsx(styles.container__more)}>
                {dataProduct &&
                dataProduct?.sizes &&
                dataProduct?.sizes[0].size !== null &&
                dataProduct?.sizes.length > 0 ? (
                  <div className={styles["product-size"]}>
                    <label>Kích thước:</label>
                    {dataProduct.sizes.map((item, index) => {
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
                                index === selectedSizeIndex ? "#f9a529" : "",
                              color: index === selectedSizeIndex ? "#fff" : "",
                            }}
                            onClick={(event) => hendleSizeProduct(event, index)}
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
                {/* Color */}
                {dataProduct &&
                dataProduct?.colors &&
                dataProduct?.colors[0].color !== null &&
                dataProduct?.colors.length > 0 ? (
                  <div className={styles["product-color"]}>
                    <div className={styles["listColor"]}>
                      <label>Màu sắc:</label>
                      {dataProduct?.colors?.map((item, index) => (
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
              </div>
              <div className={clsx(styles.manyProduct)}>
                <span>Số lượng: </span>
                <input
                  type="number"
                  min={1}
                  alt=""
                  value={totalProduct}
                  onChange={(event) => {
                    hendleTotalProduct(event.target.value);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  hendleAddCart(dataProduct.id);
                }}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuickProducts;
