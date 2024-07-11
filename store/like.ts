import { create } from "zustand";
import http from "../api/interseptors";
import { likes_request } from "../interface/like";

const uselikestore = create <likes_request> ((set) => ({
    likes: [],
    count: 0,
    getlikes: async ({id}:any) => {
        try{
            const response = await http.get(`/likes/user/likes/${id}`);
            set({ likes: response?.data?.data?.likes});
            set({ count: response?.data?.data?.count})
            // console.log("res",response)
        }catch(err){
            console.log(err);
        }
    },
    postlikes: async ({ product_id }:any) => {
        try{
            const response = await http.post("/likes/create", { product_id });
            console.log({ product_id })
            return response
        }catch(err){
            console.log(err);
        }
    }
}));

export default uselikestore;