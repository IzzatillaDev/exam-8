import request from "../api/interseptors";
import { Request } from "../interface/products";


const products:Request ={
    get_products: () => request.get("/products/search"),
  

}

export default products;