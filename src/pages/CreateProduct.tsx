import {FormEventHandler, useState} from "react";
import {addProduct} from "../store/actions/productActions.ts";
import {ProductType} from "../store/types/productTypes.ts";
import {toast, ToastContainer} from "react-toastify";
import {store} from "../store/store.ts";

function CreateProduct() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();
        const newProduct:ProductType = {
            id: Date.now(),
            title,
            description,
            link,
            liked: false
        }
        store.dispatch(addProduct(newProduct));

        toast.success('Product created successfully!');

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
            <ToastContainer />
        </main>
    );
}

export default CreateProduct;