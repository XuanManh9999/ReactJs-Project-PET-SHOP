import axios from "axios";
//http://127.0.0.1:8000/api/v2/user/new-user
//http://localhost:4000/api/v1/register/data
const hendleRegister = async (data) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/v2/user/new-user",
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

const hendleForgot = async (email) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/v1/send-email-forgot",
            {
                email,
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export { hendleRegister, hendleLogin, checkToken, hendleForgot };
