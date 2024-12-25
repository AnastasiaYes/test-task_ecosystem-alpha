import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

export type ProductType = {
    id: number,
    title: string,
    description: string,
    link: string,
    liked: boolean
};

type StateType = { products: ProductType[] };
type CreateProductType = { product: ProductType };
type EditLikeType = { id: number, liked: boolean };
type RemoveProductType = { id: number };
const initialState: StateType = {
    products: [
        {
            id: 1,
            title: "Test 1",
            description: "Test description",
            link: "https://img.freepik.com/premium-photo/cat-yawns-full-mouth_89378-382.jpg",
            liked: false,
        }
    ]
};

const reducer = (state: StateType = initialState, action: {
    type: string
} & (CreateProductType | RemoveProductType | EditLikeType)) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const { product } = action as { type: string } & CreateProductType;

            return {
                ...state,
                products: [...state.products, product] 
            };
        }
        case 'REMOVE_PRODUCT': {
            const { id } = action as { type: string } & RemoveProductType;

            return {
                ...state,
                products: state.products.filter(p => p.id !== id)
            };
        }

        case 'EDIT_LIKE': {
            const { liked, id } = action as { type: string } & EditLikeType;
            const index = state.products.findIndex((p) => p.id === id);
            if (index === -1) {
                return state;
            }

            return {
                ...state,
                products: state.products.map((p) => p.id !== id ? p : {...p, liked}),
            }

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

const reducers = combineReducers({
    products: reducer,
})
export const store = configureStore({reducer: reducers});


