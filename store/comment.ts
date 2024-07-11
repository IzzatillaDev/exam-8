import {create} from "zustand"
import { CommentStore } from "../interface/comment"
import comment from "../service/comment.service"
import http from "../api/interseptors"
// import Notification from "../utils/notification"


const useCommentStore = create<CommentStore>((set:any) => ({
    data: [],
    getData: async (id) => {
        try {
            const response = await comment.get_comment(id)
            console.log(response)
            console.log(response.data.data.comment)
            if(response.status === 200){
                set({data:response?.data?.data.comment})
            }
            return response
        } catch (error) {
            console.log(error)
        }
    },
    
  postCommets: async (data:any) => {
    try{
        const response = await http.post(`/comment/create`, data);
        console.log(response);
        set((state:any) => {
            return {
                data: [...state.commets, response?.data?.data],
            }
        })
        return response
    }catch(err){
        console.log(err);
    }
}

}))

export default useCommentStore
