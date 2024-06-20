import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import data from '..//..//shop/product-list/data/getProductOne.json'

import OwlCarousel from '../../owl-carousel/owl-carousel';

import MediaFive from '../productDetailPages/utils/Media/MediaFive';
import DetailThree from '../productDetailPages/utils/Details/DetailThree';
import DescOne from '../description/DescOne';
import RelatedProducts from '../related-products';
// import ProductsSidebar from '../productDetailPages/utils/ProductsSidebar';

import { mainSlider17 } from '../../owl-carousel/data/carousel';

function ProductRightSidebar() {

    const loading = false;
    const loaded = true;
    const product = data && data.products.data;
    const related = data && product[0].related;


    return (
        <main className="main single-product">
            <Helmet>
                <title>Riode React eCommerce Template | Product With Right Sidebar</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product With Right Sidebar</h1>

            {
                product !== undefined ?
                    <div className={ `page-content mb-10 pb-6 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container skeleton-body">
                            <div className="row mt-6 gutter-lg">
                                {/* <ProductsSidebar /> */}

                                <div className="col-lg-9">
                                    <div className="product product-single row mb-4">
                                        <div className="col-md-6">
                                            <MediaFive product={ product[0] } adClass='pb-0' />
                                        </div>

                                        <div className="col-md-6">
                                            <DetailThree data={ data } />
                                        </div>
                                    </div>

                                    <DescOne product={ product } isDivider={ false } />

                                    {/* <RelatedProducts products={ related } /> */}
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body container mb-10">
                        <div className="row mt-6 gutter-lg">
                            <div className="col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper">
                                <div className="sidebar-content">
                                    <div className="widget-2"></div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="skel-pro-gallery"></div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="skel-pro-summary"></div>
                                    </div>
                                </div>

                                <div className="skel-pro-tabs"></div>

                                <section className="pt-3 mt-4">
                                    <h2 className="title justify-content-center">Related Products</h2>

                                    <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider17 }>
                                        {
                                            [ 1, 2, 3, 4, 5, 6 ].map( ( item ) =>
                                                <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                            )
                                        }
                                    </OwlCarousel>
                                </section>
                            </div>
                        </div>
                    </div>
            }
        </main>
    )
}

export default React.memo(ProductRightSidebar)