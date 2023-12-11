import clsx from "clsx";
import styles from "./Header.module.scss";

import Navbar from "./Navbar/Navbar";
function Header({ urlImageBg = "" }) {
    let urlBg = "images/bgheader.png";
    if (urlImageBg === "") {
        urlImageBg = urlBg;
    }
    return (
        <header
            style={{
                backgroundImage: `url(${urlImageBg})`,
            }}
            className={clsx(styles.header)}
        >
            <Navbar />
        </header>
    );
}

export default Header;
