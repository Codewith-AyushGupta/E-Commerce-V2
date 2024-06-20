import React from 'react';
import { Helmet } from 'react-helmet';

import ShopBanner from './ShopBanner';
import SidebarFilterOne from './slideBar/SidebarFilterOne';
import ProductListOne from './product-list/product-list-one';

function InfiniteScroll () {
    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Ajax Infinite Scroll</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Ajax Infinite Scroll</h1>

            <ShopBanner />

            <div className="page-content mb-10 pb-3">
                <div className="container">
                    <div className="row main-content-wrap gutter-lg">
                        <SidebarFilterOne />

                        <div className="col-lg-9 main-content">
                            <ProductListOne />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo( InfiniteScroll );