import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import { Link, Form } from "react-router-dom";

function Login() {
    return (
        <form action="#!" id="form_2" className={styles['log_in']}>
            <div className={styles['container_log_in']}>
                <h1 className={styles['title']}>Đăng nhập</h1>
                <p className={styles['desc']}>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</p>
                <div className={styles['form_group']}>
                    <span className={styles['title_form_group']}>Email:</span>
                    <input type="email" className={styles['email']} placeholder="Email:" />
                    <span className={styles['form-message']}></span>
                </div>
                <div className={`${styles['form_group']} ${styles['eye']}`}>
                    <span className={styles['title_form_group']}>Mật Khẩu:</span>
                    <input type="password" className={styles['password']} placeholder="Mật khẩu:" />
                    <i className={`fa-solid fa-eye-slash ${styles['eye_close']}`}></i>
                    <i className={`fa-solid fa-eye ${styles['none_eye']} ${styles['eye_open']}`}></i>
                    <span className={styles['form-message']}></span>
                </div>
                <button type="submit" className={styles['btn_log_in']}>Đăng nhập</button>
                <p className={styles['registet_log_in']}>
                    Bạn chưa có tài khoản
                    <a href="#!">Đăng ký tại đây</a>
                </p>
                <p className={styles['forget_login_password']}>
                    Bạn quên mật khẩu lấy lại tại đây
                    <a href="#!">Lấy lại tại đây</a>
                </p>
            </div>
            <div className={styles['application']}>
                <p className={styles['application__desc']}>Hoặc đăng nhập bằng</p>
                <div className={styles['application_element']}>
                    <a target="_blank" href="https://www.facebook.com/login.php" className={styles['face_book']}>
                        <img src="./asset/img/fb-btn.svg" alt="facebook" />
                    </a>
                    <a target="_blank" href="https://accounts.google.com/Login" className={styles['google_login']}>
                        <img src="./asset/img/gp-btn.svg" alt="google" />
                    </a>
                </div>
            </div>
        </form>
    )
}

export default Login;