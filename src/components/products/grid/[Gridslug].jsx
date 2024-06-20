import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';

import data from '..//..//shop/product-list/data/getProductOne.json';

import OwlCarousel from '../../owl-carousel/owl-carousel';

import MediaTwo from '../productDetailPages/utils/Media/MediaTwo';
import DetailThree from '../productDetailPages/utils/Details/DetailThree';
import DescOne from '../description/DescOne';
import RelatedProducts from '../related-products';

import { mainSlider17 } from '../../owl-carousel/data/carousel';

function ProductGrid() {
    // const slug = useLocation().query.slug;

    // if ( !slug ) return '';
    const loading = false;
    const error = false;
    const [ loaded, setLoadingState ] = useState( true );
    const Data = data;
    const product = data && data.products.data;
    // const related = data && data.product.related;


    return (
        <main className="main mt-6 single-product product-layout-grid">
            <Helmet>
                <title>Riode React eCommerce Template | Product Grid</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Product Grid</h1>

            {
                product?
                    <div className={ `page-content mb-10 pb-6 ${ loaded ? '' : 'd-none' }` }>
                        <div className="container skeleton-body">
                            <div className="product product-single row mb-8">
                                <div className="col-md-6">
                                    <MediaTwo product={ product[0] } />
                                </div>

                                <div className="col-md-6">
                                    <DetailThree data={ data } isSticky={ true } adClass="pb-0 mb-10" />
                                </div>
                            </div>

                            <DescOne product={ product } />

                            <RelatedProducts products={ product[0] } />
                        </div>
                    </div> : ''
            }
        </main>
    )
}

export default React.memo(ProductGrid);