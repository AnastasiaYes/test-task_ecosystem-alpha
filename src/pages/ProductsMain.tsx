import Product from "../components/Product.tsx";
import {editLike, ProductType, store} from "../store/store.ts";
import {useSelector} from "react-redux";

function ProductsMain () {
    const products = useSelector(state => state.products.products) as ProductType[] | undefined;

    return(
        <main className='main container'>
            <h1 className='main_title'>Products</h1>
            <ul className='main_card-list'>
                {products?.map((p: ProductType) => {
                    return <Product key={p.id} product={p} updLiked={() => store.dispatch(editLike(p.id, !p.liked))}/>;
                })}
            </ul>
        </main>
    )
}

export default ProductsMain;