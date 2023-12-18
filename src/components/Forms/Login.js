import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
    hendleLogin as postLogin,
    checkToken,
} from "../../services/hendleLogin";
import styles from "./Login.module.scss";
function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        let token = Cookies.get("token_login");
        if(token) {
            let hendleToken = async () => {

                let result = await checkToken(token);
                if(
                    result &&
                    result.status === 200 &&
                    result.data.length > 0 &&
                    result.data[0].role === "R0"
                ) {
                    navigate("/manage");
                } else if(
                    result &&
                    result.data.length > 0 &&
                    result.data[0].role === "R1"
                ) {
                    navigate("/");
                }

                try {
                    let result = await checkToken(token);
                    if (
                        result &&
                        result.status === 200 &&
                        result.data.length > 0 &&
                        result.data[0].role === "R0"
                    ) {
                        navigate("/manage");
                    } else if (
                        result &&
                        result.data.length > 0 &&
                        result.data[0].role === "R1"
                    ) {
                        navigate("/");
                    }
                } catch (e) {}

            };
            hendleToken();
        } else {
            navigate("/Login");
        }
    }, [navigate]);
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const hendleLogin = async (e) => {
        const allInputsFilled = Object.values(inputValues).every(
            (value) => value.trim() !== ""
        );

        if(allInputsFilled) {
            let data = await postLogin(inputValues);
            if(data && data.status === 200) {
                Cookies.set("token_login", data.data.token);
                if(data.data.role === "user") {
                    toast.success("Đăng nhập thành công");
                    setTimeout(() => {
                        navigate("/");
                    }, 1500);
                } else if(data.data.role === "admin") {
                    toast.success("Đăng nhập thành công");
                    setTimeout(() => {
                        navigate("/manage");
                    }, 1500);

        if (allInputsFilled) {
            try {
                let data = await postLogin(inputValues);
                if (data && data.status === 200) {
                    Cookies.set("token_login", data.data.token);
                    if (data.data.role === "user") {
                        toast.success("Đăng nhập thành công");
                        setTimeout(() => {
                            navigate("/");
                        }, 1500);
                    } else if (data.data.role === "admin") {
                        toast.success("Đăng nhập thành công");
                        setTimeout(() => {
                            navigate("/manage");
                        }, 1500);
                    }
                } else {
                    toast.error(
                        "Đăng nhập thất bại, vui lòng kiểm tra và thử lại."
                    );

                }
            } catch (e) {
                toast.error("Đã xảy ra lỗi phía server.");
            }
        } else {
            toast.warning("Vui lòng nhập đầy đủ thông tin để tiếp tục");
        }
    };
    return (
        <div id="form_2" className={styles["log_in"]}>
            <div className={styles["container_log_in"]}>
                <h1 className={styles["title"]}>Đăng nhập</h1>
                <p className={styles["desc"]}>
                    Nếu bạn có một tài khoản, xin vui lòng đăng nhập
                </p>
                <div className={styles["form_group"]}>
                    <span className={styles["title_form_group"]}>Email:</span>
                    <input
                        type="email"
                        className={styles["email"]}
                        placeholder="Email:"
                        name="email"
                        value={inputValues.email}
                        onChange={handleInputChange}
                    />
                    <span className={styles["form-message"]}></span>
                </div>
                <div className={`${styles["form_group"]} ${styles["eye"]}`}>
                    <span className={styles["title_form_group"]}>
                        Mật Khẩu:
                    </span>
                    <input
                        type="password"
                        className={styles["password"]}
                        placeholder="Mật khẩu:"
                        name="password"
                        value={inputValues.password}
                        onChange={handleInputChange}
                    />
                    <i
                        className={`fa-solid fa-eye-slash ${styles["eye_close"]}`}
                    >
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </i>
                    <i
                        className={`fa-solid fa-eye ${styles["none_eye"]} ${styles["eye_open"]}`}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </i>
                    <span className={styles["form-message"]}></span>
                </div>
                <button
                    onClick={(e) => {
                        hendleLogin(e);
                    }}
                    className={styles["btn_log_in"]}
                >
                    Đăng nhập
                </button>
                <p className={styles["registet_log_in"]}>
                    Bạn chưa có tài khoản
                    <Link to={"/Register"}>Đăng ký tại đây</Link>
                </p>
                <p className={styles["forget_login_password"]}>
                    Bạn quên mật khẩu lấy lại tại đây
                    <Link to={"/ForgotPass"}>Lấy lại tại đây</Link>
                </p>
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
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
}

export default Login;
