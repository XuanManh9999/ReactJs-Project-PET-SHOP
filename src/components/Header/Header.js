import clsx from "clsx";
import styles from "./Header.module.scss";

import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useData } from "../Common/DataContext";
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
  "payment-processing": "Giỏ hàng",
};

function Header({ urlImageBg = "", imageHeight = "" }) {
  const { dataProduct } = useData();
  let urlBg = "https://i.ibb.co/QbsN2bk/bgheader.png";
  if (urlImageBg === "") {
    urlImageBg = urlBg;
  }
  const [hendle, setHendle] = useState("");

  const url = window.location.pathname;
  useEffect(() => {
    const value = url.split("/").pop();
    setHendle(value);
  }, [url]);
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
            {breadcrumb[hendle] ?? "Chi tiết sản phẩm"}
          </Link>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
