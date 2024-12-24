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
            const action = action as { type: string } & CreateProductType;

            return {...state, products: [...state.products.push(action.product)]}
        }
        case 'REMOVE_PRODUCT': {
            const action = action as { type: string } & RemoveProductType;

            return {...state, products: state.products.filter((p) => p.id !== action.id),};
        }
        default:
            return state
    }
}

const reducers = combineReducers({
    products: reducer,
})
export const store = configureStore({reducer: reducers});


