import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ProductType} from "../store/store.ts";
import {MouseEventHandler} from "react";
import {NavLink} from "react-router-dom";


function Product ({product, updLiked, deleteCard}: {product: ProductType, updLiked: MouseEventHandler | undefined, deleteCard: MouseEventHandler | undefined}) {

    return (
        <li className='product__item' key={product.id}>
            <NavLink to={'/products/' + product.id} >
                <span className='product__item-title'>{product.title}</span>
                <div className='product__item-img-wrapper'>
                    <img className='product__item-img'
                         src={product.link}
                         alt={product.title}/>
                </div>
                <p className='product__item-description'>{product.description}</p>
            </NavLink>
            <div className='product__item_action-icons'>
                <FontAwesomeIcon icon={faTrash} onClick={deleteCard} className='icon icon-delete'/>
                <FontAwesomeIcon icon={faHeart} onClick={updLiked}
                                 className={`icon icon-heart ${product.liked ? 'isActive' : ''}`}/>
            </div>
        </li>
    )
}

export default Product;