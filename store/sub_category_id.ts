import {create} from "zustand"
import { SubCategoryIdStore } from "../interface/sub_category_id"
import sub_categories_id from "../service/sub_categories_id.service"
// import Notification from "../utils/notification"


const useSubCategoryIdStore = create<SubCategoryIdStore>((set:any) => ({
    subidcategories: [],
    get_sub_id_data: async (id:any) => {
        try {
            const response = await sub_categories_id.getSubIdCategories(id)
            set({ subidcategories: response?.data?.data?.subcategories});
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

export default useSubCategoryIdStore