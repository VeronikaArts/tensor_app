import React, {useState} from 'react';
import searchForm from './index.module.css';

const SearchForm = (props) => {
    const [searchValue, setSearchValue] = useState('');

    function toSearch(e){
        e.preventDefault();
        props.toSearch(searchValue);
    }

    return (
        <form className={searchForm.main}>
            <input
                className={searchForm.input}
                type="search"
                placeholder="Search"
                onChange={e => setSearchValue(e.target.value)}
            />
            <button onClick={e => toSearch(e)} type="submit" className={searchForm.btn}>
                Search
            </button>
        </form>
    );
};

export default SearchForm;