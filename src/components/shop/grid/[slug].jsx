import React from 'react';
// import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';

import ShopBanner from '../ShopBanner';
import SidebarFilterOne from '../slideBar/SidebarFilterOne';
import ProductListOne from '../product-list/product-list-one';

function Shop () {
    // const router = useRouter();
    // const grid = router.query.grid;
    const grid = window.location.pathname.split('/')[3];
    const gridTypes = { "3cols": 3, "4cols": 4, "5cols": 5, "6cols": 6, "7cols": 7, "8cols": 8 };

    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Page Grid { grid }</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Page Grid { grid }</h1>

            <ShopBanner />

            <div className="page-content mb-10 pb-3">
                <div className={ gridTypes[ grid ] < 6 ? 'container' : 'container-fluid' }>
                    <div className={ gridTypes[ grid ] < 5 ? 'row gutter-lg main-content-wrap' : 'main-content' }>
                        {
                            gridTypes[ grid ] < 5 ?
                                <>
                                    <SidebarFilterOne />
                                    <div className="col-lg-9 main-content">
                                        <ProductListOne itemsPerRow={ gridTypes[ grid ] } />
                                    </div>
                                </> :
                                <>
                                    <ProductListOne itemsPerRow={ gridTypes[ grid ] } type="off-canvas" />
                                    <SidebarFilterOne type="off-canvas" />
                                </>
                        }
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo( Shop );