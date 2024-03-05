import { useState, useRef } from "react";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hendleRegister } from "../../services/client/hendleLogin";

function Rigister() {
  const [isShowPassWord, setIsShowPassWord] = useState(faEyeSlash);
  const [stateShow, SetStateShow] = useState(false);
  const input_password = useRef();
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
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
  function validateForm(firstName, lastName, phoneNumber, email, password) {
    // Kiểm tra first name
    if (!firstName || firstName.trim().length < 6) {
      return "First name phải có ít nhất 6 kí tự.";
    }

    // Kiểm tra last name
    if (!lastName || lastName.trim().length < 2) {
      return "Last name phải có ít nhất 2 kí tự.";
    }

    // Kiểm tra số điện thoại
    var phoneRegex = /^\d{10}$/;
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      return "Số điện thoại không hợp lệ.";
    }

    // Kiểm tra email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return "Email không hợp lệ.";
    }

    // Kiểm tra mật khẩu
    if (!password || password.length < 6) {
      return "Mật khẩu phải có ít nhất 6 kí tự.";
    }

    // Nếu không có lỗi
    return null;
  }
  const handleSubmit = async () => {
    let check = validateForm(
      inputValues.firstName,
      inputValues.lastName,
      inputValues.phone,
      inputValues.email,
      inputValues.password
    );
    if (check === null) {
      try {
        let data = await hendleRegister(inputValues);
        if (data && data.status === 200) {
          setInputValues({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
          });
          toast.success("Đăng ký thành công.");
        } else if (
          (data && data.status === 404) ||
          (data && data.status === 500)
        ) {
          toast.error("Đăng ký không thành công.");
        }
      } catch (e) {
        toast.error(
          "Email này đã tồn tại trong hệ thống, vui lòng chọn emali khác."
        );
      }
    } else {
      toast.error(`${check}`);
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
      <div className={styles["register"]}>
        <div className={styles["container_register"]}>
          <h1 className={styles["title"]}>Thông tin cá nhân</h1>
          <div className={styles["form_group"]}>
            <span className={styles["title_form_group"]}>Họ:</span>
            <input
              type="text"
              placeholder="Họ"
              className={styles["surname"]}
              value={inputValues.firstName}
              name="firstName"
              onChange={handleInputChange}
            />
            <span className={styles["form-message"]}></span>
          </div>
          <div className={styles["form_group"]}>
            <span className={styles["title_form_group"]}>Tên:</span>
            <input
              type="text"
              placeholder="Tên"
              className={styles["name"]}
              value={inputValues.lastName}
              name="lastName"
              onChange={handleInputChange}
            />
            <span className={styles["form-message"]}></span>
          </div>
          <div className={styles["form_group"]}>
            <span className={styles["title_form_group"]}>Số điện thoại:</span>
            <input
              type="text"
              placeholder="Số điện thoại"
              className={styles["phone"]}
              value={inputValues.phone}
              name="phone"
              onChange={handleInputChange}
            />
            <span className={styles["form-message"]}></span>
          </div>
          <div className={styles["form_group"]}>
            <span className={styles["title_form_group"]}>Email:</span>
            <input
              type="text"
              placeholder="Email"
              className={styles["email"]}
              value={inputValues.email}
              name="email"
              onChange={handleInputChange}
            />
            <span className={styles["form-message"]}></span>
          </div>
          <div className={`${styles["form_group"]} ${styles["eye"]}`}>
            <span className={styles["title_form_group"]}>Mật khẩu:</span>
            <input
              type="password"
              placeholder="Mật khẩu"
              className={styles["password"]}
              value={inputValues.password}
              name="password"
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
            onClick={(event) => {
              handleSubmit(event);
            }}
            type="submid"
            className={styles["btn_register"]}
          >
            Đăng Ký
          </button>
          <p className={styles["log_in_now"]}>
            Bạn đã có tài khoản? Đăng nhập <Link to={"/login"}>tại đây</Link>
          </p>
        </div>
        <div className={styles["application"]}>
          <p className={styles["application__desc"]}>Hoặc đăng nhập bằng</p>
          <div className={styles["application_element"]}>
            <Link target="_blank" to={""} className={styles["face_book"]}>
              <img src="Images/fb-btn.svg" alt="facebook" />
            </Link>
            <Link target="_blank" to={""} className={styles["google"]}>
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

export default Rigister;
