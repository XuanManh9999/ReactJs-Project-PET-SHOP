import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function Wrap({ children }) {
  return (
    <>
      <Header
        urlImageBg={"https://i.ibb.co/xskgkbF/bgheader2.png"}
        imageHeight={"300px"}
      />
      <main style={{ background: "#fcf8ee" }}>{children}</main>
      <Footer />
    </>
  );
}

export default Wrap;
