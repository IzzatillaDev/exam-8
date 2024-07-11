import {create} from "zustand"
import { ProductDetailStore } from "../interface/product_detail"
import product_detail from "../service/product_detail.service"
// import Notification from "../utils/notification"


const useProductDetailStore = create<ProductDetailStore>((set:any) => ({
    data: [],
    getData: async (product_id:any) => {
        try {
            const response = await product_detail.get_product_detail(product_id)
            console.log(response)
            if(response.status === 200){
                set({data:response?.data?.data})
            }
            // return response
        } catch (error) {
            console.log(error)
        }
    }
}))

export default useProductDetailStore