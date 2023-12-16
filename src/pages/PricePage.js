import Header from "../components/Header/Header";
import Price from "../components/Content/Price/Price";
import Footer from "../components/Footer/Footer";

function PricePage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <Price />
            <Footer />

        </>
    );
}

export default PricePage;
