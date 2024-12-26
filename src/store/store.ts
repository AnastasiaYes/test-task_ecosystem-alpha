import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

export type ProductType = {
    id: number,
    title: string,
    description: string,
    link: string,
    liked: boolean
};

export type ProductsStateType = { products: ProductType[], filter: {liked: boolean|null, search: string|null} };
export type CreateProductType = { product: ProductType };
export type EditLikeType = { id: number, liked: boolean };
export type UpdateFilterType = { liked: boolean|null, search: string|null };
export type RemoveProductType = { id: number };
const initialState: ProductsStateType = {
    products: [
        {
            id: 1,
            title: "Test 1",
            description: "Test description",
            link: "https://img.freepik.com/premium-photo/cat-yawns-full-mouth_89378-382.jpg",
            liked: false,
        }
    ],
    filter: {liked: null, search: null}
};

const reducer = (state: ProductsStateType = initialState, action: {
    type: string
} & (CreateProductType | RemoveProductType | EditLikeType | UpdateFilterType)) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const {product} = action as { type: string } & CreateProductType;

            return {
                ...state,
                products: [...state.products, product]
            };
        }
        case 'REMOVE_PRODUCT': {
            const {id} = action as { type: string } & RemoveProductType;

            return {
                ...state,
                products: state.products.filter(p => p.id !== id)
            };
        }

        case 'EDIT_LIKE': {
            const {liked, id} = action as { type: string } & EditLikeType;
            const index = state.products.findIndex((p) => p.id === id);
            if (index === -1) {
                return state;
            }

            return {
                ...state,
                products: state.products.map((p) => p.id !== id ? p : {...p, liked}),
            }
        }
        case 'UPDATE_FILTER': {
            const {liked, search} = action as {type: string} & UpdateFilterType
            return {
                ...state,
                filter: {
                   liked, search
                }
            };
        }
        default:
            return state
    }
}

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

export const updateFilter = (liked: boolean|null, search: string|null): {type: string} & UpdateFilterType => ({
    type: 'UPDATE_FILTER',
    liked,
    search
});

const reducers = combineReducers({
    products: reducer,
})
export const store = configureStore({reducer: reducers});


