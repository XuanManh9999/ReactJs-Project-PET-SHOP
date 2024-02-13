import Cookies from "js-cookie";

export const isAuthenticatedAdmin = () => {
  // // Kiểm tra xem có access token trong cookie hay không
  // const accessToken = Cookies.get("access_token");
  // return !!accessToken; // Trả về true nếu accessToken tồn tại, ngược lại trả về false
  return true;
};
