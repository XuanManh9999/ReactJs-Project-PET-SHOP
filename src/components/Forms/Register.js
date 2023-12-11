import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, Form } from "react-router-dom";

function Rigister() {
    return (
        <form action="#!" id="form_1" className={styles['register']}>
            <div className={styles['container_register']}>
                <h1 className={styles['title']}>Thông tin cá nhân</h1>
                <div className={styles['form_group']}>
                    <span className={styles['title_form_group']}>Họ:</span>
                    <input type="text" placeholder="Họ" className={styles['surname']} />
                    <span className={styles['form-message']}></span>
                </div>
                <div className={styles['form_group']}>
                    <span className={styles['title_form_group']}>Tên:</span>
                    <input type="text" placeholder="Tên" className={styles['name']} />
                    <span className={styles['form-message']}></span>
                </div>
                <div className={styles['form_group']}>
                    <span className={styles['title_form_group']}>Số điện thoại:</span>
                    <input type="text" placeholder="Số điện thoại" className={styles['phone']} />
                    <span className={styles['form-message']}></span>
                </div>
                <div className={styles['form_group']}>
                    <span className={styles['title_form_group']}>Email:</span>
                    <input type="text" placeholder="Email" className={styles['email']} />
                    <span className={styles['form-message']}></span>
                </div>
                <div className={`${styles['form_group']} ${styles['eye']}`}>
                    <span className={styles['title_form_group']}>Mật khẩu:</span>
                    <input type="password" placeholder="Mật khẩu" className={styles['password']} />
                    <i className={`fa-solid fa-eye-slash ${styles['eye_close']}`}>
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </i>
                    <i className={`fa-solid fa-eye ${styles['none_eye']} ${styles['eye_open']}`}></i>
                    <span className={styles['form-message']}></span>
                </div>
                <button type="submit" className={styles['btn_register']}>Đăng Ký</button>
                <p className={styles['log_in_now']}>Bạn đã có tài khoản? Đăng nhập <Link to={"/login"}>tại đây</Link></p>
            </div>
            <div className={styles['application']}>
                <p className={styles['application__desc']}>Hoặc đăng nhập bằng</p>
                <div className={styles['application_element']}>
                    <Link target="_blank" to={""} className={styles['face_book']}>
                        <img src="Images/fb-btn.svg" alt="facebook" />
                    </Link>
                    <Link target="_blank" to={""} className={styles['google']}>
                        <img src="Images/gp-btn.svg" alt="google" />
                    </Link>
                </div>
            </div>
        </form>
    );
}

export default Rigister;