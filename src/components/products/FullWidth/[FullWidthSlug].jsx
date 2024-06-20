import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import data from '..//..//shop/product-list/data/getProductOne.json'

import ALink from '../../custom-link';
import OwlCarousel from '../../owl-carousel/owl-carousel';

import MediaFive from '../productDetailPages/utils/Media/MediaFive';
import DetailFive from '../productDetailPages/utils/Details/DetailFive';
import RelatedProducts from '../related-products';
import ProductNav from '../productDetailPages/utils/product-nav';
// import ProductSidebar from '~/components/partials/product/product-sidebar';

import { mainSlider17 } from '../../owl-carousel/data/carousel';

function ProductFullWidth() {
    const loading = false
    const [ loaded, setLoadingState ] = useState( true );
    const product = data && data.products.data;
    const related = product[0].related;

    // useEffect( () => {
    //     if ( !loading && product )
    //         imagesLoaded( 'main' ).on( 'done', function () {
    //             setLoadingState( true );
    //         } ).on( 'progress', function () {
    //             setLoadingState( false );
    //         } );
    //     if ( loading )
    //         setLoadingState( false )
    // }, [ loading, product ] )

    return (
        <main className="main single-product">
            <Helmet>
                <title>Riode React eCommerce Template | Product Fullwidth</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Fullwidth</h1>

            {
                product  ?
                    <div className={ `page-content mb-10 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container-fluid skeleton-body">
                            <div className="product-navigation">
                                <ul className="breadcrumb breadcrumb-lg">
                                    <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                                    <li><ALink href="#" className="active">Products</ALink></li>
                                    <li>Detail</li>
                                </ul>

                                <ProductNav product={ data.products } />
                            </div>

                            <div className="row gutter-lg">
                                {/* <ProductSidebar adClass="col-xxl-2" /> */}

                                <div className="col-lg-9 col-xxl-10">
                                    <div className="product product-single row">
                                        <div className="col-md-6">
                                            <MediaFive product={ product[0] } />
                                        </div>

                                        <div className="col-md-6">
                                            <DetailFive data={ data } isDesc={ true } isProductNav={ false } />
                                        </div>
                                    </div>

                                    <RelatedProducts products={ related } adClass="pt-3" />
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body container-fluid mt-10 pt-3 mb-10">
                        <div className="row gutter-lg">
                            <div className="col-lg-3 col-xxl-2 right-sidebar sidebar-fixed sticky-sidebar-wrapper">
                                <div className="sidebar-content">
                                    <div className="widget-2"></div>
                                </div>
                            </div>

                            <div className="col-lg-9 col-xxl-10">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="skel-pro-gallery"></div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="skel-pro-summary"></div>
                                        <div className="skel-pro-tabs"></div>
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
                        </div>
                    </div>
            }
        </main>
    )
}

export default React.memo(ProductFullWidth)