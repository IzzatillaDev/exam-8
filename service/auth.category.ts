import request from "../api/interseptors";
import { Request } from "../interface/category";


const categories:Request ={
    get_category: (params) => request.get(`/category/search?limit=10&page=1`, {params}),
  

}

export default categories;