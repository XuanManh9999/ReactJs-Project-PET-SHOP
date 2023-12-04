import Header from "../components/Header/Header";
const publicRoutes = [
    {
        path: "/",
        component: Header,
    },
];
// Cần đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };
