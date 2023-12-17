import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles["footer-logo"]}>
                    <Link to="#header">
                        <img src="https://i.ibb.co/3pCnKn8/logo-2.png" alt="Logo footer" />
                    </Link>
                </div>

                <div className={styles["footer-list-nav"]}>
                    <ul className={styles["footer-list-item"]}>
                        <li className={styles["footer-item"]}>
                            <Link href="#header">Trang chủ</Link>
                        </li>
                        <li className={styles["footer-item"]}>
                            <Link href="#product">Sản phẩm</Link>
                        </li>
                        <li className={styles["footer-item"]}>
                            <Link
                                href="#!"
                                className={styles["price_products_aplication"]}
                            >
                                Bảng giá
                            </Link>
                        </li>
                        <li className={styles["footer-item"]}>
                            <Link
                                href="#!"
                                className={styles["pet-new-more-watch_2"]}
                            >
                                Tin thú cưng
                            </Link>
                        </li>
                        <li className={styles["footer-item"]}>
                            <Link href="#!" className={styles["QA"]}>
                                Hỏi đáp
                            </Link>
                        </li>
                        <li className={styles["footer-item"]}>
                            <Link href="#!" className={styles["user_contact"]}>
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
                        <FontAwesomeIcon icon={faCopyright} />
                        Bản quyền thuộc về
                        <strong>Nguyễn Xuân Mạnh</strong>
                    </span>
                    <span>
                        Cung cấp bởi{" "}
                        <strong>
                            <Link href="#!">Xuân Mạnh</Link>
                        </strong>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
