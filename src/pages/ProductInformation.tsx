import {ProductType} from "../store/store.ts";

function ProductInformation ({product}: {product: ProductType}) {
    return(
        <main className='main container'>
            <div className='product' key={product.id}>
                <h1 className='main_title'>{product.title}</h1>
                <img className='product_img'
                     src={product.link}
                     alt={product.title}/>
                <p className='product_description'>{product.description}</p>
            </div>
        </main>
    )
}

export default ProductInformation;