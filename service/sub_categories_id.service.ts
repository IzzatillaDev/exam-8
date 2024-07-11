import request from "../api/interseptors";
import { Request } from "../interface/sub_category_id";
// import { GetProductCategory } from "../../interface/like";

const sub_categories_id : Request = {
    getSubIdCategories: (id:any) => request.get(`/sub-category/${id}`)
}


export default sub_categories_id;