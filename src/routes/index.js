import Home from "../components/Home/Home";
const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
];
// Cần đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };
