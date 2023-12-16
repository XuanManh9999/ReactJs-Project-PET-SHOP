import Header from "../../components/Header/Header";

import Login from "../../components/Forms/Login";

import Footer from "../../components/Footer/Footer";



function LoginPage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <Login />
            <Footer />

        </>
    );
}

export default LoginPage;
