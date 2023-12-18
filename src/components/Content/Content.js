import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Content.module.scss";
import Product from "./Product/Product";

import Service from "./Servicess/Service";
import ProductList from "./Product/Product-List";
import Accessoire from "./Accessoire/Accessoire";
import News from "./News/News";
import Welcome from "./Welcome/Welcome";
import Slide from "./Slide/Slide";
import Carousel from "./Carousel/Carousel";

import { getDataProducts } from "../../services/hendleProducts";

function Content() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Hàm gọi API khi component được mount
        const fetchData = async () => {
            try {
                const response = await getDataProducts();
                setData(response.data);
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
                <ProductList />
                <Service />
                <Accessoire />
                <News />
            </div>
        </main>
    );
}

export default Content;
