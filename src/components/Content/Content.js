import clsx from "clsx";
import styles from "./Content.module.scss";

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
            </div>
        </main>
    );
}

export default Content;
