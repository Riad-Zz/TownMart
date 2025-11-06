import axios from "axios";

const axiosInstance = axios.create({
    baseURL : `https://town-mart-server.vercel.app`
})


const useAxios = () => {
    return axiosInstance ;
};

export default useAxios;