import {useState} from "react";
import {addProduct, ProductType, store} from "../store/store.ts";
import {useDispatch, useSelector} from "react-redux";

function CreateProduct() {
    const dispatch = useDispatch();
    // const formData = useSelector((state) => state.form);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newProduct:ProductType = {
            id: Date.now(),
            title,
            description,
            link
        }
        dispatch(addProduct(newProduct));

        setTitle('');
        setDescription('');
        setLink('');
    }

    return (
        <main className='main container'>
            <h1 className='main_title'>Create Product</h1>
            <form className='product-form' onSubmit={handleSubmit} action='#' method='post' target='_blank'>
                <h2 className='product-form__title'>Form</h2>
                <ul className='product-form__list'>
                    <li className='product-form__item'>
                        <label className='product-form__label' htmlFor='name-product'>Name of Product</label>
                        <input
                            className='product-form__input'
                            type='text'
                            name='name'
                            placeholder='Excursion'
                            id='name-product'
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </li>
                    <li className='product-form__item'>
                        <label className='product-form__label' htmlFor='description-product'>Description</label>
                        <input
                            className='product-form__input'
                            type='text'
                            name='description'
                            placeholder='Enter a description'
                            id='description-product'
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            required
                        />
                    </li>
                    <li className='product-form__item'>
                        <label className='product-form__label' htmlFor='link-product'>Product Link</label>
                        <input
                            className='product-form__input'
                            type='url'
                            name='link'
                            placeholder='Enter a link'
                            id='link-product'
                            onChange={e => setLink(e.target.value)}
                            value={link}
                            pattern='https?://.*'
                            required
                        />
                    </li>
                </ul>
                <button className='product-form__submit' type='submit'>Create</button>
            </form>
        </main>
    );
}

export default CreateProduct;