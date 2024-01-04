import Header from "../components/Header/Header";
import ProductPay from "../components/Content/ProductPay/ProductPay";
import Footer from "../components/Footer/Footer";

function ProductPayPage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <ProductPay />
            <Footer />

        </>
    );
}

export default ProductPayPage;
