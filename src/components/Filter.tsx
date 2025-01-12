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

    useEffect(() => {
        store.dispatch(
            updateFilter(
                category === '' ? null : true,
                search === '' ? null : search,
                1,
                filter.itemsPerPage,
            )
        );
    },[search, category]);

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
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        <option value=''>4</option>
                        <option value='eight'>8</option>
                        <option value='twelve'>12</option>
                        <option value='sixteen'>16</option>
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