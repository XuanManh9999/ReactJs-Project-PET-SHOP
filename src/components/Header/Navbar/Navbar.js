import clsx from "clsx";
import { Link } from "react-router-dom";
import {
    FaPaw,
    FaSearch,
    FaUser,
    FaCartPlus,
    FaChevronDown,
} from "react-icons/fa";

import styles from "./Navbar.module.scss";

function Navbar() {
    return (
        <>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.header_top)}>
                    <Link to={""}>
                        <i>
                            <FaSearch
                                className={clsx(styles.icon_header_top)}
                            />
                        </i>
                    </Link>
                    <Link to={""}>
                        <i>
                            <FaUser className={clsx(styles.icon_header_top)} />
                            <FaChevronDown
                                className={clsx(styles.sub_icon_header_top)}
                            />
                        </i>
                    </Link>
                    <Link to={""}>
                        <i>
                            <FaCartPlus
                                className={clsx(styles.icon_header_top)}
                            />
                        </i>
                    </Link>
                </div>
                <div className={clsx(styles.header_main)}>
                    <ul className={clsx(styles.nav_list_items)}>
                        <li className={clsx(styles.nav_item)}>
                            <Link to={""}>Trang chủ</Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <i className={clsx(styles.icon_nav_body)}>
                                <FaPaw />
                            </i>
                            <Link to={""}>Sản phẩm</Link>
                            <FaChevronDown
                                className={clsx(styles.icon_nav_body)}
                            />
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <i className={clsx(styles.icon_nav_body)}>
                                <FaPaw />
                            </i>
                            <Link to={""}>Bảng giá</Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Link to={""}>
                                <img className={clsx(styles.logo)} src="images/logo (2).png" alt="logo" />
                            </Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Link to={""}>Tin thú cưng</Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <i className={clsx(styles.icon_nav_body)}>
                                <FaPaw />
                            </i>
                            <Link to={""}>Hỏi đáp</Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <i className={clsx(styles.icon_nav_body)}>
                                <FaPaw />
                            </i>
                            <Link to={""}>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
