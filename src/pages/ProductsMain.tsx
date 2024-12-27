import Product from "../components/Product.tsx";
import {store} from "../store/store.ts";
import {
    ProductsStateType,
    ProductType,
} from "../store/types/productTypes.ts";
import {
    editLike,
    removeProduct
} from "../store/actions/productActions.ts";
import {useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import Filter from "../components/Filter.tsx";
import {useEffect} from "react";


function ProductsMain () {
    let products = useSelector((state: {products: ProductsStateType}) => state.products.products) as ProductType[] | undefined;
    const filter = (useSelector((state: {products: ProductsStateType}) => state.products) as ProductsStateType).filter;

    useEffect(() => {
        if (filter) {
            localStorage.setItem('filter', JSON.stringify(filter));
        }
    }, [filter]);


    if (filter.liked !== null && Array.isArray(products)) {
        products = products.filter((p: ProductType) => p.liked === filter.liked);
    }

    if (filter.search !== null && filter.search.length > 0 && Array.isArray(products)) {
        products = products.filter((p: ProductType) => p.title.toLowerCase().includes(filter.search?.toLowerCase() || ''))
    }

    const handleDeleteWithConfirmation = (product: ProductType) => {
        const notify = () =>
            toast.warning(
                <div className='toast-body'>
                    <p className='toast-message'>Are you sure you want to delete "{product.title}"?</p>
                    <div className='toast-buttons'>
                        <button
                            onClick={() => {
                                store.dispatch(removeProduct(product.id));
                                toast.dismiss();
                            }}
                            className='toast-btn'
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => toast.dismiss()}
                            className='toast-btn'
                        >
                            No
                        </button>
                    </div>
                </div>,
                {
                    position: "top-right",
                    autoClose: false,
                    icon: false
                }
            );

        notify();
    };

    return (
        <main className='main container'>
            <h1 className='main_title'>Products</h1>
            <Filter/>
            <ul className='main_card-list'>
                {products?.map((p: ProductType) => {
                    return <Product
                        key={p.id}
                        product={p}
                        updLiked={() => store.dispatch(editLike(p.id, !p.liked))}
                        deleteCard={() => handleDeleteWithConfirmation(p)}
                    />;
                })}
            </ul>
            <ToastContainer/>
        </main>
    )
}

export default ProductsMain;