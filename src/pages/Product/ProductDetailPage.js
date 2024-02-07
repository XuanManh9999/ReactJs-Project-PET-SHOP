import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/Content/Product/Product-Detail";
import Wrap from "../Wrap/Wrap";
import {
  getDataProductsEqualId,
  getProductsRelate,
} from "../../services/hendleProducts";

function ProductDetailPage() {
  const { id, trademark } = useParams();
  const [dataProdutDetail, setDataProdutDetail] = useState([]);
  const [dataRelateProduct, setDataRelateProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = [
          getDataProductsEqualId(id),
          getProductsRelate(trademark),
        ];

        const [produtDetailResponse, relateProductResponse] = await Promise.all(
          promises
        );

        setDataProdutDetail(produtDetailResponse.data);
        setDataRelateProduct(relateProductResponse.data);
      } catch (error) {
        console.error("Có lỗi khi gọi API: ", error);
      }
    };

    fetchData();
  }, [id, trademark]);
  return (
    <Wrap>
      <ProductDetail data={dataProdutDetail} dataRelare={dataRelateProduct} />
    </Wrap>
  );
}

export default ProductDetailPage;
