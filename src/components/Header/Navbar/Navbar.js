import clsx from "clsx";
import styles from "./Navbar.module.scss";
import { FaHome, FaHouseUser } from "react-icons/fa";
function Navbar() {
    return (
        <navigator>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.header_top)}>
                    <i>
                        <FaHome className={clsx(styles.icon)} />
                    </i>
                    <i>
                        <FaHome className={clsx(styles.icon)} />
                    </i>
                    <i>
                        <FaHouseUser className={clsx(styles.icon)} />
                    </i>
                </div>
                <div className={clsx(styles.header_main)}>
                    <ul className={clsx(styles.nav_list_items)}>
                        <li className={clsx(styles.nav_item)}>Trang chủ</li>
                        <li className={clsx(styles.nav_item)}>Sản phẩm</li>
                        <li className={clsx(styles.nav_item)}>Bảng giá</li>
                        <li className={clsx(styles.nav_item)}>Logo</li>
                        <li className={clsx(styles.nav_item)}>Tin thú cưng</li>
                        <li className={clsx(styles.nav_item)}>hỏi đáp</li>
                        <li className={clsx(styles.nav_item)}>Liên hệ</li>
                    </ul>
                </div>
            </div>
        </navigator>
    );
}

export default Navbar;
