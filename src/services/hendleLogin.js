import axios from "axios";
const hendleRegister = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/v1/register/data",
            data
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
const hendleLogin = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/v1/login/data",
            data
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const checkToken = async (token) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/v1/check-token-user",
            {
                token,
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export { hendleRegister, hendleLogin, checkToken };