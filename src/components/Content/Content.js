import clsx from "clsx";
import styles from "./Content.module.scss";

import Welcome from "./Welcome/Welcome";

function Content() {
    return (
        <main className={clsx(styles.main_content)}>
            <div className={clsx(styles.container_main_content)}>
                <Welcome />
            </div>
        </main>
    );
}

export default Content;
