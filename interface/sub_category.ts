export interface data{
    id: number;
    createdAt: string;
    lastUpdatedAt: string;
    name: string;
    parent_category_id: string
}


export interface SubCategoryStore{
    subcategories: data[];
    get_sub_data: (id:any) => Promise<any>
    // get_sub_id_data: () => Promise<any>
}

export interface Request {
    getSubCategories: (id:any) => any;
    // getSubCategoryById: (id: number) => any;

}
