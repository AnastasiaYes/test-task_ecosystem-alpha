import {ProductType, ProductsStateType} from "../store/store.ts";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function ProductInformation () {
    const {id} =  useParams();
    const product: ProductType | undefined = useSelector((s: {products: ProductsStateType}) => s.products.products.find(p => p.id === Number(id)));

    return(
        <main className='main container'>
            {product && <div className='product' key={product.id}>
                <h1 className='main_title'>{product.title}</h1>
                <img className='product_img'
                     src={product.link}
                     alt={product.title}/>
                <p className='product_description'>{product.description}</p>
            </div>}
            {!product && <div>Product not found</div>}
        </main>
    )
}

export default ProductInformation;