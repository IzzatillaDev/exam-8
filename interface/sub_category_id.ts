export interface data{
    id: number;
    createdAt: string;
    lastUpdatedAt: string;
    name: string;
    parent_category_id: string
}


export interface SubCategoryIdStore{
    subidcategories: data[];
    get_sub_id_data: (id:any) => Promise<any>
    // get_sub_id_data: () => Promise<any>
}

export interface Request {
    getSubIdCategories: (id:any) => any;
    // getSubCategoryById: (id: number) => any;

}
