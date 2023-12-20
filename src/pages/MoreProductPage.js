import Header from "../components/Header/Header";
import MoreProduct from "../components/Content/MoreProduct/MoreProduct";
import Footer from "../components/Footer/Footer";
import AllProduct from "../components/Content/MoreProduct/AllProduct"

function MoreProductPage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
                <MoreProduct />
                <AllProduct />
            </div>
            <Footer />

        </>
    );
}

export default MoreProductPage;
