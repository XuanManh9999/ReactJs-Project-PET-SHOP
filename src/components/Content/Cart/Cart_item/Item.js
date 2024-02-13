import clsx from "clsx";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Item.module.scss";
import {
  faDongSign,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { getDataCardProducts } from "../../../../services/hendleProducts";
import { useData } from "../../../Common/DataContext";
import { Link } from "react-router-dom";

function Item() {
  const [productDetails, setProductDetails] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const { updateData, yourData } = useData();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (yourData.length > 0) {
          const response = await getDataCardProducts(getIds(yourData));
          if (response && response.data.length > 0) {
            setProductDetails(updateArrayWithQuantity(response.data, yourData));

            // Tính tổng giá trị khi có dữ liệu mới
            const total = response.data.reduce(
              (acc, item) => acc + parseFloat(item.salePrice) * item.quantity,
              0
            );
            setTotalPrice(total);
          } else {
            setProductDetails([]);
          }
        } else {
          setProductDetails([]);
          setTotalPrice(0);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [yourData]);
  // get Ids
  const getIds = (dataArray) => {
    return dataArray.map((item) => item.id);
  };
  const updateArrayWithQuantity = (array1, array2) => {
    // Tạo một bản sao của mảng thứ nhất để không thay đổi mảng gốc
    const newArray = [...array1];

    // Lặp qua mảng thứ hai để kiểm tra và cập nhật mảng thứ nhất
    array2.forEach((item2) => {
      const existingItemIndex = newArray.findIndex(
        (item1) => item1.id === item2.id
      );

      if (existingItemIndex !== -1) {
        // Nếu tìm thấy trùng khớp, thêm trường "quantity"
        newArray[existingItemIndex].quantity = item2.quantity;
      }
    });

    return newArray;
  };
  const hendleDeleteProduct = (id) => {
    if (id && yourData.length > 0) {
      const local = yourData;
      const newArr = local.filter((item) => item.id !== id);
      updateData(newArr);
    } else {
      setProductDetails([]);
    }
  };
  // Hàm định dạng số thành giá trị tiền tệ
  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN");
  };
  const hendleMinusProduct = (id) => {
    const newArr = [...yourData];
    if (newArr && newArr.length > 0) {
      newArr.map((item) => {
        return [
          { ...item },
          item.id === id && item.quantity > 1
            ? (item.quantity -= 1)
            : item.quantity,
        ];
      });
    }
    updateData(newArr);
  };
  const hendlePlusProduct = (id) => {
    const newArr = [...yourData];
    if (newArr && newArr.length > 0) {
      newArr.map((item) => {
        return [
          { ...item },
          item.id === id ? (item.quantity += 1) : item.quantity,
        ];
      });
    }
    updateData(newArr);
  };
  return (
    <>
      {productDetails && productDetails.length > 0 ? (
        <>
          {productDetails.map((item, index) => {
            return (
              <div key={index} className={clsx(styles.cart_item)}>
                <picture className={clsx(styles.img)}>
                  <img src={item.avatar} alt={item.name} />
                </picture>
                <div className={clsx(styles.content)}>
                  <p className={clsx(styles.title)}>{item.name}</p>
                  <span className={clsx(styles.price)}>
                    {formatCurrency(item.salePrice * item.quantity)}
                    <FontAwesomeIcon icon={faDongSign} />
                  </span>
                  <div className={clsx(styles.numbers_products)}>
                    <input
                      value={item.quantity}
                      className={clsx(styles.many)}
                    />
                    <span
                      onClick={() => {
                        hendlePlusProduct(item.id);
                      }}
                      className={clsx(styles.plus)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                    <span
                      onClick={() => {
                        hendleMinusProduct(item.id);
                      }}
                      className={clsx(styles.minus)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </span>
                  </div>
                </div>
                <div className={clsx(styles.footer)}>
                  <FontAwesomeIcon
                    onClick={() => {
                      hendleDeleteProduct(item.id);
                    }}
                    icon={faTrash}
                  />
                </div>
              </div>
            );
          })}
          ;{/* Phần pay dữ nguyên */}
          <div className={clsx(styles.pay)}>
            <div className={clsx(styles.header_pay)}>
              <p>Tổng tiền thanh toán: </p>
              <span className={clsx(styles.price)}>
                {formatCurrency(totalPrice)}
                <FontAwesomeIcon icon={faDongSign} />
              </span>
            </div>
            <div className={clsx(styles.pay_money)}>
              <Link to={"/pay"} className={clsx(styles.btn_pay)}>
                Thanh toán
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className={clsx(styles.cart_empty)}>
          <picture className={clsx(styles.img_empty)}>
            <img
              src="https://i.ibb.co/C7CmWTT/empty-cart.png"
              alt="cart_empty"
            />
          </picture>
          <p>Không có sản phẩm nào trong giỏ hàng.</p>
        </div>
      )}
    </>
  );
}

export default Item;
