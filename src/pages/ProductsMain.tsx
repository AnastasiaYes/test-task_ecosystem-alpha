import Product from "../components/Product.tsx";

function ProductsMain () {
    return(
        <main className='main container'>
            <h1 className='main_title'>Products</h1>
            <ul className='main_card-list'>
                <Product />
            </ul>
        </main>
    )
}

export default ProductsMain;