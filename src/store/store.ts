import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    products: productReducer
});

export const store = configureStore({
    reducer: rootReducer
});