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
import { useData } from "../../Common/DataContext";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const [search, setSearch] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { getQuantityProducts } = useData();
  const [user, setUser] = useState({
    title1: "Đăng nhập",
    title2: "Đăng ký",
    link1: "/Login",
    link2: "/Register",
  });

  useEffect(() => {
    const getToken = Cookies.get("access_token");
    if (getToken) {
      const { fullName } = jwtDecode(getToken);
      setUser({
        title1: fullName,
        title2: "Đăng xuất",
        link1: "",
        link2: "/Login",
      });
    }
  }, []);
  let hendle_click_search = () => {
    setSearch((pre) => {
      return setSearch(!pre);
    });
  };

  const hendleUser = (event) => {
    if (event.target.innerText === "Đăng xuất") {
      Cookies.remove("refreshToken");
      Cookies.remove("access_token");
      setUser({
        title1: "Đăng nhập",
        title2: "Đăng ký",
        link1: "/Login",
        link2: "/Register",
      });
    }
  };

  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.header_top)}>
        <div
          onClick={() => {
            hendle_click_search();
          }}
          className={clsx(styles.header_top_icon_search)}
        >
          <i>
            <FaSearch className={clsx(styles.icon_header_top)} />
          </i>
        </div>
        {/* Search */}
        {search === true ? <Search close_search={hendle_click_search} /> : ""}
        <div className={clsx(styles.container_login_logout)}>
          <i>
            <FaUser className={clsx(styles.icon_header_top)} />
            <FaChevronDown className={clsx(styles.sub_icon_header_top)} />
          </i>
          <ul className={clsx(styles.hendle_login_logout)}>
            <li>
              <Link to={user.link1}>{user.title1}</Link>
            </li>

            <li>
              <Link onClick={hendleUser} to={user.link2}>
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
            <FaCartPlus className={clsx(styles.icon_header_top)} />
          </i>
          <div className={clsx(styles.main_carts)}>
            {isHovered ? <Cart /> : ""}
          </div>
          <div className={clsx(styles.manyProductsCart)}>
            <span>{getQuantityProducts()}</span>
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
            <Link to={"/MoreProduct/dog"}>Sản phẩm</Link>
            <FaChevronDown className={clsx(styles.icon_nav_body)} />
            <ul className={clsx(styles.sub_nav_lv1)}>
              <li>
                <Link to={"/MoreProduct/dog"}>Thức ăn cho chó</Link>
                <i>
                  <FaChevronRight />
                </i>
                <ul className={clsx(styles.sub_nav_lv2)}>
                  <li>
                    <Link to={"/MoreProduct/dog"}>Thức ăn khô</Link>
                  </li>
                  <li>
                    <Link to={"/MoreProduct/dog"}>Thức ăn ướt</Link>
                  </li>
                  <li>
                    <Link to={"/MoreProduct/dog"}>Thức ăn dặm</Link>
                  </li>
                  <li>
                    <Link to={"/MoreProduct/dog"}>Thức ăn tươi sống</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/MoreProduct/cat"}>Thức ăn cho mèo</Link>
              </li>
              <li>
                <Link to={"/MoreProduct/hamster"}>Thức ăn cho Hamster</Link>
              </li>
              <li>
                <Link to={"/MoreProduct/bird"}>Thức ăn cho chim</Link>
              </li>
              <li>
                <Link to={"/MoreProduct/accessories"}>Phụ kiện</Link>
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
  );
}

export default Navbar;
