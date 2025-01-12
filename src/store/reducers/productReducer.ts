import {EditLikeType, ProductsStateType, ProductType, RemoveProductType, UpdateFilterType} from '../types/productTypes';

const initialState: ProductsStateType = getStore();

const
    productReducer = (state: ProductsStateType = initialState, action: {
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
            const {liked, search, currentPage, itemsPerPage} = action as {type: string} & UpdateFilterType;
            const newState = {
                ...state,
                filter: {...state.filter, liked, search, currentPage, itemsPerPage}
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
                title: "Котик 1",
                description: "Описание котика",
                link: "https://img.freepik.com/premium-photo/cat-yawns-full-mouth_89378-382.jpg",
                liked: false,
            },
            {
                id: 2,
                title: "Котик 2",
                description: "Описание котика",
                link: "https://img.freepik.com/premium-photo/cat-yawns-full-mouth_89378-382.jpg",
                liked: false,
            },
            {
                id: 3,
                title: "Котик 3",
                description: "Описание котика",
                link: "https://img.freepik.com/premium-photo/cat-yawns-full-mouth_89378-382.jpg",
                liked: false,
            },
            {
                id: 4,
                title: "Котик 4",
                description: "Описание котика",
                link: "https://img.freepik.com/premium-photo/cat-yawns-full-mouth_89378-382.jpg",
                liked: false,
            },
            {
                id: 5,
                title: "Котик 5",
                description: "Описание котика",
                link: "https://img.freepik.com/premium-photo/cat-yawns-full-mouth_89378-382.jpg",
                liked: false,
            },
        ],
        filter: {liked: null, search: null, currentPage: 1, itemsPerPage: 2}
    };

    const store: string | null = localStorage.getItem('store');
    if (store === null) {
        return initialState;
    }

    return JSON.parse(store);
}

export default productReducer;