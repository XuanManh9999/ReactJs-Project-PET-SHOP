import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get("access_token") || "";
console.log("Xuan manh check token", token);
axios.defaults.headers.common["token"] = `Bearer ${token}`;
export const authAdmin = {
  checkRole: async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/auth-admin-access-token"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};
