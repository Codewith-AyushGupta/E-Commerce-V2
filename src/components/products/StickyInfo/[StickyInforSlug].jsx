import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import data from '..//..//shop/product-list/data/getProductOne.json'

import OwlCarousel from '../../owl-carousel/owl-carousel';

import MediaSix from '../productDetailPages/utils/Media/MediaSix';
import DetailFive from '../productDetailPages/utils/Details/DetailFive';
import RelatedProducts from '../related-products';

import { mainSlider17 } from '../../owl-carousel/data/carousel';

function ProductStickyInfo() {

    const loading = false
    const product = data && data.products.data;
    const related = data && product[0].related;
    const loaded = true;
    return (
        <main className="main mt-6 single-product product-sticky-info">
            <Helmet>
                <title>Riode React eCommerce Template | Product Sticky Info</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Sticky Info</h1>

            {
                product?
                    <div className={ `page-content mb-10 pb-6 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container skeleton-body">
                            <div className="product product-single row">
                                <div className="col-md-6">
                                    <MediaSix product={ product[0] } />
                                </div>

                                <div className="col-md-6">
                                    <DetailFive data={ data } isDesc={ true } isGuide={ true } isSticky={ true } />
                                </div>
                            </div>

                            <RelatedProducts products={ related } adClass="pt-3 mt-2" />
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body sticky-info container mb-10">
                        <div className="row">
                            <div className="col-md-6 sticky-sidebar-wrapper">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="col-md-6">
                                <div className="product-details sticky">
                                    <div className="skel-pro-summary mt-4 mt-md-0"></div>
                                    <div className="skel-pro-tabs"></div>
                                </div>
                            </div>
                        </div>

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
            }
        </main>
    )
}

export default React.memo(ProductStickyInfo);