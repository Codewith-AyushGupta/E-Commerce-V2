import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import data from '..//..//shop/product-list/data/getProductOne.json'

import ALink from '../../custom-link';
import OwlCarousel from '../../owl-carousel/owl-carousel';

import MediaSix from '../productDetailPages/utils/Media/MediaSix';
import DetailLeft from '../productDetailPages/utils/Details/detail-left';
import DetailRight from '../productDetailPages/utils/Details/detail-right';
import DescOne from '../description/DescOne';
import RelatedProducts from '../related-products';
import ProductNav from '../productDetailPages/utils/product-nav';

import { mainSlider17 } from '../../owl-carousel/data/carousel';

function ProductStickyBoth() {
    const loading = false
    const loaded = true
    const product = data && data.products.data;
    const related = data && product[0].related;

   
    return (
        <main className="main single-product product-sticky-both">
            <Helmet>
                <title>Riode React eCommerce Template | Product Sticky Both</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Sticky Both</h1>

            {
                product?
                    <div className={ `page-content mb-10 pb-6 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container skeleton-body">
                            <div className="product-navigation">
                                <ul className="breadcrumb breadcrumb-lg">
                                    <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                                    <li><ALink href="#" className="active">Products</ALink></li>
                                    <li>Detail</li>
                                </ul>

                                <ProductNav product={ data.products } />
                            </div>

                            <div className="product product-single product-sticky-both mb-8">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <MediaSix product={ product[0] } adClass="col-lg-12 col-sm-6" />
                                    </div>

                                    <div className="col-lg-3 col-md-6 order-lg-first">
                                        <DetailLeft data={ data } isSticky={ true } />
                                    </div>

                                    <div className="col-lg-3 col-md-6">
                                        <DetailRight data={ data } isSticky={ true } />
                                    </div>
                                </div>
                            </div>

                            <DescOne product={ product } />

                            <RelatedProducts products={ related } adClass="pt-3 mt-2" />
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body sticky-both container mt-10 pt-3 mb-10">
                        <div className="row p-relative">
                            <div className="woocommerce-product-gallery sticky col-lg-6 mt-3">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="product-details sticky">
                                <div className="skel-pro-summary mt-4 mt-md-0"></div>
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
            }
        </main>
    )
}

export default React.memo(ProductStickyBoth)