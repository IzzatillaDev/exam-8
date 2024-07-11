

export interface Get_Category{
    page: number ,
    limit:number,
    name?: string | number
}



export interface CategoryStore {
    data: any[],
    getData: (params:Get_Category) => Promise<any>
}

export interface Request {
    get_category: (params:Get_Category) => Promise<any>
}