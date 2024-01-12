import axios from "axios";
const getDataProducts = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/v2/product/all-data"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getDataProductsEqualId = async (id) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v2/product/data-by-id/${id}`
    );
    return response.data;
  } catch (error) {
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
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getProductsRelate = async (trademark) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v2/product/data-by-trademark/${trademark}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getDataCardProducts = async (ids) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/v1/products/data-cart-products`,
      {
        params: { ids: ids },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// API Laravel
const createProduct = async (data) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/v2/product/new-product`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export {
  getDataProducts,
  getDataProductsEqualId,
  getDataImageDetail,
  getProductsRelate,
  getDataCardProducts,
  createProduct,
};
