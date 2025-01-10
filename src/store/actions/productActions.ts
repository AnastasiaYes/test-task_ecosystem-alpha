import { ProductType } from "../types/productTypes";

export const addProduct = (product: ProductType) => ({
    type: 'ADD_PRODUCT',
    product,
});

export const removeProduct = (id: number) => ({
    type: 'REMOVE_PRODUCT',
    id,
});

export const editLike = (id: number, liked: boolean) => ({
    type: 'EDIT_LIKE',
    id,
    liked
});

export const updateFilter = (liked: boolean|null, search: string|null, currentPage: number, itemsPerPage: number) => ({
    type: 'UPDATE_FILTER',
    liked,
    search,
    currentPage,
    itemsPerPage
});