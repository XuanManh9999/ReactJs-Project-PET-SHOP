import clsx from "clsx";
import styles from "./Header.module.scss";

import Navbar from "./Navbar/Navbar";
function Header() {
    return (
        <header style={{
            backgroundImage: `url('images/bgheader.png')`
        }} className={clsx(styles.header)}>
            <Navbar />
        </header>
    );
}

export default Header;
