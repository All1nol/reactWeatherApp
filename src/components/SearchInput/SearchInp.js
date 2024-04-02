import React,{useState} from "react";
import './SearchInp.css';
const SearchInp =  ({setCity}) => {
    const [searchingTerm, setSearchingTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(searchingTerm);
        setSearchingTerm('');
    }

    return(
        <form onSubmit={handleSubmit} className="search-input-container">
            <input
             type="text"
             value={searchingTerm}
             onChange={(e) => setSearchingTerm(e.target.value)}
             placeholder="Enter the city name"
            />
        </form>
    );
};

export default SearchInp;