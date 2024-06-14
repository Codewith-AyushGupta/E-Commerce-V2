import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '../../owl-carousel/owl-carousel';

import ProductTwo from '../../products/ProductTwo';

import { featuredSlider } from '../../owl-carousel/data/carousel';
import { fadeIn } from '../../utils/keyframes';

function FeaturedCollection( props ) {
    const { products, loading } = props;

    return (
        <section className="pt-7 pb-1">
            <h2 className="title title-simple ls-m">Our Featured</h2>

            <Reveal keyframes={ fadeIn } triggerOnce>
                {
                    loading ?
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ featuredSlider }>
                            {
                                [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'featured-skel-' + item }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-theme owl-nav-full" options={ featuredSlider }>
                            {
                                products && products.map( ( item, index ) =>
                                    <ProductTwo
                                        adClass="text-left"
                                        product={ item }
                                        key={ `featured-product-${ index }` } />
                                )
                            }
                        </OwlCarousel>
                }
            </Reveal>
        </section>
    )
}

export default React.memo( FeaturedCollection );
