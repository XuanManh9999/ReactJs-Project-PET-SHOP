import { useNavigate } from "react-router-dom";
import { isAuthenticatedAdmin } from "./auth";
import { useEffect } from "react";
function AuthWrapperAdmin({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    let fetching = async () => {
      const check = await isAuthenticatedAdmin();
      if (!check) {
        navigate("/Login");
      }
    };
    fetching();
  }, []);
  return children;
}

export default AuthWrapperAdmin;
