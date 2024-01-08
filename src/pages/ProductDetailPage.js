import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import ProductDetail from "../components/Content/Product/Product-Detail";
import Footer from "../components/Footer/Footer";

import {
    getDataProductsEqualId,
    getDataImageDetail,
    getProductsRelate,
} from "../services/hendleProducts";

function ProductDetailPage() {
    const { id, trademark } = useParams();
    const [dataProdutDetail, setDataProdutDetail] = useState([]);
    const [dataImagesDetail, setDataImagesDetail] = useState([]);
    const [dataRelateProduct, setDataRelateProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = [
                    getDataProductsEqualId(id),
                    getDataImageDetail(id),
                    getProductsRelate(trademark),
                ];

                const [
                    produtDetailResponse,
                    imagesResponse,
                    relateProductResponse,
                ] = await Promise.all(promises);

                setDataProdutDetail(produtDetailResponse.data);
                setDataImagesDetail(imagesResponse.data);
                setDataRelateProduct(relateProductResponse.data);
            } catch (error) {
                console.error("Có lỗi khi gọi API: ", error);
            }
        };

        fetchData();
    }, [id, trademark]);
    return (
        <>
            <Header
                urlImageBg={"https://i.ibb.co/xskgkbF/bgheader2.png"}
                imageHeight={"300px"}
            />
            <ProductDetail
                data={dataProdutDetail}
                dataRelare={dataRelateProduct}
                imageDetail={dataImagesDetail}
            />

            <Footer />
        </>
    );
}

export default ProductDetailPage;
