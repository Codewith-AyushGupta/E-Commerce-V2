import OwlCarousel from '../owl-carousel/owl-carousel';

import ProductTwo from './ProductTwo';

import { mainSlider17 } from '../owl-carousel/data/carousel';

export default function RelatedProducts( props ) {
    // debugger;
    const { products, adClass = "pt-3 mt-10" } = props;

    return (
        products.length > 0 ?
            <section className={ `${ adClass }` }>
                <h2 className="title title-center ls-normal">Related Products</h2>

                <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={ mainSlider17 }>
                    {
                        products && products.slice( 0, 5 ).map( ( item, index ) =>
                            <ProductTwo product={ item } key={ 'product-two-' + index } adClass='' />
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}