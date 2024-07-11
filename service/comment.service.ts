import request from "../api/interseptors";
import { Request } from "../interface/comment";
// import { GetProductCategory } from "../../interface/like";

const comment : Request = {
    get_comment: (id:any) => request.get(`/comment/product/${id}`)
}


export default comment;