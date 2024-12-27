import {ProductType, ProductsStateType} from "../store/types/productTypes.ts";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function ProductInformation () {
    const {id} =  useParams();
    const product: ProductType | undefined = useSelector((s: {products: ProductsStateType}) => s.products.products.find(p => p.id === Number(id)));

    return(
        <main className='main container'>
            <button className="back-button" onClick={() => window.history.back()}>Back</button>
            {product && <div className='product' key={product.id}>
                <div className='product_img-wrapper'>
                    <img className='product_img'
                         src={product.link}
                         alt={product.title}/>
                </div>
                <div className='product_text-wrapper'>
                    <h1 className='main_title product_main_title'>{product.title}</h1>
                    <p className='product_description'>{product.description}</p>
                </div>
            </div>}
            {!product && <div>Product not found</div>}
        </main>
    )
}

export default ProductInformation;