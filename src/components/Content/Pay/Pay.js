import styles from "./Pay.module.scss";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaTruck,
  FaMoneyBill,
  FaBuilding,
  FaAngleRight,
  FaAngleDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  fetchCity,
  getDataCardProducts,
  fetchProvince,
  fetchWards,
  hendleDiscountProducts,
} from "../../../services/hendleProducts";
function Pay() {
  const [showBankImage, setShowBankImage] = useState(false);
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [dataCity, setDataCity] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [wards, setWards] = useState([]);
  const [data, setData] = useState([]);
  const [discount, setDiscount] = useState("");
  const [reduceAmount, setReduceAmount] = useState(0);
  const [state, setState] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    provice: "",
    ward: "",
    note: "",
  });

  const hendleOnchangeInput = (event) => {
    const { name, value } = event.target;
    setState((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  useEffect(() => {
    const getIds = (dataArray) => {
      return dataArray.map((item) => item.id);
    };
    if (cartItems.length > 0) {
      const fetchData = async () => {
        try {
          const dl = await getDataCardProducts(getIds(cartItems));
          setData(dl.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [cartItems]);

  // call provide
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCity();
        setDataCity(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const hendleGetManyProduct = (id) => {
    const { quantity } = cartItems.find((item) => item.id === id);
    return quantity;
  };
  const handleToggleBankImage = () => {
    setShowBankImage(!showBankImage);
  };

  const getManyTotalProducts = () => {
    return cartItems.reduce((bag, total) => (bag += total.quantity), 0);
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const hendleOnchangeProvince = (event) => {
    const fetchData = async () => {
      try {
        const getCode = event.target.value;
        const response = await fetchProvince(getCode);

        setProvinces(response.districts);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  };

  const hendleOnchangeProvice = (event) => {
    const fetchData = async () => {
      try {
        const getCode = event.target.value;
        const response = await fetchWards(getCode);
        setWards(response.wards);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  };
  const hendleApplyDiscount = async () => {
    if (discount && discount !== "") {
      const filteredArray = cartItems.map((item) => item.id);
      try {
        const response = await hendleDiscountProducts(discount, filteredArray);
        if (response && response?.reduceAmount !== 0) {
          const { reduceAmount } = response;
          setReduceAmount(reduceAmount);
          setDiscount("");
          toast.success("Áp dụng mã giảm giá thành công.");
        } else if (response && response?.reduceAmount === -1) {
          toast.warning(
            "Có một số sản phẩm không không thể áp dụng mã giảm giá này."
          );
        } else {
          toast.warning(
            "Mã giảm giá đã hết hạn. Vui lòng nhập mã giảm giá khác nếu có."
          );
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    } else {
      toast.warning("Mã giám giá không được rỗng");
    }
  };

  // tính tổng tiền
  const hendleTotalProducts = () => {
    return data.reduce((bag, total) => {
      return (bag += total.salePrice * hendleGetManyProduct(total.id));
    }, 0);
  };
  return (
    <>
      <section>
        <div className={styles["pay"]}>
          <div className={styles["container"]}>
            {/* form_container */}
            <div className={styles["send_products"]}>
              <h1 className={styles["title"]}>PET SHOP</h1>
              <div className={styles["send_products__main"]}>
                {/* form_container */}
                <div className={styles.form_container}>
                  <h2 className={styles.title}>Thông tin nhận hàng</h2>
                  <form id="form_4" action="#!" className={styles.form__4}>
                    <div className={styles.form_group}>
                      <input
                        type="text"
                        className={styles.email}
                        placeholder="Email:"
                        name="email"
                        value={state.email}
                        onChange={hendleOnchangeInput}
                      />
                      <span className={styles.form_message}></span>
                    </div>
                    <div className={styles.form_group}>
                      <input
                        type="text"
                        placeholder="Họ Và tên"
                        className={styles.surname}
                        name="name"
                        value={state.name}
                        onChange={hendleOnchangeInput}
                      />
                      <span className={styles.form_message}></span>
                    </div>
                    <div className={styles.form_group}>
                      <input
                        type="text"
                        placeholder="Số điện thoại"
                        className={styles.phone}
                        name="phone"
                        value={state.phone}
                        onChange={hendleOnchangeInput}
                      />
                      <span className={styles.form_message}></span>
                    </div>
                    <div className={styles.form_group}>
                      <input
                        type="text"
                        placeholder="Số nhà, tên đường..."
                        className={styles.adresss}
                        name="address"
                        value={state.address}
                        onChange={hendleOnchangeInput}
                      />
                      <span className={styles.form_message}></span>
                    </div>
                    <select
                      name="city"
                      id="city"
                      onChange={hendleOnchangeProvince}
                      defaultValue={dataCity.length > 0 ? dataCity[0].code : ""}
                    >
                      {dataCity &&
                        dataCity.length > 0 &&
                        dataCity.map((item, index) => (
                          <option key={index} value={item.code}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    <select
                      name="provice"
                      onChange={hendleOnchangeProvice}
                      id="district"
                      defaultValue={1}
                    >
                      {provinces &&
                        provinces.length > 0 &&
                        provinces.map((item, index) => (
                          <option key={index} value={item.code}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    <select
                      name="ward"
                      defaultValue={1}
                      defaultChecked={1}
                      id="ward"
                    >
                      {wards &&
                        wards.length > 0 &&
                        wards.map((item, index) => (
                          <option key={index} value={item.code}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    <div className={styles.form_group}>
                      <textarea
                        type="text"
                        placeholder="Ghi chú (tùy chọn)"
                        className={styles.pay_note}
                        name="note"
                        value={state.note}
                        onChange={hendleOnchangeInput}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={styles.pay_sub_mid}
                      style={{ display: "none" }}
                    ></button>
                  </form>
                </div>
                {/* form_container */}
                <div className={styles.transport_container}>
                  <h2 className={styles.title}>Vận chuyển</h2>
                  <div
                    className={`${styles.transport_container__item} ${styles.mt_28}`}
                  >
                    <span className={styles.desc}>
                      <i>
                        <FaTruck />
                      </i>
                      <p>Giao hàng tận nơi</p>
                    </span>
                    <span className={styles.price}>40.000₫</span>
                  </div>
                  <h2
                    className={`${styles.title} ${styles.mt_28} ${styles.pt}`}
                  >
                    Thanh toán
                  </h2>
                  <div className={styles.transport_container__item}>
                    <span className={styles.desc}>
                      <i>
                        <FaTruck />
                      </i>
                      <p>Thanh toán khi giao hàng</p>
                    </span>
                    <span className={styles.price}>
                      <i>
                        <FaMoneyBill />
                      </i>
                    </span>
                  </div>
                  <div className={styles.transport_container__item_bank}>
                    <div className={styles.bank_contents}>
                      <span className="">
                        <i>
                          <FaBuilding />
                        </i>
                        <p>Thanh toán trực tiếp</p>
                      </span>
                      <span
                        className={styles.price}
                        onClick={handleToggleBankImage}
                      >
                        {showBankImage ? (
                          <i>
                            <FaAngleDown />
                          </i>
                        ) : (
                          <i>
                            <FaAngleRight />
                          </i>
                        )}
                      </span>
                    </div>
                    <div
                      className={styles.bank_img}
                      style={{
                        display: showBankImage ? "block" : "none",
                      }}
                    >
                      <img src="Images/ngan_hang.jpg" alt="Ảnh ngân hàng" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* form_container */}
            <div className={styles["products_pay"]}>
              <h1 className={styles["title"]}>
                Đơn hàng ({getManyTotalProducts()} sản phẩm)
              </h1>

              <div className={styles["products_pay_list_products"]}>
                {data && data.length > 0
                  ? data.map((item, index) => (
                      <div
                        className={styles["products_pay_list_item"]}
                        key={index}
                      >
                        <div
                          className={styles["products_pay_list_item--img_pay"]}
                        >
                          <img src={item.avatar} />
                          <span>{hendleGetManyProduct(item.id)}</span>
                        </div>
                        <p className={styles["products_pay_list_item--desc"]}>
                          {item.name}
                        </p>
                        <span className={styles["price"]}>
                          {formatCurrency(
                            item.salePrice * hendleGetManyProduct(item.id)
                          )}
                        </span>
                      </div>
                    ))
                  : "Không có sản phẩm trong giỏ hàng"}
              </div>

              <div className={styles["products_pay_list_products"]}></div>
              {/* form_container */}
              <div className={styles.products_pay_list_products_discount}>
                <div className={styles.discount_pay_products}>
                  <input
                    type="text"
                    value={discount}
                    onChange={(event) => setDiscount(event.target.value)}
                    placeholder="Nhập mã giảm giá"
                  />
                  <button onClick={hendleApplyDiscount} className={styles.btn}>
                    Áp dụng
                  </button>
                </div>
                <div className={styles.loadding_price}>
                  <div className={styles.lds_ring}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div className={styles.products_pay_list_products_content}>
                <div className={styles.products_pay_list_products_item}>
                  <span>Tạm tính</span>
                  <span className={styles.money_products}>
                    {formatCurrency(hendleTotalProducts())}
                  </span>
                </div>
                <div
                  className={`${styles.products_pay_list_products_item} ${styles.item_discont} ${styles.hidden}`}
                >
                  {reduceAmount && reduceAmount !== 0 ? (
                    <>
                      <span>Giảm giá</span>

                      <span className={styles.money_products}>
                        {formatCurrency(reduceAmount)}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className={styles.products_pay_list_products_item}>
                  <span>Phí vận chuyển</span>
                  <span className={styles.shipping_fee}>30.000₫</span>
                </div>
                <div className={styles.products_pay_list_products_item}>
                  <span>Tổng cộng</span>
                  <span className={styles.shipping_sum_money}>
                    {formatCurrency(
                      hendleTotalProducts() + 30000 - reduceAmount > 0
                        ? hendleTotalProducts() + 30000 - reduceAmount
                        : 0
                    )}
                  </span>
                </div>
                <div className={styles.products_pay_list_products_item}>
                  <Link to={"/"} className={styles.back_home_pay}>
                    <i className="fa-solid fa-chevron-left"></i>
                    Quay về trang chủ
                  </Link>
                  <button className={styles.btn_order_products} type="submit">
                    Đặt hàng
                  </button>
                </div>
                <div className={styles.loadding_price}>
                  <div className={styles.lds_ring}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div
                  className={`${styles.pay_Notification_false} ${styles.hidden}`}
                >
                  <p className={styles.title}>Đặt hàng không thành công</p>
                </div>
                <div
                  className={`${styles.pay_Notification_true} ${styles.hidden}`}
                >
                  <p className={styles.title}>Đặt hàng thành công</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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

export default Pay;
