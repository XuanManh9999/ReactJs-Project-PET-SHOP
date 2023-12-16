import Header from "../components/Header/Header";
import ProductDetail from "../components/Content/Product/Product-Detail";
import Footer from "../components/Footer/Footer";
import Product from "../components/Content/Product/Product";
import ProductList from "../components/Content/Product/Product-List";

function ProductDetailPage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <ProductDetail />
            <div style={{ marginBottom: "50px" }}>
                <Product />
                <ProductList />
            </div>
            <Footer />

        </>
    );
}

export default ProductDetailPage;
