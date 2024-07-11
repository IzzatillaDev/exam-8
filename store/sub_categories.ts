import {create} from "zustand"
import { SubCategoryStore } from "../interface/sub_category"
import sub_categories from "../service/sub_categories.service"
// import Notification from "../utils/notification"


const useSubCategoryStore = create<SubCategoryStore>((set:any) => ({
    subcategories: [],
    get_sub_data: async (id:any) => {
        try {
            const response = await sub_categories.getSubCategories(id)
            set({ subcategories: response?.data?.data?.subcategories});
            console.log(response)
            // console.log(response)
            // console.log(response.data.data.categories)
            // if(response.status === 200){
            //     set({data:response?.data?.data?.categories})
            // }
            return response
        } catch (error) {
            console.log(error)
        }
    }
}))

export default useSubCategoryStore