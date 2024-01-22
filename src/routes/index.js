import Home from "../pages/Home/Home";
import LoginPage from "../pages/Form/Login";
import RegisterPage from "../pages/Form/Rigister";
import PricePage from "../pages/PricePage";
import QuestionsPage from "../pages/QuestionsPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import OrderList from "../pages/Manage/OrderList";
import ForgotPassPage from "../pages/Form/ForgotPass";
import MoreProductPage from "../pages/MoreProductPage";
import PayPage from "../pages/PayPage";
import ProductPayPage from "../pages/ProductPayPage";
import HomeManage from "../pages/Manage/HomeManage";
import ProductManage from "../pages/Manage/ProductManage";
import ProductAdd from "../pages/Manage/ProductAdd";
import UpdatePRD from "../pages/Manage/UpdateProduct";
const publicRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/manage",
    component: <HomeManage />,
  },
  {
    path: "/OrderList",
    component: <OrderList />,
  },
  {
    path: "/ProductManage",
    component: <ProductManage />,
  },
  {
    path: "/ProductAdd",
    component: <ProductAdd />,
  },
  {
    path: "/Register",
    component: <RegisterPage />,
  },
  {
    path: "/Login",
    component: <LoginPage />,
  },
  {
    path: "/ForgotPass",
    component: <ForgotPassPage />,
  },
  {
    path: "/Price",
    component: <PricePage />,
  },
  {
    path: "/Questions",
    component: <QuestionsPage />,
  },
  {
    path: "/Blog",
    component: <BlogPage />,
  },
  {
    path: "/Contact",
    component: <ContactPage />,
  },
  {
    path: "/ProductDetail/:id/:trademark",
    component: <ProductDetailPage />,
  },

  {
    path: "/MoreProduct/:typeProduct",
    component: <MoreProductPage />,
  },
  {
    path: "/pay",
    component: <PayPage />,
  },
  {
    path: "/payment-processing",
    component: <ProductPayPage />,
  },
  {
    path: "/update-product",
    component: <UpdatePRD />,
  },
];
// Cần đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };
