import Home from "../pages/Home/Home";
import LoginPage from "../pages/Form/Login";
import RegisterPage from "../pages/Form/Rigister";
import PricePage from "../pages/Product/PricePage";
import QuestionsPage from "../pages/Function/QuestionsPage";
import BlogPage from "../pages/Function/BlogPage";
import ContactPage from "../pages/Function/ContactPage";
import ProductDetailPage from "../pages/Product/ProductDetailPage";
import OrderList from "../pages/Manage/OrderList";
import ForgotPassPage from "../pages/Form/ForgotPass";
import MoreProductPage from "../pages/Product/MoreProductPage";
import PayPage from "../pages/Product/PayPage";
import ProductPayPage from "../pages/Product/ProductPayPage";
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
const privateRoutes = [
  {
    path: "/manage",
    component: <HomeManage />,
  },
  {
    path: "/ProductManage",
    component: <ProductManage />,
  },
  {
    path: "/OrderList",
    component: <OrderList />,
  },
  {
    path: "/ProductAdd",
    component: <ProductAdd />,
  },
];
export { publicRoutes, privateRoutes };
