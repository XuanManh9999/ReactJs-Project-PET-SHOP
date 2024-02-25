import axios from "axios";

export const APIBlogs = {
  addBlog: async (token, data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/new-blog",
        data, // Chuyển data ra ngoài body của request
        {
          headers: {
            token: `Bearer ${token}`, // Token được truyền qua header Authorization
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};
