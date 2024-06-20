import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import data from '..//..//shop/product-list/data/getProductOne.json'

import ALink from '../../custom-link';
import OwlCarousel from '../../owl-carousel/owl-carousel';

import MediaFour from '../productDetailPages/utils/Media/MediaFour';
import DetailFour from '../productDetailPages/utils/Details/DetailFour';
import DescOne from '../description/DescOne';
import RelatedProducts from '../related-products';
import ProductNav from '../productDetailPages/utils/product-nav';

import { mainSlider17 } from '../../owl-carousel/data/carousel';

function ProductGallery() {
    // const slug = useRouter().query.slug;

    // if ( !slug ) return '';

    const loading = false;
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
        <main className="main single-product product-layout-gallery">
            <Helmet>
                <title>Riode React eCommerce Template | Product Gallery</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Gallery</h1>

            {
                product ?
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

                            <div className="product product-single mb-4">
                                <MediaFour product={ product[0] } />

                                <DetailFour data={ data } />
                            </div>

                            <DescOne product={ product } />

                            <RelatedProducts products={ related } />
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body product product-single container mt-10 pt-3 mb-10">
                        <div className="pg-gallery mb-4">
                            <div className="skel-pro-gallery mb-6"></div>

                            <div className="skel-pro-summary"></div>
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

export default React.memo(ProductGallery)