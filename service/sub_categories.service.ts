import request from "../api/interseptors";
import { Request } from "../interface/sub_category";
// import { GetProductCategory } from "../../interface/like";

const sub_categories : Request = {
    getSubCategories: (id:any) => request.get(`/sub-category/search/${id}`)
}


export default sub_categories;