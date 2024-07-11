import request from "../api/interseptors";
import { Request } from "../interface/like";
// import { GetProductCategory } from "../../interface/like";

const likes : Request = {
    get_likes: (id:any) => request.get(`https://ecomapi.ilyosbekdev.uz/likes/user/likes/${id}`),
    post_likes: (id:any) => request.post(`https://store.go-clothes.uz/v1/like/${id}`),    
}


export default likes;