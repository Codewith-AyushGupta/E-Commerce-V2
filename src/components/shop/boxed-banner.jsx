import React from 'react';
import { Helmet } from 'react-helmet';

import ALink from '../custom-link';

import SidebarFilterOne from './slideBar/SidebarFilterOne';
import ProductListOne from './product-list/product-list-one';

function ShopBoxedBanner() {
    return (
        <main className="main">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Boxed Banner Page</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Boxed Banner Page</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>Shop</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content mb-10 pb-3">
                <div className="container">
                    <div className="banner shop-banner"
                        style={ { backgroundImage: `url(./images/home/shop_banner.jpg)`, backgroundColor: "#edeff0" } }>
                        <div className="banner-content w-100 pl-3 text-right text-uppercase">
                            <h4 className="banner-subtitle font-weight-bold text-uppercase mb-2">24 Hours Only</h4>
                            <h1 className="banner-title mb-3 text-uppercase font-weight-normal">Flash <strong>Sale</strong>
                            </h1>
                            <div className="banner-price-info mb-3 text-dark"><strong>Up to 70</strong>% Discount</div>
                            <p className="d-inline-block mb-6 font-primary text-secondary text-uppercase bg-dark">
                                Promocode:<strong className="text-normal"> Riode 20</strong></p><br />
                            <ALink href="#" className="btn btn-link btn-underline">Shop now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>

                    <div className="row gutter-lg mt-6">
                        <SidebarFilterOne type="boxed" />

                        <div className="col-lg-9">
                            <ProductListOne type="boxed" />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo( ShopBoxedBanner );