import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDongSign,
  faRightLong,
  faMagnifyingGlassPlus,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductList.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import QuickProducts from "../QuickProducts/QuickProducts";
import { store } from "../../../redux/store.js";
import { saveDataFromLocalstore } from "../../../redux/actions.js";
import { useData } from "../../Common/DataContext";
import { useRef, useState } from "react";
const formatCurrency = (amount) => {
  amount = parseFloat(amount);
  return amount.toLocaleString("vi-VN");
};
function ProductList({ data = [] }) {
  const [quickView, setQuickView] = useState(false);
  const { updateData } = useData();
  const getIdProduct = useRef();
  const hendleQuickView = (id) => {
    getIdProduct.current = id;
    setQuickView((pre) => !pre);
  };
  const hendleAddToCart = (id) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      toast.warn("Sản phẩm đã tồn tài trong giỏ hàng");
    } else {
      existingCart.push({ id, quantity: 1 });
      store.dispatch(saveDataFromLocalstore(existingCart));
      updateData(existingCart);
      toast.success("Thêm sản phẩm thành công");
    }
  };
  return (
    <section>
      <div className={styles["product-buy"]}>
        <div className={styles["main-content"]}>
          {/* Product */}
          <div className={styles["product-buy-list"]}>
            <div className={styles["product-cat"]}>
              {/* Item 1 */}
              {data && data.length > 0 ? (
                data.map((item, index) => (
                  <Link
                    key={index}
                    to={`/ProductDetail/${item.id}/${item.trademark}`}
                    className={styles["producitem"]}
                  >
                    <picture className={styles["img-item-hero"]}>
                      <figure>
                        <img src={item.avatar} alt={item.name} />
                      </figure>
                    </picture>
                    <div className={styles.price}>
                      <div className={styles["line-clamp-2"]}>
                        <Link to={""}>{item.name}</Link>
                      </div>
                      <div className={styles["price-item-many"]}>
                        <span className={styles["price-new"]}>
                          {formatCurrency(item.salePrice)}
                          <i>
                            <FontAwesomeIcon icon={faDongSign} />
                          </i>
                        </span>
                        <span className={styles["price-old"]}>
                          {formatCurrency(item.price)}
                          <i>
                            <FontAwesomeIcon icon={faDongSign} />
                          </i>
                        </span>
                      </div>
                    </div>
                    <div className={styles["box-modal-buy"]}>
                      <button
                        onClick={() => {
                          hendleQuickView(item.id);
                        }}
                        className={styles["hero-read-produc"]}
                      >
                        <Link to={""}>
                          <i>
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                          </i>
                          <span>Xem nhanh</span>
                        </Link>
                      </button>
                      <button
                        onClick={() => {
                          hendleAddToCart(item.id);
                        }}
                        className={styles["hero-buy-produc"]}
                      >
                        <Link to={""}>
                          <i>
                            <FontAwesomeIcon icon={faCartPlus} />
                          </i>
                          <span>Thêm ngay</span>
                        </Link>
                      </button>
                    </div>
                  </Link>
                ))
              ) : (
                <div className={styles["empty-product"]}>
                  Hiện tại đã hết sản phẩm hệ thống sẽ cập nhật sau...
                </div>
              )}
            </div>
            {data && data.length > 0 ? (
              <div className={styles["more-buy-products"]}>
                <Link to={""}>Xem thêm sản phẩm.</Link>
                <i>
                  <FontAwesomeIcon icon={faRightLong} />
                </i>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {quickView ? (
        <QuickProducts
          id={getIdProduct.current}
          hendleQuickViewProduct={hendleQuickView}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default ProductList;
