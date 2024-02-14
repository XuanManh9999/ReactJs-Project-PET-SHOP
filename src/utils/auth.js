import { authAdmin } from "../services/admin/auth";

export const isAuthenticatedAdmin = async () => {
  const res = await authAdmin.checkRole();
  console.log("Xuan manh check res", res);
  if (res?.status === 200) return true;
  return false;
};
