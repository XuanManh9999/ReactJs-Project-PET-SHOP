import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import ProductList from "./Product-List";
import { getProductsByType } from "../../../services/client/hendleProducts";
const productCategories = [
  "Thức ăn cho Mèo",
  "Thức ăn cho Chó",
  "Thức ăn cho Hamster",
  "Thức ăn cho Chim",
];

const hendleConvert = {
  0: "cat",
  1: "dog",
  2: "hamster",
  3: "bird",
};

function Product() {
  const [selectedItem, setSelectedItem] = useState(0); // Đặt giá trị mặc định là 0
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductsByType(hendleConvert[selectedItem]);
      setData(response.data);
    };
    fetchData();
  }, [selectedItem]);
  const handleItemClick = (index) => {
    if (selectedItem !== index) {
      setSelectedItem(index);
    }
  };
  return (
    <section>
      <div className={styles["product-buy"]}>
        <div className={styles["main-content"]}>
          <div className={styles["intro-product-buy"]}>
            <h1 className={styles.title}>Sản phẩm shop đang bán</h1>
            <picture className={styles["img-hero"]}>
              <img
                src="https://i.ibb.co/Q6v08xN/hero-animal.png"
                alt="Chào mừng bạn đến với Catchy Pet"
              />
            </picture>
          </div>

          <div className={styles["product-buy-products"]}>
            <div className={styles["product-buy-navigation"]}>
              <ul>
                {productCategories.map((category, index) => (
                  <li
                    key={index}
                    className={
                      selectedItem === index ? styles["action-navigation"] : ""
                    }
                    onClick={() => handleItemClick(index)}
                  >
                    <Link
                      className={
                        selectedItem === index
                          ? styles["action-navigation-a"]
                          : ""
                      }
                      to={""}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ProductList data={data} />
    </section>
  );
}

export default Product;
