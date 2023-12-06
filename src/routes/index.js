import Detail from "../components/Demo_detail/Detail";
import Home from "../pages/Home/Home";
const publicRoutes = [
    {
        path: "/",
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
