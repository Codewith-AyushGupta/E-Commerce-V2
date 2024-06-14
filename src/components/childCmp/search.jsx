import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function SearchForm() {
    const history = useNavigate();
    
    return (
        <div className="header-search hs-simple">
            <a href="#" className="search-toggle" role="button"><i className="icon-search-3"></i></a>
            <form action="#" method="get" className="input-wrapper">
                <input type="text" className="form-control customColor" name="search" autoComplete="off" placeholder="Search..." required />

                <button className="btn btn-search" type="submit">
                <i className="d-icon-search"></i>
                </button>

                <div className="live-search-list bg-white scrollable">
                    {/* Your search results UI */}
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
