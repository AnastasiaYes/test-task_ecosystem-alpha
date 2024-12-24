import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

export type ProductType = {
    id: number,
    title: string,
    description: string,
    link: string
};

type StateType = { products: ProductType[] };
type CreateProductType = { product: ProductType };
type RemoveProductType = { id: number };
const initialState: StateType = {
    products: []
};

const reducer = (state: StateType = initialState, action: {
    type: string
} & (CreateProductType | RemoveProductType)) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const { product } = action as { type: string } & CreateProductType;

            // return {...state, products: [...state.products.push(action.product)]}
            return {
                ...state,
                products: [...state.products, product] 
            };
        }
        case 'REMOVE_PRODUCT': {
            const { id } = action as { type: string } & RemoveProductType;

            // return {...state, products: state.products.filter((p) => p.id !== action.id),};
            return {
                ...state,
                products: state.products.filter(p => p.id !== id)
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

const reducers = combineReducers({
    products: reducer,
})
export const store = configureStore({reducer: reducers});


