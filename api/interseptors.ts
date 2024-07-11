// import axios from "axios";

// const http = axios.create({
//     baseURL : "https://ecomapi.ilyosbekdev.uz"
// })

// http.interceptors.request.use((config) => {
//     const access_token = localStorage.getItem("access_token")
//     if(access_token){
//         config.headers["Authorization"] = access_token
//     }
//     return config

// })

// export default http

import { getAccessToken } from "../src/components/helpers/auth-helpers";
import axios from "axios";

const http = axios.create({
    baseURL: "https://ecomapi.ilyosbekdev.uz"
})

http.interceptors.request.use((config) => {
    const token = getAccessToken()
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
})

export default http;