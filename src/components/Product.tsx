import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ProductType} from "../store/store.ts";

function Product ({product}: {product: ProductType}) {
    return (
        <li className='product__item' key={product.id}>
            <span className='product__item-title'>{product.title}</span>
            <img className='product__item-img'
                 src={product.link}
                 alt=""/>
            <p className='product__item-description'>{product.description}</p>
            <div className='product__item_action-icons'>
                <FontAwesomeIcon icon={faTrash} className='icon icon-delete'/>
                <FontAwesomeIcon icon={faHeart} className='icon icon-heart'/>
            </div>
        </li>
    )
}

export default Product;