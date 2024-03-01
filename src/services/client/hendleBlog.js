import axios from "axios";
export const clientAPIBlog = {
  blogByID: async (id) => {
    try {
      const response = await axios.get(
        ` http://localhost:4000/api/v1/blog-common-by-id/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
  blogByLimit: async (limit) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/blog-common-with-limit?limit=${limit}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
  blogOrtherID: async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/blog-common-by-id-select-orther?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};
