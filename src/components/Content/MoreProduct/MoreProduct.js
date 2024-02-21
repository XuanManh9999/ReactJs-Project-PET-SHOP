import styles from "./MoreProduct.module.scss";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useData } from "../../Common/DataContext";
import {
  getAllDataTrademarkProduct,
  getDataTrademarkByName,
  getProductsByType,
} from "../../../services/client/hendleProducts";
import { animateScroll as scroll } from "react-scroll";
function MoreProduct() {
  const { typeProduct } = useParams();
  const [amount, setAmount] = useState(10000000);
  const { dataProduct, setDataProduct } = useData();
  const [databackup, setDatabackup] = useState([]);
  const [dataTrademark, setDataTrademark] = useState([]);
  const [searchTrademark, setSearchTrademark] = useState("");
  const [backcupTrademark, setBackcupTrademark] = useState([]);
  const [saveTrademark, SetSaveTrademark] = useState([]);

  useEffect(() => {
    const scrollToSmooth = (to, duration) => {
      const start = window.pageYOffset;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    };

    Math.easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    scroll.scrollTo(300, { duration: 100, smooth: "linear" });

    // Kích hoạt hiệu ứng chậm dần
    scrollToSmooth(300, 5); // 1000 là thời gian cuộn
  }, [dataProduct]);

  useEffect(() => {
    const fetchingData = async () => {
      const res = await getAllDataTrademarkProduct();
      setDataTrademark(res?.data || []);
    };
    fetchingData();
  }, []);

  useEffect(() => {
    const fetchingData = async () => {
      if (saveTrademark.length > 0) {
        const newObject = {
          type: typeProduct,
          arrTrademark: saveTrademark,
        };
        const res = await getDataTrademarkByName(JSON.stringify(newObject));
        setDataProduct(res.data);
      } else {
        const res = await getProductsByType(typeProduct);
        setDataProduct(res.data);
      }
    };
    fetchingData();
  }, [saveTrademark, setDataProduct, typeProduct]);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setAmount(newValue);
  };

  const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const hendleChangePrice = () => {
    for (let i = 0; i < databackup?.length; i++) {
      let check = true;
      for (let j = 0; j < dataProduct?.length; j++) {
        if (databackup[i]?.id === dataProduct[j]?.id || null) {
          check = false;
        }
      }
      if (check) {
        dataProduct.push(databackup[i]);
      }
    }
    const newData = dataProduct.filter((product) =>
      product.salePrice <= amount
        ? product.salePrice <= amount
        : databackup.filter((item) => item?.id !== product?.id)
        ? setDatabackup((prev) => [...prev, product])
        : false
    );
    setDataProduct(newData);
  };

  const hendleSearchTrademark = (event) => {
    const value = event.target.value;
    setSearchTrademark(value || "");

    backcupTrademark.forEach((obj1) => {
      if (!dataTrademark.some((obj2) => obj2.id === obj1.id)) {
        dataTrademark.push(obj1);
      }
    });
    const newData = dataTrademark.filter((product) =>
      product.trademark.includes(value)
        ? product.trademark.includes(value)
        : setBackcupTrademark((prev) => [...prev, product])
    );
    setDataTrademark(newData);
  };

  const hendleOnchangeTrademark = (event) => {
    let checkend = event.target.checked;
    let value = event.target.value;
    if (checkend) {
      SetSaveTrademark((prev) => [...prev, value]);
    } else {
      let newTradeMark = saveTrademark.filter(
        (trademark) => trademark !== value
      );
      SetSaveTrademark(newTradeMark);
    }
  };

  return (
    <section>
      <div className={styles["all_products"]}>
        <div className={styles["main-content"]}>
          <div className={styles["all_products_container"]}>
            <div className={styles.all_products__sidebar}>
              <h1 className={styles.title}>Danh mục sản phẩm</h1>
              <ul className={styles["list-items-function"]}>
                <li>
                  <Link
                    to={"/MoreProduct/dog"}
                    className={styles.all_products_animal}
                  >
                    Thức ăn cho chó
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/MoreProduct/cat"}
                    className={styles.all_products_animal}
                  >
                    Thức ăn cho mèo
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/MoreProduct/hamster"}
                    className={styles.all_products_animal}
                  >
                    Thức ăn cho Hamster
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/MoreProduct/bird"}
                    className={styles.all_products_animal}
                  >
                    Thức ăn cho chim
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/MoreProduct/accessories"}
                    className={styles.all_products_animal}
                  >
                    Phụ kiện
                  </Link>
                </li>
              </ul>
              <h1 className={styles.title}>Chọn thương hiệu</h1>
              <div className={styles.all_products__sidebar_input}>
                <input
                  type="text"
                  placeholder="Bạn muốn tìm gì?"
                  className={styles.all_products_find_brand}
                  value={searchTrademark}
                  onChange={hendleSearchTrademark}
                />
                <div className={styles.all_products__sidebar_icon_search}>
                  <i>
                    <FaSearch />
                  </i>
                </div>
              </div>
              <ul className={styles.all_products__sidebar_trademark}>
                {dataTrademark && dataTrademark?.length > 0
                  ? dataTrademark.map((product) => (
                      <li
                        key={product.id}
                        className={styles.all_products__sidebar_trademark_item}
                      >
                        <input
                          className={
                            styles.all_products__sidebar_trademark_item_input
                          }
                          type="checkbox"
                          name={product.trademark}
                          id={product.trademark}
                          value={product.trademark}
                          onChange={hendleOnchangeTrademark}
                        />
                        <label
                          htmlFor={product.trademark}
                          className={
                            styles.all_products__sidebar_trademark_link
                          }
                        >
                          {product.trademark}
                        </label>
                      </li>
                    ))
                  : ""}
              </ul>
              <h1 className={styles.title}>Khoảng giá</h1>
              <div className={styles.all_products__sidebar_price_range_element}>
                <p className={styles.all_products__sidebar_price_range}>
                  <label htmlFor="amount">Giá:</label>
                  <input
                    type="text"
                    id="amount"
                    value={formatCurrency(amount)}
                    style={{
                      border: "0",
                      color: "#f6931f",
                      fontWeight: "bold",
                    }}
                  />
                </p>
                <div className={styles.all_products__sidebar_price_element}>
                  <div id="slider-range-min">
                    <input
                      className={styles.slider}
                      type="range"
                      min="1000"
                      defaultValue={amount}
                      max="10000000"
                      step="1"
                      value={amount}
                      onChange={handleSliderChange}
                    />
                  </div>
                </div>
                <button
                  className={styles.all_products__sidebar_price_range_btn}
                  onClick={hendleChangePrice}
                >
                  Lọc giá
                </button>
                <picture
                  className={
                    styles.all_products__sidebar_price_range_element_img
                  }
                >
                  <img
                    src="https://i.ibb.co/3mPszQ8/p-fix.png"
                    alt="Banner_products_all"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreProduct;
