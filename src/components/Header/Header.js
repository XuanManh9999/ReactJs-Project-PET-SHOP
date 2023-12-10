import clsx from "clsx";
import styles from "./Header.module.scss";

import Navbar from "./Navbar/Navbar";
function Header({ urlImageBg = "" }) {
    let urlBg = "images/bgheader.png";
    if (urlImageBg) {
        urlBg = urlImageBg;
    }
    return (
        <header
            style={{
                backgroundImage: `url(${urlBg})`,
            }}
            className={clsx(styles.header)}
        >
            <Navbar />
        </header>
    );
}

export default Header;
