import Product from "../components/Product.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function ProductsMain () {
    return(
        <main className='main container'>
            <h1 className='main_title'>Products</h1>
            <ul className='main_card-list'>
                <li className='project'>
                    <span className='project_title'>Картинка</span>
                    <img className='project_img'
                         src="https://masterpiecer-images.s3.yandex.net/b2d91936767a11eeb11ee6d39d9a42a4:upscaled"
                         alt=""/>
                    <p className='project_description'>Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном
                        носителе человеческая мысль; в общем плане связная и полная последовательность символов.</p>
                    <div className='project_action-icons'>
                        <FontAwesomeIcon icon={faTrash} className='icon icon-delete' />
                        <FontAwesomeIcon icon={faHeart} className='icon icon-heart' />
                    </div>
                </li>
                <li className='project'>
                    <h3 className='project_title'>Картинка</h3>
                    <img className='project_img'
                         src="https://masterpiecer-images.s3.yandex.net/b2d91936767a11eeb11ee6d39d9a42a4:upscaled"
                         alt=""/>
                    <p>Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном
                        носителе человеческая мысль; в общем плане связная и полная последовательность символов.</p>
                </li>
                <li className='project'>
                    <h3 className='project_title'>Картинка</h3>
                    <img className='project_img'
                         src="https://masterpiecer-images.s3.yandex.net/b2d91936767a11eeb11ee6d39d9a42a4:upscaled"
                         alt=""/>
                    <p>Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном
                        носителе человеческая мысль; в общем плане связная и полная последовательность символов.</p>
                </li>
                <li className='project'>
                    <h3 className='project_title'>Картинка</h3>
                    <img className='project_img'
                         src="https://masterpiecer-images.s3.yandex.net/b2d91936767a11eeb11ee6d39d9a42a4:upscaled"
                         alt=""/>
                    <p>Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном
                        носителе человеческая мысль; в общем плане связная и полная последовательность символов.</p>
                </li>
            </ul>
        </main>
    )
}

export default ProductsMain;