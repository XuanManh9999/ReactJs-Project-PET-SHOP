import Header from "../components/Header/Header";
import Questions from "../components/Content/Questions/Question";
import Footer from "../components/Footer/Footer";

function QuestionsPage() {
    return (
        <>
            <Header urlImageBg={"images/bgheader2.png"} imageHeight={"300px"} />
            <Questions />
            <Footer />

        </>
    );
}

export default QuestionsPage;
