import Header from "../../components/Header/Header";

import ForgotPass from "../../components/Forms/ForgotPass";

import Footer from "../../components/Footer/Footer";



function ForgotPassPage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <ForgotPass />
            <Footer />

        </>
    );
}

export default ForgotPassPage;
