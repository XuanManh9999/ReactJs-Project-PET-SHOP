import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { clientAPIBlog } from "../../services/client/hendleBlog";

function Footer() {
  const [idBlog, setIdBlog] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await clientAPIBlog.allIdBlog();
      const data = response.data;
      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setIdBlog(data[randomIndex]?.id);
      }
    })();
  });

  const scrollOnTop = () => {
    const scrollToSmooth = (to, duration) => {
      const start = window.pageYOffset;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    };

    Math.easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    scroll.scrollTo(300, { duration: 100, smooth: "linear" });

    // Kích hoạt hiệu ứng chậm dần
    scrollToSmooth(300, 5); // 1000 là thời gian cuộn
  };
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles["footer-logo"]}>
          <Link
            onClick={() => {
              scroll.scrollToTop({ duration: 100 });
            }}
            to=""
          >
            <img src="https://i.ibb.co/3pCnKn8/logo-2.png" alt="Logo footer" />
          </Link>
        </div>

        <div className={styles["footer-list-nav"]}>
          <ul className={styles["footer-list-item"]}>
            <li className={styles["footer-item"]}>
              <Link onClick={scrollOnTop} to="/">
                Trang chủ
              </Link>
            </li>
            <li className={styles["footer-item"]}>
              <Link to="/MoreProduct/dog">Sản phẩm</Link>
            </li>
            <li className={styles["footer-item"]}>
              <Link
                onClick={scrollOnTop}
                to="/Price"
                className={styles["price_products_aplication"]}
              >
                Bảng giá
              </Link>
            </li>
            <li className={styles["footer-item"]}>
              <Link
                to={`/Blog/${idBlog}`}
                className={styles["pet-new-more-watch_2"]}
              >
                Tin thú cưng
              </Link>
            </li>
            <li className={styles["footer-item"]}>
              <Link
                onClick={scrollOnTop}
                to="/Questions"
                className={styles["QA"]}
              >
                Hỏi đáp
              </Link>
            </li>
            <li className={styles["footer-item"]}>
              <Link
                onClick={scrollOnTop}
                to="/Contact"
                className={styles["user_contact"]}
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles["footer-social"]}>
          <Link to={""} title="Facebook">
            <i>
              <FaFacebookF />
            </i>
          </Link>
          <Link to={""} title="instagram">
            <i>
              <FaInstagram />
            </i>
          </Link>
          <Link to={""} title="twitter">
            <i>
              <FaTwitter />
            </i>
          </Link>
          <Link to={""} title="tiktok">
            <i>
              <FaTiktok />
            </i>
          </Link>
          <Link to={""} title="youtube">
            <i>
              <FaYoutube />
            </i>
          </Link>
        </div>

        <div className={styles["footer-license"]}>
          <span>
            <FontAwesomeIcon
              className={styles["icon-copy-right"]}
              icon={faCopyright}
            />
            Bản quyền thuộc về
            <strong>PET SHOP</strong>
          </span>
          <span>
            Cung cấp bởi{" "}
            <strong>
              <Link href="#!">TEAM</Link>
            </strong>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
