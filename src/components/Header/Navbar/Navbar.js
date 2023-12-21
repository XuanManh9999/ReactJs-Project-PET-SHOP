import { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
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
import Search from "../../Content/Search/Search";
import { checkToken } from "../../../services/hendleLogin";
import { useData } from "../../Common/DataContext";
function Navbar() {
    const [search, setSearch] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { yourData, updateData } = useData();
    const [user, setUser] = useState({
        title1: "Đăng nhập",
        title2: "Đăng ký",
        link1: "/Login",
        link2: "/Register",
    });

    useEffect(() => {
        const handleLocalStorageChange = () => {
            const storedData = JSON.parse(localStorage.getItem("cart")) || [];
            updateData(storedData);
        };

        window.addEventListener("storage", handleLocalStorageChange);

        return () => {
            window.removeEventListener("storage", handleLocalStorageChange);
        };
    }, [updateData]);

    useEffect(() => {
        let token = Cookies.get("token_login");
        if (token) {
            let hendleCheck = async () => {
                let result = await checkToken(token);
                if (result && result.status === 200 && result.data.length > 0) {
                    setUser({
                        title1:
                            result.data[0].firstName.split(" ")[1] +
                            " " +
                            result.data[0].lastName,
                        title2: "Đăng xuất",
                        link1: "",
                        link2: "/Login",
                    });
                }
            };
            hendleCheck();
        }
    }, []);
    let hendle_click_search = () => {
        setSearch((pre) => {
            return setSearch(!pre);
        });
    };

    const hendleUser = (event) => {
        if (event.target.innerText === "Đăng xuất") {
            Cookies.remove("token_login");
        }
    };
    const hendleManyProducts = () => {
        return yourData.reduce((acc, item) => (acc += item.quantity), 0);
    };
    return (
        <>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.header_top)}>
                    <div
                        onClick={() => {
                            hendle_click_search();
                        }}
                        className={clsx(styles.header_top_icon_search)}
                    >
                        <i>
                            <FaSearch
                                className={clsx(styles.icon_header_top)}
                            />
                        </i>
                    </div>
                    {/* Search */}
                    {search === true ? (
                        <Search close_search={hendle_click_search} />
                    ) : (
                        ""
                    )}
                    <div className={clsx(styles.container_login_logout)}>
                        <i>
                            <FaUser className={clsx(styles.icon_header_top)} />
                            <FaChevronDown
                                className={clsx(styles.sub_icon_header_top)}
                            />
                        </i>
                        <ul className={clsx(styles.hendle_login_logout)}>
                            <li>
                                <Link to={user.link1}>{user.title1}</Link>
                            </li>

                            <li>
                                <Link
                                    onClick={(event) => {
                                        hendleUser(event);
                                    }}
                                    to={user.link2}
                                >
                                    {user.title2}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        to={""}
                        className={clsx(styles.cart)}
                    >
                        <i>
                            <FaCartPlus
                                className={clsx(styles.icon_header_top)}
                            />
                        </i>
                        <div className={clsx(styles.main_carts)}>
                            {isHovered ? <Cart /> : ""}
                        </div>
                        <div className={clsx(styles.manyProductsCart)}>
                            <span>{hendleManyProducts()}</span>
                        </div>
                    </Link>
                </div>
                <div className={clsx(styles.header_main)}>
                    <ul className={clsx(styles.nav_list_items)}>
                        <li className={clsx(styles.nav_item)}>
                            <Link to={"/"}>Trang chủ</Link>
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
                                    <Link to={"/MoreProduct"}>
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
                            <Link to={"/Price"}>Bảng giá</Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Link to={"/"}>
                                <img
                                    className={clsx(styles.logo)}
                                    src="https://i.ibb.co/3pCnKn8/logo-2.png"
                                    alt="logo"
                                />
                            </Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Link to={"/Blog"}>Tin thú cưng</Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <i className={clsx(styles.icon_nav_body)}>
                                <FaPaw />
                            </i>
                            <Link to={"/Questions"}>Hỏi đáp</Link>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <i className={clsx(styles.icon_nav_body)}>
                                <FaPaw />
                            </i>
                            <Link to={"/Contact"}>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
