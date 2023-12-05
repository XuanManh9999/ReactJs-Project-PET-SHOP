// import Header from "../components/Header/Header";

import Product from "../components/Product/Product";
const publicRoutes = [
    {
        path: "/",
        component: Product,
    },
];
// Cần đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };
