import axios from "axios";
const getDataProducts = async () => {
    try {
        const response = await axios.get(
            "http://localhost:4000/api/v1/products/data"
        );
        return response.data;
    } catch(error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const getDataProductsEqualId = async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:4000/api/v1/products/data-equal-id?id=${id}`
        );
        return response.data;
    } catch(error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const getDataImageDetail = async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:4000/api/v1/products/images-detail-product?id=${id}`
        );
        return response.data;
    } catch(error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const getProductsRelate = async (role) => {
    try {
        const response = await axios.get(
            `http://localhost:4000/api/v1/products/data-products-relate?role=${role}`
        );
        return response.data;
    } catch(error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
export { getDataProducts, getDataProductsEqualId, getDataImageDetail, getProductsRelate };
