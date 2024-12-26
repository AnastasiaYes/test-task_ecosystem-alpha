import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faSearch} from "@fortawesome/free-solid-svg-icons";


function Filter () {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    return(
        <nav className='filter-container'>
            <div className='filter-section'>
                <FontAwesomeIcon icon={faSearch} className='icon icon-search'/>
                <input
                    type='text'
                    id='search'
                    placeholder='Search by name'
                    onChange={() => {}}
                    value={search}
                />
            </div>
            <div className='filter-section'>
                <label className='visually-hidden' htmlFor='category'>Category:</label>
                <select
                    id='category'
                    className='category-select'
                    onChange={() => {}}
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