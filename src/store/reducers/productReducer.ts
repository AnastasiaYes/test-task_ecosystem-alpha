import {EditLikeType, ProductsStateType, ProductType, RemoveProductType, UpdateFilterType} from '../types/productTypes';

const initialState: ProductsStateType = getStore();

const productReducer = (state: ProductsStateType = initialState, action: {
    type: string
} & (UpdateFilterType | RemoveProductType | EditLikeType | {product: ProductType})) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const {product} = action as {type: string} & {product: ProductType };
            const newState = {...state, products: [...state.products, product]};
            saveStore(newState);

            return newState;
        }
        case 'REMOVE_PRODUCT': {
            const {id} = action as {type: string} & RemoveProductType;
            const newState = {...state, products: state.products.filter(p => p.id !== id)};
            saveStore(newState);

            return newState;
        }
        case 'EDIT_LIKE': {
            const {liked, id} = action as {type: string} & EditLikeType;
            const index = state.products.findIndex((p) => p.id === id);
            if (index === -1) return state;
            const newState = {
                ...state,
                products: state.products.map((p) => p.id !== id ? p : {...p, liked}),
            };
            saveStore(newState);

            return newState;
        }
        case 'UPDATE_FILTER': {
            const {liked, search} = action as {type: string} & UpdateFilterType;
            const newState = {
                ...state,
                filter: {liked, search}
            };
            saveStore(newState);

            return newState;
        }
        default:
            return state;
    }
};

function saveStore(state: ProductsStateType): void {
    localStorage.setItem('store', JSON.stringify(state))
}

function getStore() {
    const initialState: ProductsStateType = {
        products: [
            {
                id: 1,
                title: "Котик",
                description: "Описание котика",
                link: "https://img.freepik.com/premium-photo/cat-yawns-full-mouth_89378-382.jpg",
                liked: false,
            }
        ],
        filter: {liked: null, search: null}
    };

    const store: string | null = localStorage.getItem('store');
    if (store === null) {
        return initialState;
    }

    return JSON.parse(store);
}

export default productReducer;