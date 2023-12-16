import Header from "../components/Header/Header";
import Contact from "../components/Content/Contact/Contact"
import Footer from "../components/Footer/Footer";

function ContactPage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <Contact />
            <Footer />

        </>
    );
}

export default ContactPage;
