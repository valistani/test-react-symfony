import axios from 'axios';



const AppAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 100000,
});


export const getConfig = (token:string) => {
    const config = {
    headers: { Authorization: `Bearer ${token}` }
    };
    return config;
}

export default AppAxiosInstance;