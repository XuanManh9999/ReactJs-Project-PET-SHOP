import { useEffect, useRef, useState } from "react";
import styles from "./ProductItem.module.scss";
import clsx from "clsx";
// import { animateScroll as scroll } from "react-scroll";
import {
  faDongSign,
  faMagnifyingGlassPlus,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../Common/DataContext";
import { ToastContainer, toast } from "react-toastify";
import QuickProducts from "../QuickProducts/QuickProducts";
function ProudctItem() {
  const { typeProduct } = useParams();
  const [quickView, setQuickView] = useState(false);
  const { setTypeParams, dataProduct, updateData, yourData } = useData();
  const getIdProduct = useRef();
  useEffect(() => {
    setTypeParams(typeProduct);
  });
  const formatCurrency = (amount) => {
    amount = parseFloat(amount);
    return amount.toLocaleString("vi-VN");
  };

  const hendleAddNow = (id) => {
    const existingProductIndex = yourData.findIndex((item) => item.id === id);
    if (existingProductIndex !== -1) {
      toast.warn("Sản phẩm đã tồn tài trong giỏ hàng");
    } else {
      updateData([
        ...yourData,
        {
          id,
          quantity: 1,
        },
      ]);
      toast.success("Thêm sản phẩm thành công");
    }
  };

  const hendleQuickView = (id) => {
    getIdProduct.current = id;
    setQuickView((pre) => !pre);
  };
  return (
    <>
      <div className={clsx(styles.containerItem)}>
        {dataProduct && dataProduct.length > 0 ? (
          dataProduct.map((item) => (
            <div key={item.id} className={clsx(styles.productItem)}>
              <Link
                className={clsx(styles.wrapITem)}
                to={`/ProductDetail/${item.id}/${item.trademark}`}
              >
                <picture>
                  <img
                    className={clsx(styles.productItem__img)}
                    src={item.avatar}
                    alt={item.name}
                  />
                </picture>
                <p className={clsx(styles.productItem__text)}>{item.name}</p>
                <div className={clsx(styles.productItem__price)}>
                  <span className={clsx(styles.productItem__price__newPrice)}>
                    {formatCurrency(item.salePrice)}
                    <FontAwesomeIcon icon={faDongSign} />
                  </span>
                  <span className={clsx(styles.productItem__price__oldPrice)}>
                    {formatCurrency(item.price)}
                    <FontAwesomeIcon icon={faDongSign} />
                  </span>
                </div>
              </Link>
              <div className={clsx(styles.productItem__boxmodal)}>
                <button
                  className={clsx(styles.productItem__boxmodal__quickView)}
                  onClick={() => hendleQuickView(item.id)}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                  <span>Xem nhanh</span>
                </button>
                <button
                  onClick={() => {
                    hendleAddNow(item.id);
                  }}
                  className={clsx(styles.productItem__boxmodal__addNow)}
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                  <span>Thêm ngay</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={clsx(styles.emptyProduct)}>
            <img
              src="https://i.ibb.co/C7CmWTT/empty-cart.png"
              alt="emptyProduct"
            />
            <p>
              Sản phẩm này hiện tại bên cửa hàng đang tạm hết. Cửa hàng sẽ cập
              nhật sản phẩm sau, xin cảm ơn quý khách hàng.
            </p>
          </div>
        )}
      </div>
      {quickView ? (
        <QuickProducts
          id={getIdProduct.current}
          hendleQuickViewProduct={hendleQuickView}
        />
      ) : (
        ""
      )}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default ProudctItem;
