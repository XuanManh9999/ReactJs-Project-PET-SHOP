import { useState } from 'react';
import styles from './ForgotPass.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hendleForgot } from '../../services/client/hendleLogin';
function ForgotPass() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  let isValidEmail = (email) => {
    // Biểu thức chính quy cho địa chỉ email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra định dạng email
    return emailRegex.test(email);
  };
  let hendleSend = async () => {
    try {
      if (isValidEmail(email)) {
        let result = await hendleForgot(email);
        if (result && result.status === 200) {
          toast.success(result.message);
        } else if (result && result.status === 404) {
          toast.warn(
            'Email không tồn tại không hệ thống, vui lòng kiểm tra lại'
          );
        }
      } else {
        toast.warn(
          'Vui lòng nhập đúng định dạng email để có thể thao tác tiếp tục.'
        );
      }
    } catch (e) {
      toast.error('Đã xảy ra một lỗi ở phía Server');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      hendleSend();
    }
  };

  let hendleExit = async () => {
    navigate('/Login');
  };
  return (
    <>
      <div className={styles['log_in']}>
        <div className={styles['container_log_in']}>
          <h1 className={styles['title']}>ĐẶT LẠI MẬT KHẨU</h1>
          <p className={styles['desc']}>
            Chúng tôi sẻ gửi mật khẩu của bạn tới email của bạn, vui lòng kiểm
            tra email rồi đăng nhập lại.
          </p>
          <div className={styles['form_group']}>
            <span className={styles['title_form_group']}>Email:</span>
            <input
              type="email"
              className={styles['email']}
              placeholder="Email:"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onKeyPress={handleKeyPress}
            />
            <span className={styles['form-message']}></span>
          </div>
          <div className={styles['btn']}>
            <button
              onClick={() => {
                hendleSend();
              }}
              className={styles['btn_log_in']}
            >
              Gửi
            </button>
            <button
              onClick={() => {
                hendleExit();
              }}
              className={styles['btn_log_in']}
            >
              Hủy
            </button>
          </div>
        </div>
        <div className={styles['application']}>
          <p className={styles['application__desc']}>Hoặc đăng nhập bằng</p>
          <div className={styles['application_element']}>
            <Link target="_blank" to={''} className={styles['face_book']}>
              <img src="https://i.ibb.co/vZw8DRx/fb-btn.webp" alt="facebook" />
            </Link>
            <Link target="_blank" to={''} className={styles['google_login']}>
              <img src="https://i.ibb.co/N1bJdbb/gp-btn.webp" alt="google" />
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

export default ForgotPass;
