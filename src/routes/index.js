
// import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import ProductList from "../components/Product/Product-List";

const publicRoutes = [
    {
        path: "/",
        component: <Product />,

    },
    {
        path: `/product/:productId`,
        component: <ProductList />,

    },
]
// Cần đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };
