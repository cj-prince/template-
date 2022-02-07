import React, {useState} from 'react'
import { useGlobalContext } from '../context'
import imgSearch from '../search.svg'

const SearchForm = ({ placeholder, data }) => {
    const {setTemplate}= useGlobalContext([])
    const [searchTerm, setSearchTerm] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setSearchTerm(searchWord);
        const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
        setTemplate([]);
        } else {
        setTemplate(newFilter);
        }
    };

    const clearInput = () => {
        setTemplate([]);
        setSearchTerm("");
    };

    return (
        <div className="search">
            <div className="search-form">
                <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleFilter}
                className='form-control'
                />
                <div className="searchIcon">
                    <img src={imgSearch} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SearchForm

