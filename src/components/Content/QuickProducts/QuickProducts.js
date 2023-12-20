import clsx from "clsx";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faDongSign } from "@fortawesome/free-solid-svg-icons";
import styles from "./QuickProducts.module.scss";

import {
    getDataProductsEqualId,
    getDataImageDetail,
} from "../../../services/hendleProducts";

function QuickProducts({ hendleQuickViewProduct, id }) {
    const [dataProduct, setDataProduct] = useState({});
    const [dataImage, setDataImage] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const promises = [
                    getDataProductsEqualId(id),
                    getDataImageDetail(id),
                ];
                const [product, image] = await Promise.all(promises);
                setDataProduct(product.data[0]);
                setDataImage(image.data);
            } catch (e) {
                console.log("Lỗi khi gọi API trong componets QUickProducts");
            }
        };
        getData();
    }, [id]);
    const handleContentClick = (e) => {
        e.stopPropagation(); // ngăn chặn hành vi mặc định
    };
    console.log("Xuan manh check data Image: ", dataImage);
    return (
        <div
            onClick={hendleQuickViewProduct}
            className={clsx(styles.containerQuickViewProduct)}
        >
            {dataProduct && (
                <div className={clsx(styles.mainContent)}>
                    <div
                        onClick={handleContentClick}
                        className={clsx(styles.content)}
                    >
                        <FontAwesomeIcon
                            onClick={hendleQuickViewProduct}
                            className={clsx(styles.closeBoxModal)}
                            icon={faXmark}
                        />
                        <div className={clsx(styles.contentLeft)}>
                            <div className={clsx(styles.imageHome)}>
                                <picture>
                                    <img
                                        src={dataProduct.image}
                                        alt={dataProduct.name}
                                    />
                                </picture>
                            </div>
                            <div className={clsx(styles.subImage)}>
                                <picture>
                                    <img
                                        src={
                                            dataImage.length > 0 &&
                                            dataImage[0].images
                                        }
                                        alt={dataProduct.name}
                                    />
                                </picture>
                                <picture>
                                    <img
                                        src={
                                            dataImage.length > 0 &&
                                            dataImage[1].images
                                        }
                                        alt={dataProduct.name}
                                    />
                                </picture>
                                <picture>
                                    <img
                                        src={
                                            dataImage.length > 0 &&
                                            dataImage[2].images
                                        }
                                        alt={dataProduct.name}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className={clsx(styles.contentRight)}>
                            <div className={clsx(styles.top)}>
                                <h2>{dataProduct.name}</h2>
                                <div className={clsx(styles.price)}>
                                    <span className={clsx(styles.priceNew)}>
                                        {dataProduct.price}
                                        <FontAwesomeIcon icon={faDongSign} />
                                    </span>
                                    <span className={clsx(styles.priceOld)}>
                                        {dataProduct.salePrice}
                                        <FontAwesomeIcon icon={faDongSign} />
                                    </span>
                                </div>
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: dataProduct
                                        ? dataProduct.descHTML
                                        : "",
                                }}
                                className={clsx(styles.desc)}
                            ></div>
                            <div className={clsx(styles.manyProduct)}>
                                <span>Số lượng: </span>
                                <input type="number" min={1} alt="" />
                            </div>
                            <button>Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuickProducts;
