import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jwtDecode } from "jwt-decode";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { hendleLogin as postLogin } from "../../services/hendleLogin";
import styles from "./Login.module.scss";
function Login() {
  const [isShowPassWord, setIsShowPassWord] = useState(faEyeSlash);
  const [stateShow, SetStateShow] = useState(false);
  const input_password = useRef();
  const navigate = useNavigate();

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
  let validateForm = (email, password) => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return "Email không hợp lệ.";
    }
    if (!password || password.length < 6) {
      return "Mật khẩu phải có ít nhất 6 kí tự.";
    }

    return null;
  };
  const hendleLogin = async () => {
    const check = validateForm(inputValues.email, inputValues.password);
    if (check === null) {
      try {
        let data = await postLogin(inputValues);
        const decodeToken = jwtDecode(data?.data?.access_token);
        if (data && data.status === 200) {
          Cookies.set("access_token", data.data.access_token, {
            expires: 1 / 24,
          });
          if (decodeToken?.role === "R0") {
            toast.success("Đăng nhập thành công");
            setTimeout(() => {
              navigate("/");
            }, 1500);
          } else if (decodeToken?.role === "R1") {
            toast.success("Đăng nhập thành công");
            setTimeout(() => {
              navigate("/manage");
            }, 1500);
          }
        } else if (data.status === 404) {
          toast.warning(
            "Tên tài khoản hoặc mật khẩu chưa đúng, vui lòng thử lại"
          );
        } else {
          toast.error("Đăng nhập thất bại, vui lòng kiểm tra và thử lại.");
        }
      } catch (e) {
        toast.error("Đã xảy ra lỗi phía server.");
      }
    } else {
      toast.warning(`${check}`);
    }
  };

  const hendleEyeInput = () => {
    if (!stateShow) {
      setIsShowPassWord(faEye);
      input_password.current.type = "text";
      SetStateShow(true);
    } else {
      setIsShowPassWord(faEyeSlash);
      input_password.current.type = "password";
      SetStateShow(false);
    }
  };
  return (
    <>
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
            <span className={styles["title_form_group"]}>Mật Khẩu:</span>
            <input
              type="password"
              className={styles["password"]}
              placeholder="Mật khẩu:"
              name="password"
              value={inputValues.password}
              onChange={handleInputChange}
              ref={input_password}
            />
            <i
              onClick={() => {
                hendleEyeInput();
              }}
              className={`fa-solid fa-eye-slash ${styles["eye_close"]}`}
            >
              <FontAwesomeIcon icon={isShowPassWord} />
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
          <p className={styles["application__desc"]}>Hoặc đăng nhập bằng</p>
          <div className={styles["application_element"]}>
            <Link target="_blank" to={""} className={styles["face_book"]}>
              <img src="Images/fb-btn.svg" alt="facebook" />
            </Link>
            <Link target="_blank" to={""} className={styles["google_login"]}>
              <img src="Images/gp-btn.svg" alt="google" />
            </Link>
          </div>
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
    </>
  );
}
export default Login;
