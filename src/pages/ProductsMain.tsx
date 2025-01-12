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
import Pagination from "../components/Pagination.tsx";


// отображение продуктов, соответствующих пагинации, опираясь на itemsPerPage + currentPage
// при измении фильтра, изменять и пагинацию(т.к. количество может имзениться)
// отобразить количество элементво на странице, общее количество элементов
// дать возможность менять кол-во элементов на странице
function ProductsMain () {
    let products = useSelector((state: {products: ProductsStateType}) => state.products.products) as ProductType[] | undefined;
    const filter = (useSelector((state: {products: ProductsStateType}) => state.products) as ProductsStateType).filter;

    if (filter.liked !== null && Array.isArray(products)) {
        products = products.filter((p: ProductType) => p.liked === filter.liked);
    }

    if (filter.search !== null && filter.search.length > 0 && Array.isArray(products)) {
        products = products.filter((p: ProductType) => p.title.toLowerCase().includes(filter.search?.toLowerCase() || ''))
    }

    // const totalPages = Math.ceil(products?.length / filter.itemsPerPage);
    const indexOfLastItem = filter.currentPage * filter.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - filter.itemsPerPage;
    const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);


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
                {currentItems?.map((p: ProductType) => {
                    return <Product
                        key={p.id}
                        product={p}
                        updLiked={() => store.dispatch(editLike(p.id, !p.liked))}
                        deleteCard={() => handleDeleteWithConfirmation(p)}
                    />;
                })}
            </ul>
            {/*<ul className='main_card-list'>*/}
            {/*    {currentItems?.map((p: ProductType)  => (*/}
            {/*        return <Product*/}
            {/*            key={p.id}*/}
            {/*            product={p}*/}
            {/*            updLiked={() => store.dispatch(editLike(p.id, !p.liked))}*/}
            {/*            deleteCard={() => handleDeleteWithConfirmation(p)}*/}
            {/*        />;*/}
            {/*))}*/}
            {/*</ul>*/}
            <Pagination/>
            <ToastContainer/>
        </main>
    )
}

export default ProductsMain;