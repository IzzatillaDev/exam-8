import request from "../api/interseptors";
import { Request } from "../interface/product_detail";


const product_detail:Request ={
    get_product_detail: (product_id:any) => request.get(`https://ecomapi.ilyosbekdev.uz/product-detail/${product_id}`),
  

}

export default product_detail;