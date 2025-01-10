export type ProductType = {
    id: number,
    title: string,
    description: string,
    link: string,
    liked: boolean
};

export type ProductsStateType = {
    products: ProductType[],
    filter: { liked: boolean | null, search: string | null,  currentPage: number, itemsPerPage: number}
};

export type UpdateFilterType = { liked: boolean | null, search: string | null,  currentPage: number, itemsPerPage: number };
export type RemoveProductType = { id: number };
export type EditLikeType = { id: number, liked: boolean };