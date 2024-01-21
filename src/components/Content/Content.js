import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Content.module.scss";
import Product from "./Product/Product";

import Service from "./Servicess/Service";
import Accessoire from "./Accessoire/Accessoire";
import News from "./News/News";
import Welcome from "./Welcome/Welcome";
import Slide from "./Slide/Slide";
import Carousel from "./Carousel/Carousel";

import {
  getDataProducts,
  getProductsByType,
} from "../../services/hendleProducts";

function Content() {
  const [data, setData] = useState([]);
  const [productByType, setProductByType] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataProducts();
        setData(response.data);
        const productsByTypeResponse = await getProductsByType("accessories");
        setProductByType(productsByTypeResponse.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className={clsx(styles.main_content)}>
      <div className={clsx(styles.container_main_content)}>
        <Welcome />
        <Slide data={data} />
        <Carousel />
        <Product />
        <Service />
        {productByType && productByType.length > 0 ? (
          <Accessoire data={productByType} />
        ) : (
          ""
        )}
        <News />
      </div>
    </main>
  );
}

export default Content;
