import Header from "../components/Header/Header";
import Detail from "../components/Demo_detail/Detail";
import Home from "../components/Demo_detail/Home";
const publicRoutes = [
    {
        path: "/",
        component: <Header />,
    },
    {
        path: `/product`,
        component: <Home />,
    },
    {
        path: `/product/:productId`,
        component: <Detail />,
    },
];
// Cần đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };
