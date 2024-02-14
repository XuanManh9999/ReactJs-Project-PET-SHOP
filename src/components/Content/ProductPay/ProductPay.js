import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";

import styles from "./ProductPay.module.scss";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useData } from "../../Common/DataContext";

import { getDataCardProducts } from "../../../services/client/hendleProducts";
function ProductPay() {
  const [data, setData] = useState([]);
  const { updateData, yourData } = useData();

  useEffect(() => {
    const getIds = (dataArray) => {
      return dataArray.map((item) => item.id);
    };
    if (yourData.length > 0) {
      const fetchData = async () => {
        try {
          const dl = await getDataCardProducts(getIds(yourData));
          setData(dl.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [yourData]);
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const hendleQuantityProduct = (id) => {
    const hendle = yourData.find((item) => {
      return +item.id === id ? item.quantity : 0;
    });
    return hendle;
  };
  const hendleOnchaneEventProduct = (id, newQuantity) => {
    const updatedCartItems = yourData.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateData(updatedCartItems);
    updateData(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleRemoveProduct = (id) => {
    const updatedCartItems = yourData.filter((item) => item.id !== id);
    if (updatedCartItems.length === 0) {
      setData([]);
    } else {
      updateData(updatedCartItems);
    }
    updateData(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };
  const calculateTotalPayment = () => {
    let total = 0;
    data.forEach((item) => {
      yourData.forEach((element) => {
        if (item.id === element.id) {
          total += item.salePrice * element.quantity;
        }
      });
    });
    return total;
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
          {data && data.length > 0 ? (
            data.map((item, index) => {
              const quantity = hendleQuantityProduct(item.id)?.quantity || 0;
              const totalPrice = item.salePrice * quantity; // Giá trị mới
              return (
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
                        {formatCurrency(item.salePrice)}
                      </span>
                    </span>
                  </td>
                  <td>
                    <div className={clsx(styles["number-control"])}>
                      <input
                        type="number"
                        name="number"
                        min="1"
                        value={hendleQuantityProduct(item.id)?.quantity || "1"}
                        onChange={(e) => {
                          hendleOnchaneEventProduct(
                            item.id,
                            parseInt(e.target.value, 10)
                          );
                        }}
                        className={clsx(styles["number-quantity"])}
                      />
                    </div>
                  </td>
                  <td>
                    <span className={clsx(styles["cart-price"])}>
                      <span className={clsx(styles["price"])}>
                        {formatCurrency(totalPrice)}
                      </span>
                    </span>
                  </td>
                  <td>
                    <i
                      onClick={() => {
                        handleRemoveProduct(item.id);
                      }}
                      className={clsx(styles["cart-icon"])}
                    >
                      <FaTrash />
                    </i>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className={clsx(styles.emptyData)}>
              <td colSpan={6}> Không có sản phẩm nào trong giỏ hàng</td>
            </tr>
          )}
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
            Tổng tiền thanh toán:{" "}
            <span>{formatCurrency(calculateTotalPayment())}</span>
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
