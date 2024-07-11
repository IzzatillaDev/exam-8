import {create} from "zustand"
import { CategoryStore } from "../interface/category"
import categories from "../service/auth.category"
// import Notification from "../utils/notification"


const useCategoryStore = create<CategoryStore>((set:any) => ({
    data: [],
    getData: async (params) => {
        try {
            const response = await categories.get_category(params)
            // console.log(response)
            // console.log(response.data.data.categories)
            if(response.status === 200){
                set({data:response?.data?.data?.categories})
            }
            return response
        } catch (error) {
            console.log(error)
        }
    }
}))

export default useCategoryStore