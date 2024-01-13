import { useEffect, useState } from "react";
import styles from "./ProductPay.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import { getDataCardProducts } from "../../../services/hendleProducts";
function ProductPay() {
  const [data, setData] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState();
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    const getIds = (dataArray) => {
      return dataArray.map((item) => item.id);
    };

    const fetchData = async () => {
      try {
        const dl = await getDataCardProducts(getIds(cartItems));
        setData(dl.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cartItems]);
  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN");
  };
  const hendleQuantityProduct = (id) => {
        console.log("Xuan Manh Check id", id);
      const hendle = cartItems.find((item) =>
      {
        return +(item.id) === id ? item.quantity : 1 
      }
    );
    return hendle;
  };
  return (
    <section>
      <h3 className={clsx(styles["heading"])}>Giỏ hàng của bạn</h3>
      <table>
        <thead>
          <tr>
            <th>Ảnh sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className={clsx(styles["product-images"])}>
                    <img
                      className={clsx(styles["product-img"])}
                      src={item.avatar}
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <h3 className={clsx(styles["product-name"])}>
                    <Link to="">{item.name}</Link>
                  </h3>
                </td>
                <td>
                  <span className={clsx(styles["cart-prices"])}>
                    <span className={clsx(styles["prices"])}>
                      {formatCurrency(item.price)}₫
                    </span>
                  </span>
                </td>
                <td>
                  <div className={clsx(styles["number-control"])}>
                    <input
                      type="number"
                      name="number"
                      min="1"
                      value={hendleQuantityProduct(item.id).quantity}
                      className={clsx(styles["number-quantity"])}
                    />
                  </div>
                </td>
                <td>
                  <span className={clsx(styles["cart-price"])}>
                    <span className={clsx(styles["price"])}>
                      {formatCurrency(230000.0)}₫
                    </span>
                  </span>
                </td>
                <td>
                  <i className={clsx(styles["cart-icon"])}>
                    <FaTrash />
                  </i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className={clsx(styles["product-price"])}>
        <div className={clsx(styles["product-price-left"])}>
          <Link className={styles["btn"]} to={"/"}>
            Tiếp tục mua hàng
          </Link>
        </div>
        <div className={clsx(styles["product-price-right"])}>
          <p className={clsx(styles["desc"])}>
            Tổng tiền thanh toán: <span>276.000₫</span>
          </p>
          <Link className={styles["btn"]} to={"/pay"}>
            Tiến hành thanh toán
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductPay;
