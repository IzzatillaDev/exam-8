

// export interface Get_Category{
//     page: number ,
//     limit:number,
//     name?: string | number
// }

interface createCommets{
    comment: string
    product_id: number
}




export interface CommentStore {
    data: any[],
    getData: (id:any) => Promise<any>
    // postData: (id:any) => Promise<any>
}

export interface Request {
    data: any[],
    get_comment: (id:any) => Promise<any>
    postCommets: (data: createCommets) => Promise<any>
}
