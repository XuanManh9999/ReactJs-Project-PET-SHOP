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

function Content() {
    return (
        <main className={clsx(styles.main_content)}>
            <div className={clsx(styles.container_main_content)}>
                <Welcome />
                <Slide />
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
