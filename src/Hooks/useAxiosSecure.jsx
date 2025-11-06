import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const instance = axios.create({
    baseURL : `https://town-mart-server.vercel.app` 
})

const useAxiosSecure = () => {
    const {user} = use(AuthContext) ;
    instance.interceptors.request.use((config)=>{
        config.headers.Authorization = `Bearer ${user.accessToken}`
        console.log(config) ;
        return config  ;
    })
    return instance
};

export default useAxiosSecure;