import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {store} from "../store/store.ts";
import {updateFilter} from '../store/actions/productActions.ts'
import {useSelector} from "react-redux";
import {ProductsStateType} from "../store/types/productTypes.ts";

function Filter () {
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const { filter } = useSelector((state: {products: ProductsStateType }) => state.products);
    const [itemsPerPage, setItemsPerPage] = useState<number>(filter.itemsPerPage);

    useEffect(() => {
        store.dispatch(
            updateFilter(
                category === '' ? null : true,
                search === '' ? null : search,
                1,
                itemsPerPage,
            )
        );
    },[search, category, itemsPerPage]);

    return(
        <nav className='filter-container'>
            <div className='filter-section'>
                <FontAwesomeIcon icon={faSearch} className='icon icon-search'/>
                <input
                    type='text'
                    id='search'
                    placeholder='Search by name'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </div>

            <div className='filter-options'>
                <div className='filter-number'>
                    <label className='visually-hidden' htmlFor='category'>Number products:</label>
                    <select
                        id='category-number'
                        className='category-number'
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                        <option value='2'>2</option>
                        <option value='4'>4</option>
                        <option value='8'>8</option>
                        <option value='12'>12</option>
                        <option value='16'>16</option>
                    </select>
                </div>

                <div className='filter-section'>
                    <label className='visually-hidden' htmlFor='category'>Category:</label>
                    <select
                        id='category-select'
                        className='category-select'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        <option value=''>All products</option>
                        <option value='liked'>Liked</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Filter;