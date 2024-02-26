import axios from "axios";

export const APIBlogs = {
  addBlog: async (token, data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/blog/new-blog",
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
  blogById: async (token, id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/blog/blog-by-id/${id}`,
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.log("Error fetching data: ", err);
      throw err;
    }
  },
  updateBlog: async (token, data) => {
    try {
      const response = await axios.put(
        "http://localhost:4000/api/v1/blog/all-blog",
        data,
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
  deleteBlog: async (token, id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/v1/blog/remove-blog/${id}`,
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.log("Error fetching data: ", err);
    }
  },
  allBlogs: async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/blog/all-blog",
        {
          headers: {
            token: `Bearer ${token}`,
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
