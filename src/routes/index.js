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
import ProductManage from "../pages/Manage/Product/ProductManage";
import ProductAdd from "../pages/Manage/Product/ProductAdd";
// Blog
import AddBlogPage from "../pages/Manage/Blog/AddBlogPage";
import AlterBlogPage from "../pages/Manage/Blog/AlterBlogPage";
import ListBlogPage from "../pages/Manage/Blog/ListBlogPage";

import UpdatePRD from "../pages/Manage/Product/UpdateProduct";

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
    path: "/Blog/:id",
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
  {
    path: "/BlogAdd",
    component: <AddBlogPage />,
  },
  {
    path: "/UpdateBlog",
    component: <AlterBlogPage />,
  },
  {
    path: "/ListBlog",
    component: <ListBlogPage />,
  },
];
export { publicRoutes, privateRoutes };
