import Product from "../components/Product.tsx";
import {editLike, ProductType, removeProduct, store} from "../store/store.ts";
import {useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import Filter from "../components/Filter.tsx";


function ProductsMain () {
    //todo отфильтровать с помощью array.filter(...) в соответсвтии с фильтром из стора ( то есть по одному полю product.liked )
    const products = useSelector(state => state.products.products) as ProductType[] | undefined;

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
            <Filter />
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
            <ToastContainer />
        </main>
    )
}

export default ProductsMain;