import Wrap from "../Wrap/Wrap";
import MoreProduct from "../../components/Content/MoreProduct/MoreProduct";
import AllProduct from "../../components/Content/MoreProduct/AllProduct";
function MoreProductPage() {
  
  return (
    <Wrap>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <MoreProduct />
        <AllProduct />
      </div>
    </Wrap>
  );
}

export default MoreProductPage;
