import clsx from "clsx";
import styles from "./Header.module.scss";

import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

const breadcrumb = {
  Price: "Bảng giá",
  Blog: "Tin thú cưng",
  Questions: "Hỏi đáp",
  Contact: "Liên hệ",
  dog: "Thức ăn cho chó",
  cat: "Thức ăn cho mèo",
  bird: "Thức ăn cho chim",
  hamster: "Thức ăn cho Hamster",
  accessories: "Phụ kiện",
  Login: "Đăng nhập",
  Register: "Đăng ký",
  ForgotPass: "Quên mật khẩu",
};

function Header({ urlImageBg = "", imageHeight = "" }) {
  let urlBg = "https://i.ibb.co/QbsN2bk/bgheader.png";
  if (urlImageBg === "") {
    urlImageBg = urlBg;
  }
  const url = window.location.pathname;
  const hendle = url.split("/").pop();
  return (
    <header
      style={{
        backgroundImage: `url(${urlImageBg})`,
        height: imageHeight,
      }}
      className={clsx(styles.header)}
    >
      <Navbar />
      {hendle !== "" ? (
        <div className={clsx(styles.breadcrumb)}>
          <Link className={clsx(styles.local)} to={"/"}>
            Trang chủ
          </Link>
          <span>/</span>
          <Link to={""} className={clsx(styles.change)}>
            {breadcrumb[hendle]}
          </Link>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
