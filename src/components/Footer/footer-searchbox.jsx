import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../custom-link';
function SearchForm() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(null);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        document.querySelector("body").addEventListener("click", onBodyClick);

        return () => {
            document.querySelector("body").removeEventListener("click", onBodyClick);
        };
    }, []);

    useEffect(() => {
        setSearch("");
    }, []);

    useEffect(() => {
        if (search.length > 2) {
            if (timer) clearTimeout(timer);
            let timerId = setTimeout(() => {
                fetchProducts(search);
                setTimer(null);
            }, 500);

            setTimer(timerId);
        }
    }, [search]);

    function fetchProducts(query) {
        // Replace with actual data fetching logic
        fetch(`/api/products?search=${query}`)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.error('Error fetching products:', error));
    }

    function removeXSSAttacks(html) {
        const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        while (SCRIPT_REGEX.test(html)) {
            html = html.replace(SCRIPT_REGEX, "");
        }
        html = html.replace(/ on\w+="[^"]*"/g, "");
        return { __html: html };
    }

    function matchEmphasize(name) {
        let regExp = new RegExp(search, "i");
        return name.replace(
            regExp,
            (match) => "<strong>" + match + "</strong>"
        );
    }

    function onSearchClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.parentNode.classList.toggle('show');
    }

    function onBodyClick(e) {
        if (e.target.closest('.header-search')) {
            return e.target.closest('.header-search').classList.contains('show-results') || e.target.closest('.header-search').classList.add('show-results');
        }

        document.querySelector('.header-search.show') && document.querySelector('.header-search.show').classList.remove('show');
        document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    function onSubmitSearchForm(e) {
        e.preventDefault();
        // Replace with actual navigation logic
        window.location.href = `/shop?search=${search}`;
    }

    return (
        <div className="header-search hs-toggle dir-up">
            <a href="#" className="search-toggle sticky-link" role="button" onClick={onSearchClick}>
                <i className="d-icon-search"></i>
                <span>Search</span>
            </a>
            <form action="#" method="get" onSubmit={onSubmitSearchForm} className="input-wrapper">
                <input type="text" className="form-control" name="search" autoComplete="off" value={search} onChange={onSearchChange}
                    placeholder="Search..." required />

                <button className="btn btn-search" type="submit">
                    <i className="d-icon-search"></i>
                </button>

                <div className="live-search-list bg-white">
                    {search.length > 2 && data && data.products && data.products.data.map((product, index) => (
                        <ALink href={`/product/default/${product.slug}`} className="autocomplete-suggestion" key={`search-result-${index}`}>
                            <LazyLoadImage src={ product.pictures[0].url} width={40} height={40} alt="product" />
                            <div className="search-name" dangerouslySetInnerHTML={removeXSSAttacks(matchEmphasize(product.name))}></div>

                            <span className="search-price">
                                {product.price[0] !== product.price[1] ?
                                    product.variants.length === 0 ?
                                        <>
                                            <span className="new-price mr-1">${product.price[0].toFixed(2)}</span>
                                            <span className="old-price">${product.price[1].toFixed(2)}</span>
                                        </>
                                        :
                                        <span className="new-price">${product.price[0].toFixed(2)} – ${product.price[1].toFixed(2)}</span>
                                    : <span className="new-price">${product.price[0].toFixed(2)}</span>
                                }
                            </span>
                        </ALink>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
