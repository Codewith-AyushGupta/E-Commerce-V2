import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate  } from 'react-router-dom';
import queryString from 'query-string';

import ALink from '../custom-link';
import ShopBanner from './ShopBanner';
import ToolBox from './ToolBox';
import ProductListOne from './product-list/product-list-one';

import filterData from '../utils/data/shop';

function ShopHorizontalFilter() {
    const location = useLocation();
    const history = useNavigate ();
    const query = queryString.parse(location.search);

    // Hardcoded default query values
    const defaultQuery = {
        sizes: 'large,medium',
        colors: 'red,blue',
        min_price: '50',
        max_price: '200'
    };

    // Merge the actual query with the default query values
    const effectiveQuery = { ...defaultQuery, ...query };

    const prices = [
        { min: '0', max: '50' },
        { min: '50', max: '100' },
        { min: '100', max: '200' },
        { min: '200', max: '' }
    ];

    const containsAttrInUrl = (type, value) => {
        const currentQueries = effectiveQuery[type] ? effectiveQuery[type].split(',') : [];
        return currentQueries && (currentQueries.includes(value) || (type === 'max_price' && value === '') || (type === 'min_price' && value === ''));
    };

    const getUrlForAttrs = (type, value) => {
        let currentQueries = effectiveQuery[type] ? effectiveQuery[type].split(',') : [];
        currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : (type === 'min_price' || type === 'max_price') ? [value] : [...currentQueries, value];
        return currentQueries.join(',');
    };

    const selectFilterHandler = (event, type, value) => {
        event.preventDefault();
        const newQuery = { ...effectiveQuery, [type]: getUrlForAttrs(type, value), page: 1 };
        history.push(`${location.pathname}?${queryString.stringify(newQuery)}`);
    };

    const cleanAllHandler = (event) => {
        event.preventDefault();
        history.push(location.pathname);
    };

    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Horizontal Filter</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Horizontal Filter</h1>

            <ShopBanner subTitle="Categories" title="Horizontal Filter" current="Horizontal Filter" />

            <div className="page-content mb-lg-10 mb-0 pb-lg-3 pb-0">
                <div className="container">
                    <ToolBox type="horizontal" />

                    <div className="select-items">
                        {filterData.sizes.map((item, index) =>
                            containsAttrInUrl('sizes', item.slug) ? (
                                <ALink
                                    className="select-item"
                                    href="#"
                                    onClick={(event) => selectFilterHandler(event, 'sizes', item.slug)}
                                    key={item + ' - ' + index}
                                    scroll={false}
                                >
                                    {item.name}
                                    <i className="d-icon-times"></i>
                                </ALink>
                            ) : null
                        )}
                        {filterData.colors.map((item, index) =>
                            containsAttrInUrl('colors', item.slug) ? (
                                <ALink
                                    className="select-item"
                                    href="#"
                                    onClick={(event) => selectFilterHandler(event, 'colors', item.slug)}
                                    key={item + ' - ' + index}
                                    scroll={false}
                                >
                                    {item.name}
                                    <i className="d-icon-times"></i>
                                </ALink>
                            ) : null
                        )}
                        {prices.map((price, index) =>
                            containsAttrInUrl('min_price', price.min) && containsAttrInUrl('max_price', price.max) ? (
                                <ALink
                                    className="select-item"
                                    href="#"
                                    onClick={(event) => selectFilterHandler(event, 'min_price', price.min)}
                                    key={price + ' - ' + index}
                                    scroll={false}
                                >
                                    {price.max === '' ? `$${price.min}.00 +` : `$${price.min}.00 - $${price.max}.00`}
                                    <i className="d-icon-times"></i>
                                </ALink>
                            ) : null
                        )}
                        <ALink
                            href="#"
                            className="filter-clean text-primary"
                            onClick={cleanAllHandler}
                            scroll={false}
                        >
                            Clean All
                        </ALink>
                    </div>

                    <div className="row main-content-wrap gutter-lg">
                        <div className="main-content">
                            <ProductListOne isToolbox={false} itemsPerRow={4} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default React.memo(ShopHorizontalFilter);
