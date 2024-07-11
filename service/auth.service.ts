"use client"
import Cookies from "js-cookie"

import { saveAccessToken } from "@/components/helpers/auth-helpers"
import http from "../api/interseptors"

export const login = async (data: any) => {
    try {
        const response = await http.post("/auth/sign-in", data) 
        saveAccessToken(response?.data?.data?.tokens?.access_token)
      Cookies.set('id', response?.data?.data?.data?.id)
       if (response.status === 201) {
            console.log(response.data.access_token);
            const access_token = response.data.data.tokens.access_token;
            localStorage.setItem("access_token", JSON.stringify(access_token))
        }
        return response.status
    } catch (error) {
        console.log(error)
    }
}