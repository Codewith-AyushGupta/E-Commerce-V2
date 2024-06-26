import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import data from '..//..//shop/product-list/data/getProductOne.json'

import OwlCarousel from '../../owl-carousel/owl-carousel';

import MediaOne from '../productDetailPages/utils/Media/MediaOne';
import DetailOne from '../productDetailPages/utils/Details/detail-one';
import DescOne from '../description/DescOne';
import RelatedProducts from '../related-products';

import { mainSlider17 } from '../../owl-carousel/data/carousel';

function ProductDefault() {
    const loaded = true;
    const loading = false;
    const product = data && data.products.data;
    const related = data && product[0].related;


    useEffect( () => {
        window.addEventListener( 'scroll', stickyContentHandler, true );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandler, true );
        }
    }, [] )

    const stickyContentHandler = () => {
        let stickyContent = document.querySelector( '.product-sticky-content' );
        let height = 0;
        let offsetHeight = 0;

        if ( stickyContent ) {
            height = stickyContent.offsetHeight;

            if ( window.scrollY > 600 && window.innerWidth > 991 ) {
                stickyContent.classList.add( 'fixed' );
                if ( document.querySelector( '.sticky-header.sticky-content' ) )
                    offsetHeight = document.querySelector( '.sticky-header.sticky-content' ).offsetHeight;
                else offsetHeight = 88;

                if ( !document.querySelector( '.sticky-product-wrapper' ) ) {
                    let stickyWrapper = document.createElement( 'div' );
                    stickyWrapper.className = "sticky-product-wrapper";
                    stickyContent.parentNode.insertBefore( stickyWrapper, stickyContent );
                    document.querySelector( '.sticky-product-wrapper' ).insertAdjacentElement( 'beforeend', stickyContent );
                    document.querySelector( '.sticky-product-wrapper' ).setAttribute( "style", "height: " + height + "px" );
                }

                if ( !document.querySelector( '.sticky-product-wrapper' ).getAttribute( "style" ) ) {
                    document.querySelector( '.sticky-product-wrapper' ).setAttribute( "style", "height: " + height + "px" );
                }
                document.querySelector( '.product-sticky-content' ).setAttribute( 'style', `top: ${ offsetHeight }px` );
            } else {
                if ( document.querySelector( '.sticky-product-wrapper' ) ) {
                    document.querySelector( '.sticky-product-wrapper' ).setAttribute( "style", "" );
                }
                document.querySelector( '.product-sticky-content' ).classList.remove( 'fixed' );
            }
        }
    }

    return (
        <main className="main mt-6 single-product">
            <Helmet>
                <title>Riode React eCommerce Template | Product Default</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Default</h1>

            {
                product !== undefined ?
                    <div className={ `page-content mb-10 pb-6 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container skeleton-body vertical">
                            <div className="product product-single row mb-7">
                                <div className="col-md-6 sticky-sidebar-wrapper">
                                    <f product={ product[0] } />
                                </div>

                                <div className="col-md-6">
                                    <DetailOne data={ data } isStickyCart={ true } adClass="mt-4 mt-md-0" />
                                </div>
                            </div>

                            <DescOne product={ product } isGuide={ false } />

                            <RelatedProducts products={ related } />
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body container mb-10">
                        <div className="row mb-7">
                            <div className="col-md-6 pg-vertical sticky-sidebar-wrapper">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="col-md-6">
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

export default React.memo(ProductDefault);