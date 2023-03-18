import axios from 'axios';
// const URL = 'http://localhost:8000';
const URL = 'https://flipkartclonebackend-s4e2.onrender.com';
export const authenticateSignup = async (data) => {
    try {
        return await axios.post(URL + '/signup', data);
    } catch (error) {
        console.log("Error while calling singup api " + error.message);
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(URL + '/login', data);
    } catch (error) {
        console.log("Error while Logging in " + error.message);
        return error.response;
    }
}



