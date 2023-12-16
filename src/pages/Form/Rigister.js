import Header from "../../components/Header/Header";

import Register from "../../components/Forms/Register";

import Footer from "../../components/Footer/Footer";

function RegisterPage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <Register />
            <Footer />

        </>
    );
}

export default RegisterPage;
