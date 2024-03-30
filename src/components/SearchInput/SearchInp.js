import React,{useState} from "react";

const SearchInp =  ({setCity}) => {
    const [searchingTerm, setSearchingTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(searchingTerm);
        setSearchingTerm('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             value={searchingTerm}
             onChange={(e) => setSearchingTerm(e.target.value)}
             placeholder="Enter the city name"
            />
            <button type="submit">Search for a city</button>
        </form>
    );
};

export default SearchInp;