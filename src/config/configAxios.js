import axios from "axios";
import Cookies from "js-cookie";

// Tạo một instance của Axios
const axiosInstance = axios.create();

// Interceptor cho request
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("access_token") || "";
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho response - có thể cần cập nhật token ở đây nếu cần
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Thực hiện lấy token mới ở đây (ví dụ: gửi request tới endpoint để refresh token)
      // Sau khi lấy được token mới, cập nhật lại vào cookie
      try {
        const newToken = await yourFunctionToGetNewToken(); // Thay yourFunctionToGetNewToken() bằng hàm lấy token mới của bạn
        Cookies.set("access_token", newToken);
        // Sau khi cập nhật token mới vào cookie, cập nhật lại header Authorization cho request tiếp theo
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        // Thực hiện gửi lại request ban đầu với token mới
        return axiosInstance(originalRequest);
      } catch (error) {
        // Xử lý lỗi khi không lấy được token mới
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
