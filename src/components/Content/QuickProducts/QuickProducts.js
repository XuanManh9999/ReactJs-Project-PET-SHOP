import clsx from "clsx";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faDongSign } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./QuickProducts.module.scss";

import { getDataProductsEqualId } from "../../../services/hendleProducts";
import { store } from "../../../redux/store.js";
import { saveDataFromLocalstore } from "../../../redux/actions.js";
import { useData } from "../../Common/DataContext";
function QuickProducts({ hendleQuickViewProduct, id }) {
  const [dataProduct, setDataProduct] = useState({});
  const [totalProduct, setTotalProduct] = useState(1);
  const { updateData } = useData();
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
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      toast.warn("Sản phẩm đã tồn tài trong giỏ hàng");
    } else {
      existingCart.push({ id, quantity: +totalProduct });
      store.dispatch(saveDataFromLocalstore(existingCart));
      updateData(existingCart);
      toast.success("Thêm sản phẩm thành công");
    }
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
              <div className={clsx(styles.imageHome)}>
                <picture>
                  <img src={dataProduct.avatar} alt={dataProduct.name} />
                </picture>
              </div>
              <div className={clsx(styles.subImage)}>
                <picture>
                  <img
                    src={
                      dataProduct.detailImages?.length > 0 &&
                      dataProduct.detailImages[0].hrefImage
                    }
                    alt={dataProduct.name}
                  />
                </picture>
                <picture>
                  <img
                    src={
                      dataProduct.detailImages?.length > 1 &&
                      dataProduct.detailImages[1].hrefImage
                    }
                    alt={dataProduct.name}
                  />
                </picture>
                <picture>
                  <img
                    src={
                      dataProduct.detailImages?.length > 2 &&
                      dataProduct.detailImages[2].hrefImage
                    }
                    alt={dataProduct.name}
                  />
                </picture>
              </div>
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
