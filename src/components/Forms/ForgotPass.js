import styles from "./ForgotPass.module.scss";
import { Link } from "react-router-dom";

function ForgotPass() {
    return (
        <div className={styles["log_in"]}>
            <div className={styles["container_log_in"]}>
                <h1 className={styles["title"]}>ĐẶT LẠI MẬT KHẨU</h1>
                <p className={styles["desc"]}>
                    Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.
                </p>
                <div className={styles["form_group"]}>
                    <span className={styles["title_form_group"]}>Email:</span>
                    <input
                        type="email"
                        className={styles["email"]}
                        placeholder="Email:"
                        name="email"

                    />
                    <span className={styles["form-message"]}></span>
                </div>
                <div className={styles["btn"]}>
                    <button className={styles["btn_log_in"]}>
                        Gửi
                    </button>
                    <button className={styles["btn_log_in"]}>
                        Hủy
                    </button>
                </div>


            </div>
            <div className={styles["application"]}>
                <p className={styles["application__desc"]}>
                    Hoặc đăng nhập bằng
                </p>
                <div className={styles["application_element"]}>
                    <Link
                        target="_blank"
                        to={""}
                        className={styles["face_book"]}
                    >
                        <img src="Images/fb-btn.svg" alt="facebook" />
                    </Link>
                    <Link
                        target="_blank"
                        to={""}
                        className={styles["google_login"]}
                    >
                        <img src="Images/gp-btn.svg" alt="google" />
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default ForgotPass;