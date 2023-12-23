import clsx from "clsx";
import styles from "./Header.module.scss";

import Navbar from "./Navbar/Navbar";
function Header({ urlImageBg = "", imageHeight = "" }) {
    let urlBg = "https://i.ibb.co/QbsN2bk/bgheader.png";
    if (urlImageBg === "") {
        urlImageBg = urlBg;
    }
    return (
        <header
            style={{
                backgroundImage: `url(${urlImageBg})`,
                height: imageHeight,
            }}
            className={clsx(styles.header)}
        >
            <Navbar />
        </header>
    );
}

export default Header;
