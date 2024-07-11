import {create} from "zustand"
import { ProductsStore } from "../interface/products"
import products from "../service/products.service"
// import Notification from "../utils/notification"


const useProductsStore = create<ProductsStore>((set:any) => ({
    data: [],
    getData: async () => {
        try {
            const response = await products.get_products()
            // console.log(response)
            // console.log(response)
            // console.log(response.data.data.products[0].id)
            // console.log(response.data.data.products)
            if(response.status === 200){
                set({data:response?.data?.data?.products})
                // localStorage.setItem("product_id", response?.data?.data?.products.id)
            }
            return response
        } catch (error) {
            console.log(error)
        }
    }
}))

export default useProductsStore