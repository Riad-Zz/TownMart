import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useNavigate} from "react-router";

const axiosSecure = axios.create({
    baseURL: "https://town-mart-server.vercel.app",
});

const useAxiosSecure = () => {
    const { user,  LogOut } = use(AuthContext); 
    const navigate = useNavigate() ;

    useEffect(() => {
        if (!user?.accessToken) return;

        const reqInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                config.headers.Authorization = `Bearer ${user.accessToken}`;
                return config;
            },
            (error) => Promise.reject(error)
        );

        
        const resInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            (error) => {
                const status = error?.response?.status;

                if (status === 401 || status === 403) {
                    console.warn("Unauthorized or Forbidden — Logging out...");
                    LogOut().then(()=>{
                    navigate('/') ;
                    })
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        };
    }, [user?.accessToken]);

    return axiosSecure;
};

export default useAxiosSecure;
