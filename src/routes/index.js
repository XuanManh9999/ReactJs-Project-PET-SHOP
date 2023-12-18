// import Header from "../components/Header/Header";

import Home from "../pages/Home/Home";
import LoginPage from "../pages/Form/Login";
import RegisterPage from "../pages/Form/Rigister";
import PricePage from "../pages/PricePage";
import QuestionsPage from "../pages/QuestionsPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import HomeManage from "../pages/Manage/HomeManage";
import ForgotPassPage from "../pages/Form/ForgotPass";
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
        path: "/ProductDetail/:id/:role",
        component: <ProductDetailPage />,
    },
    {
        path: "/manage",
        component: <HomeManage />,
    },
    {

    }
];
// Cần đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };
