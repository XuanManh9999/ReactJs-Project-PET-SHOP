
// import Header from "../components/Header/Header";

import Home from "../pages/Home/Home"
import LoginPage from "../pages/Form/Login"
import RegisterPage from "../pages/Form/Rigister"
import PricePage from "../pages/PricePage"
import QuestionsPage from "../pages/QuestionsPage"

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
        path: "/Price",
        component: <PricePage />,

    },
    {
        path: "/Questions",
        component: <QuestionsPage />,

    },
]
// Cần đăng nhập
const privateRoutes = [
    
];
export { publicRoutes, privateRoutes };
