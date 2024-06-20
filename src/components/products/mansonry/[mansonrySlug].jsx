import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import data from '..//..//shop/product-list/data/getProductOne.json'

import OwlCarousel from '../../owl-carousel/owl-carousel';

import MediaThree from '../productDetailPages/utils/Media/MediaThree';
import DetailThree from '../productDetailPages/utils/Details/DetailThree';
import RelatedProducts from '../related-products';
import { mainSlider17 } from '../../owl-carousel/data/carousel';

function ProductMasonry() {
    // const slug = useLocation().query.slug;

    // if ( !slug ) return '';
    const error = false;
    const loading = false;
    const [ loaded, setLoadingState ] = useState( true );
    const product = data && data.products.data;
    const related = product[0].related;

   

    return (
        <main className="main mt-6 single-product product-layout-masonry">
            <Helmet>
                <title>Riode React eCommerce Template | Product Masonry</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Masonry</h1>

            {
                product !== undefined ?
                    <div className={ `page-content mb-10 pb-6 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container skeleton-body">
                            <div className="product product-single row mb-2">
                                <div className="col-md-6">
                                    <MediaThree product={ product[0] } />
                                </div>

                                <div className="col-md-6">
                                    <DetailThree data={ data } isSticky={ true } isDesc={ true } />
                                </div>
                            </div>

                            <RelatedProducts products={ related } />
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body container mb-10">
                        <div className="row mb-2">
                            <div className="col-md-6 product-masonry-type">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="col-md-6">
                                <div className="skel-pro-summary mt-4 mt-md-0"></div>
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
            }
        </main>
    )
}

export default React.memo(ProductMasonry);