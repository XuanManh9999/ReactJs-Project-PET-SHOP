import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faCopyright, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FaFacebookF, } from "react-icons/fa";



function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles['footer-logo']}>
                    <Link href="#header">
                        <img src="Images/logo (2).png" alt="Logo footer" />
                    </Link>
                </div>

                <div className={styles['footer-list-nav']}>
                    <ul className={styles['footer-list-item']}>
                        <li className={styles['footer-item']}>
                            <Link href="#header">Trang chủ</Link>
                        </li>
                        <li className={styles['footer-item']}>
                            <Link href="#product">Sản phẩm</Link>
                        </li>
                        <li className={styles['footer-item']}>
                            <Link href="#!" className={styles['price_products_aplication']}>
                                Bảng giá
                        </Link>
                        </li>
                        <li className={styles['footer-item']}>
                            <Link href="#!" className={styles['pet-new-more-watch_2']}>
                                Tin thú cưng
                        </Link>
                        </li>
                        <li className={styles['footer-item']}>
                            <Link href="#!" className={styles['QA']}>
                                Hỏi đáp
                        </Link>
                        </li>
                        <li className={styles['footer-item']}>
                            <Link href="#!" className={styles['user_contact']}>
                                Liên hệ
                        </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles['footer-social']}>
                    <Link to={""} title="Facebook" >
                        <i>
                            <FaFacebookF />
                        </i>
                    </Link>
                    <Link to={""} title="instagram" >
                        <i>
                            <FontAwesomeIcon icon={faFaceFrown} />
                        </i>
                    </Link>
                    <Link to={""} title="twitter" >
                        <i>
                            <FontAwesomeIcon icon={faFaceFrown} />
                        </i>
                    </Link>
                    <Link to={""} title="tiktok" >
                        <i>
                            <FontAwesomeIcon icon={faFaceFrown} />
                        </i>
                    </Link>
                    <Link to={""} title="youtube" >
                        <i>
                            <FontAwesomeIcon icon={faFaceFrown} />
                        </i>
                    </Link>
                </div>

                <div className={styles['footer-license']}>
                    <span>
                        <FontAwesomeIcon icon={faCopyright} />
                        Bản quyền thuộc về
                        <strong>
                            Nguyễn Xuân Mạnh
                        </strong>
                    </span>
                    <span>
                        Cung cấp bởi <strong><Link href="#!">Xuân Mạnh</Link></strong>
                    </span>
                </div>
            </div>
        </footer >
    );
}

export default Footer;