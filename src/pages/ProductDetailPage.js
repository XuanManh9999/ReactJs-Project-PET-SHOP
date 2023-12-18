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
    const { id, role } = useParams();
    const [dataProdutDetail, setDataProdutDetail] = useState([]);
    const [dataImagesDetail, setDataImagesDetail] = useState([]);
    const [dataRelateProduct, setDataRelateProduct] = useState([]);
    useEffect(() => {
        const getDataRelate = async () => {
            try {
                const response = await getDataProductsEqualId(id);
                setDataProdutDetail(response.data);
            } catch (error) {
                console.error(
                    "Lỗi khi gọi API getDataProductsEqualId: ",
                    error
                );
            }
        };
        const getImages = async () => {
            try {
                const response = await getDataImageDetail(id);
                setDataImagesDetail(response.data);
            } catch (error) {
                console.error("Lỗi khi gọi API getDataImageDetail: ", error);
            }
        };
        const getDataRelare = async () => {
            try {
                const response = await getProductsRelate(role);
                setDataRelateProduct(response.data);
            } catch (error) {
                console.error("Lỗi khi gọi API getProductsRelate: ", error);
            }
        };
        getImages();
        getDataRelate();
        getDataRelare();
    }, [id, role]);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
