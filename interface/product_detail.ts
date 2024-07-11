



export interface ProductDetailStore {
    data: any[],
    getData: (product_id:any) => Promise<any>
}

export interface Request {
    get_product_detail: (product_id:any) => Promise<any>
}