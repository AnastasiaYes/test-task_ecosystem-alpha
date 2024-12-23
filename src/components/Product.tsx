import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faTrash} from "@fortawesome/free-solid-svg-icons";

export type Product = {

};

function Product () {
    return (
        <li className='product__item'>
            <span className='product__item-title'>Картинка</span>
            <img className='product__item-img'
                 src="https://masterpiecer-images.s3.yandex.net/b2d91936767a11eeb11ee6d39d9a42a4:upscaled"
                 alt=""/>
            <p className='product__item-description'>Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на
                каком-либо материальном
                носителе человеческая мысль; в общем плане связная и полная последовательность символов.</p>
            <div className='product__item_action-icons'>
                <FontAwesomeIcon icon={faTrash} className='icon icon-delete'/>
                <FontAwesomeIcon icon={faHeart} className='icon icon-heart'/>
            </div>
        </li>
    )
}

export default Product;