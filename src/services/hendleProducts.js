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

const deleteProductById = async (id) => {
  try {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/v2/product/remove-product/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const updateProductById = async (data) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/api/v2/product/update-products`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getAllProduct = async () => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v2/product/all-data`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const fetchCity = async () => {
  try {
    const response = await axios.get("https://provinces.open-api.vn/api/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

const fetchProvince = async (code) => {
  try {
    const response = await axios.get(
      `https://provinces.open-api.vn/api/p/${code}?depth=2`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

const fetchWards = async (code) => {
  try {
    const response = await axios.get(
      `https://provinces.open-api.vn/api/d/${code}?depth=2`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  }
};

const hendleDiscountProducts = async (discount, ids) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/v1/products/discount`,
      {
        discount,
        ids,
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  }
};

const getProductsByType = async (name) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/v1/products/data-products-by-type?name=${name}`
    );
    return response.data;
  } catch (err) {
    console.log("Error fetching data: ", err);
    throw err;
  }
};

const getAllDataTypeProducts = async (name) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/v1/products/all-data-typeProduct`
    );
    return response.data;
  } catch (err) {
    console.log("Error fetching data: ", err);
    throw err;
  }
};

export {
  getDataProducts,
  getDataProductsEqualId,
  getDataImageDetail,
  getProductsRelate,
  getDataCardProducts,
  createProduct,
  deleteProductById,
  getAllProduct,
  updateProductById,
  fetchCity,
  fetchProvince,
  fetchWards,
  hendleDiscountProducts,
  getProductsByType,
  getAllDataTypeProducts,
};
