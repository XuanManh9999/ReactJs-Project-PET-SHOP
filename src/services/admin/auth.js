import axios from 'axios';

export const authAdmin = {
  checkRole: async (token) => {
    try {
      const response = await axios.get(
        'http://localhost:4000/api/v1/auth-admin-access-token',
        {
          headers: {
            token: `Bearer ${token}`, //the token is a variable which holds the token
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
  getToken: async (token) => {
    try {
      const response = await axios.get(
        'http://localhost:4000/api/v1/auth/refresh-token',
        {
          headers: {
            refreshtoken: `Bearer ${token}`, //the token is a variable which holds the token
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error('Error fetching data:', err);
      throw err;
    }
  },
};
