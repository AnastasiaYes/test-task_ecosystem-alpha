import Product from "../components/Product.tsx";
import {ProductType, store} from "../store/store.ts";

function ProductsMain () {
    const products = store.getState().products?.products as ProductType[] | undefined;
    return(
        <main className='main container'>
            <h1 className='main_title'>Products</h1>
            <ul className='main_card-list'>
                {products?.map((p: ProductType) => {
                    return <Product key={p.id} product={p}/>;
                })}
            </ul>
        </main>
    )
}

export default ProductsMain;