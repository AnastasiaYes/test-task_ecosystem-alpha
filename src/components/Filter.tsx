import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {store, updateFilter} from "../store/store.ts";

function Filter () {
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        store.dispatch(
            updateFilter(
                category === '' ? null : true,
                search === '' ? null : search
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
            <div className='filter-section'>
                <label className='visually-hidden' htmlFor='category'>Category:</label>
                <select
                    id='category'
                    className='category-select'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option value=''>All products</option>
                    <option value='liked'>Liked</option>
                </select>
            </div>
        </nav>
    )
}

export default Filter;