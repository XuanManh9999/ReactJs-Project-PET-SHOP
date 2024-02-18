import styles from "./MoreProduct.module.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useData } from "../../Common/DataContext";

function MoreProduct() {
  const [amount, setAmount] = useState(10000000);
  const [databackup, setDatabackup] = useState([]);
  const { dataProduct, setDataProduct } = useData();
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
                />
                <div className={styles.all_products__sidebar_icon_search}>
                  <i>
                    <FaSearch />
                  </i>
                </div>
              </div>
              <ul className={styles.all_products__sidebar_trademark}>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name="Doca"
                    id="Doca"
                  />
                  <label
                    for="Doca"
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    Doca
                  </label>
                </li>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name=""
                    id="FiBs"
                  />
                  <label
                    for="FiBs"
                    to={""}
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    FiBs
                  </label>
                </li>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name=""
                    id="Minino"
                  />
                  <label
                    for="Minino"
                    to={""}
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    Minino
                  </label>
                </li>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name=""
                    id="Nutrience"
                  />
                  <label
                    for="Nutrience"
                    to={""}
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    Nutrience
                  </label>
                </li>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name=""
                    id="Pedigree"
                  />
                  <label
                    for="Pedigree"
                    to={""}
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    Pedigree
                  </label>
                </li>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name=""
                    id="Royal Canin"
                  />
                  <label
                    for="Royal Canin"
                    to={""}
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    Royal Canin
                  </label>
                </li>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name=""
                    id="Smartheart"
                  />
                  <label
                    for="Smartheart"
                    to={""}
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    Smartheart
                  </label>
                </li>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name=""
                    id="Tropiclean"
                  />
                  <label
                    for="Tropiclean"
                    to={""}
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    Tropiclean
                  </label>
                </li>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name="Whiskat"
                    id="Whiskat"
                  />
                  <label
                    for="Whiskat"
                    to={""}
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    Whiskat
                  </label>
                </li>
                <li className={styles.all_products__sidebar_trademark_item}>
                  <input
                    className={
                      styles.all_products__sidebar_trademark_item_input
                    }
                    type="checkbox"
                    name=""
                    id="Zenith"
                  />
                  <label
                    for="Zenith"
                    to={""}
                    className={styles.all_products__sidebar_trademark_link}
                  >
                    Zenith
                  </label>
                </li>
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
