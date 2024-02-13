import { useNavigate } from "react-router-dom";
import { isAuthenticatedAdmin } from "./auth";
import { useEffect } from "react";
function AuthWrapperAdmin({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticatedAdmin()) {
      navigate("/Login"); // Chuyển hướng người dùng đến trang đăng nhập nếu chưa xác thực
    }
  }, []);
  return children;
}

export default AuthWrapperAdmin;
