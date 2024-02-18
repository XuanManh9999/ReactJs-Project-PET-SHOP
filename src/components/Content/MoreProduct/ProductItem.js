import { useEffect } from "react";
import styles from "./ProductItem.module.scss";
import clsx from "clsx";
// import { animateScroll as scroll } from "react-scroll";
import {
  faDongSign,
  faMagnifyingGlassPlus,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useData } from "../../Common/DataContext";
function ProudctItem() {
  const { typeProduct } = useParams();
  const { setTypeParams, dataProduct } = useData();
  useEffect(() => {
    setTypeParams(typeProduct);
  });
  const formatCurrency = (amount) => {
    amount = parseFloat(amount);
    return amount.toLocaleString("vi-VN");
  };

  return (
    <div className={clsx(styles.containerItem)}>
      {dataProduct &&
        dataProduct.length > 0 &&
        dataProduct.map((item) => (
          <div key={item.id} className={clsx(styles.productItem)}>
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
            <div className={clsx(styles.productItem__boxmodal)}>
              <button className={clsx(styles.productItem__boxmodal__quickView)}>
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                <span>Xem nhanh</span>
              </button>
              <button className={clsx(styles.productItem__boxmodal__addNow)}>
                <FontAwesomeIcon icon={faCartPlus} />
                <span>Thêm ngay</span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProudctItem;
