import axios from "axios";
const getProductsHotSearch = async () => {
    try {
        const response = await axios.get(
            "http://localhost:4000/api/vi/user-search-products-hot"
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const userSearchProducts = async (content) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/v1/user-search",
            {
                content,
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};


export { getProductsHotSearch, userSearchProducts };
