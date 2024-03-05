import Cookies from "js-cookie";
import { authAdmin } from "../services/admin/auth";

export const isAuthenticatedAdmin = async () => {
  let token = Cookies.get("access_token") || "";
  let res = await authAdmin.checkRole(token);
  let status = res?.status;

  if (status === 200) return true;
  else if (status === 401) {
    const refreshToken = Cookies.get("refreshToken") || "";
    if (refreshToken) {
      const { status: tokenStatus, access_token } = await authAdmin.getToken(
        refreshToken
      );
      if (tokenStatus === 200) {
        res = await authAdmin.checkRole(access_token);
        Cookies.set("access_token", access_token);
        status = res?.status;
        if (status === 200) {
          return true;
        }
      }
    }
  }

  return false;
};
