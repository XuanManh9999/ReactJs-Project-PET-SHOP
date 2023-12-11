import clsx from "clsx";
import { Link } from "react-router-dom";
import {
    FaPaw,
    FaSearch,
    FaUser,
    FaCartPlus,
    FaChevronDown,
    FaChevronRight,
} from "react-icons/fa";

import styles from "./Navbar.module.scss";
import Cart from "../../Content/Cart/Cart";

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
                    <div className={clsx(styles.container_login_logout)}>
                        <i>
                            <FaUser className={clsx(styles.icon_header_top)} />
                            <FaChevronDown
                                className={clsx(styles.sub_icon_header_top)}
                            />
                        </i>
                        <ul className={clsx(styles.hendle_login_logout)}>
                            <li>
                                <Link to={""}>Đăng nhập</Link>
                            </li>

                            <li>
                                <Link to={""}>Đăng Ký</Link>
                            </li>
                        </ul>
                    </div>

                    <Link to={""} className={clsx(styles.cart)}>
                        <i>
                            <FaCartPlus
                                className={clsx(styles.icon_header_top)}
                            />
                        </i>
                        <div className={clsx(styles.main_carts)}>
                            <Cart />
                        </div>
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
                            <Link to={"/product/1"}>Sản phẩm</Link>
                            <FaChevronDown
                                className={clsx(styles.icon_nav_body)}
                            />
                            <ul className={clsx(styles.sub_nav_lv1)}>
                                <li>
                                    <Link to={"/product/1"}>
                                        Thức ăn cho chó
                                    </Link>
                                    <i>
                                        <FaChevronRight />
                                    </i>
                                    <ul className={clsx(styles.sub_nav_lv2)}>
                                        <li>
                                            <Link to={"/product/1"}>
                                                Thức ăn khô
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/product/1"}>
                                                Thức ăn ướt
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/product/1"}>
                                                Thức ăn dặm
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/product/1"}>
                                                Thức ăn tươi sống
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to={"/product/1"}>
                                        Thức ăn cho mèo
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/product/1"}>
                                        Thức ăn cho Hamster
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/product/1"}>
                                        Thức ăn cho chim
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/product/1"}>Phụ kiện</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <i className={clsx(styles.icon_nav_body)}>
                                <FaPaw />
                            </i>
                            <Link to={""}>Bảng giá</Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Link to={""}>
                                <img
                                    className={clsx(styles.logo)}
                                    src="images/logo (2).png"
                                    alt="logo"
                                />
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
