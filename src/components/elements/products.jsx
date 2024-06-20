import Helmet from 'react-helmet';

import Breadcrumb from '../pages/element/partials/Breadcrumb';
import OwlCarousel from '../owl-carousel/owl-carousel';

import data from '..//shop/product-list/data/getProduct.json'

import Quickview from '../features/quickview-modal';
import ProductOne from '../features/product/product-one';
import ProductTwo from '..//products/ProductTwo'
import ProductThree from '../products/product-three';
import ProductFour from '../products/product-four';
import ProductFive from '../products/product-five';
import ProductSix from '../products/product-six';
import ProductSeven from '../products/product-seven';
import ProductEight from '..//products/ProductEight';
import SmallProduct from '..//products/productDetailPages/utils/product-nav'
import ElementsList from '../pages/element/partials/ElementsList';
import { mainSlider1, mainSlider7, mainSlider19 } from '../owl-carousel/data/carousel';

function Products() {
    const loading = false
    const products = data ? data.products.data : [];

    return (
        <main className="skeleton-body">
            <Helmet>
                <title>Riode React eCommerce Template | Products</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Products</h1>

            <Breadcrumb subTitle="Elements" title="Element Products" parentUrl="/elements" />

            <div className="page-content">
                <div className="container">
                    <section className="mt-10 pt-8">
                        <h2 className="title title-center">Default Style</h2>

                        {
                            !loading ?
                                <div className="row product-wrapper">
                                    {
                                        products.slice( 0, 4 ).map( ( item ) =>
                                            <div className="col-md-3 col-6" key={ 'default-' + item.name }>
                                                <ProductOne product={ item } />
                                            </div>
                                        )
                                    }
                                </div> :
                                <div className="row product-wrapper">
                                    {
                                        [ 1, 2, 3, 4 ].map( ( item ) =>
                                            <div className="col-md-3 col-6 product-loading-overlay" key={ 'default-skel-' + item }></div>
                                        )
                                    }
                                </div>
                        }
                    </section>

                    <section className="mt-8">
                        <h2 className="title title-center">Centered</h2>

                        {
                            !loading ?
                                <div className="row product-wrapper">
                                    {
                                        products.slice( 0, 4 ).map( ( item ) =>
                                            <div className="col-md-3 col-6" key={ 'centered-' + item.name }>
                                                <ProductTwo product={ item } />
                                            </div>
                                        )
                                    }
                                </div> :
                                <div className="row product-wrapper">
                                    {
                                        [ 1, 2, 3, 4 ].map( ( item ) =>
                                            <div className="col-md-3 col-6 product-loading-overlay" key={ 'centered-skel-' + item }></div>
                                        )
                                    }
                                </div>
                        }
                    </section>

                    <section className="mt-8">
                        <h2 className="title title-center">Classic Button</h2>

                        {
                            !loading ?
                                <div className="row product-wrapper">
                                    {
                                        products.slice( 0, 4 ).map( ( item ) =>
                                            <div className="col-md-3 col-6" key={ 'classic-' + item.name }>
                                                <ProductThree product={ item } />
                                            </div>
                                        )
                                    }
                                </div> :
                                <div className="row product-wrapper">
                                    {
                                        [ 1, 2, 3, 4 ].map( ( item ) =>
                                            <div className="col-md-3 col-6 product-loading-overlay" key={ 'classic-skel-' + item }></div>
                                        )
                                    }
                                </div>
                        }
                    </section>

                    <section className="mt-8">
                        <h2 className="title title-center">Pop-up</h2>

                        {
                            !loading ?
                                <div className="row product-wrapper">
                                    {
                                        products.slice( 0, 4 ).map( ( item ) =>
                                            <div className="col-md-3 col-6" key={ 'popup-' + item.name }>
                                                <ProductFour product={ item } />
                                            </div>
                                        )
                                    }
                                </div> :
                                <div className="row product-wrapper">
                                    {
                                        [ 1, 2, 3, 4 ].map( ( item ) =>
                                            <div className="col-md-3 col-6 product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                        )
                                    }
                                </div>
                        }
                    </section>

                    <section className="mt-8">
                        <h2 className="title title-center">Split Line 5 Columns</h2>

                        {
                            !loading ?
                                <div className="row product-wrapper split-line">
                                    {
                                        products.slice( 0, 5 ).map( ( item ) =>
                                            <div className="col-xl-5col col-lg-3 col-sm-4 col-6" key={ 'split-line-' + item.name }>
                                                <ProductFive product={ item } />
                                            </div>
                                        )
                                    }
                                </div> :
                                <div className="row product-wrapper split-line">
                                    {
                                        [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                            <div className="col-xl-5col col-lg-3 col-sm-4 col-6" key={ 'split-line-skel-' + item }></div>
                                        )
                                    }
                                </div>
                        }
                    </section>

                    <section className="mt-10">
                        <h2 className="title title-center">Without Space</h2>

                        {
                            !loading ?
                                <OwlCarousel adClass="owl-theme gutter-xs" options={ mainSlider1 }>
                                    {
                                        products.slice( 0, 5 ).map( ( item ) =>
                                            <ProductTwo product={ item } key={ 'without-space-' + item.name } />
                                        )
                                    }
                                </OwlCarousel> :
                                <OwlCarousel adClass="owl-theme gutter-xs" options={ mainSlider1 }>
                                    {
                                        [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                            <div className="product-loading-overlay" key={ 'without-space-skel-' + item }></div>
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </section>

                    <section className="mt-10 pt-2">
                        <h2 className="title title-center">Image Gap Style</h2>

                        {
                            !loading ?
                                <div className="row product-wrapper equal-height">
                                    {
                                        products.slice( 0, 4 ).map( ( item ) =>
                                            <div className="col-md-3 col-6" key={ 'image-gap-' + item.name }>
                                                <ProductTwo product={ item } adClass="product-image-gap" />
                                            </div>
                                        )
                                    }
                                </div> :
                                <div className="row product-wrapper equal-height">
                                    {
                                        [ 1, 2, 3, 4 ].map( ( item ) =>
                                            <div className="col-md-3 col-6 product-loading-overlay" key={ 'image-gap-skel-' + item }></div>
                                        )
                                    }
                                </div>
                        }
                    </section>

                    <section className="mt-10">
                        <h2 className="title title-center">Modern Style 1</h2>

                        {
                            !loading ?
                                <OwlCarousel adClass="owl-theme" options={ mainSlider19 }>
                                    {
                                        products.slice( 0, 5 ).map( ( item ) =>
                                            <ProductSix product={ item } key={ 'modern-style-one-' + item.name } />
                                        )
                                    }
                                </OwlCarousel> :
                                <OwlCarousel adClass="owl-theme" options={ mainSlider19 }>
                                    {
                                        [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                            <div className="product-loading-overlay" key={ 'modern-style-one-skel-' + item }></div>
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </section>

                    <section className="mt-10 pb-4">
                        <h2 className="title title-center">Modern Style 2</h2>

                        {
                            !loading ?
                                <OwlCarousel adClass="owl-theme" options={ mainSlider19 }>
                                    {
                                        products.slice( 0, 5 ).map( ( item ) =>
                                            <ProductSeven product={ item } key={ 'modern-style-two-' + item.name } />
                                        )
                                    }
                                </OwlCarousel> :
                                <OwlCarousel adClass="owl-theme" options={ mainSlider19 }>
                                    {
                                        [ 1, 2, 3, 4, 5 ].map( ( item ) =>
                                            <div className="product-loading-overlay" key={ 'modern-style-two-skel-' + item }></div>
                                        )
                                    }
                                </OwlCarousel>
                        }
                    </section>

                    <section className="mt-8">
                        <h2 className="title title-center">Product List</h2>

                        {
                            !loading ?
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="row">
                                            {
                                                products.slice( 0, 2 ).map( ( item ) =>
                                                    <div className="col-6 col-sm-12" key={ 'list-' + item.name }>
                                                        <ProductEight product={ item } />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="widget widget-products">
                                            <h4 className="widget-title">Our Featured</h4>

                                            <div className="widget-body">
                                                <OwlCarousel adClass="owl-nav-top" options={ mainSlider7 }>
                                                    <div className="products-col">
                                                        {
                                                            products.slice( 0, 4 ).map( item => (
                                                                <SmallProduct product={ item } key={ 'small-' + item.name } />
                                                            ) )
                                                        }
                                                    </div>

                                                    <div className="products-col">
                                                        {
                                                            products.slice( 4, 8 ).map( item => (
                                                                <SmallProduct product={ item } key={ 'small-' + item.name } />
                                                            ) )
                                                        }
                                                    </div>
                                                </OwlCarousel>
                                            </div>
                                        </div>
                                    </div>
                                </div> :
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="row">
                                            {
                                                [ 1, 2 ].map( ( item ) =>
                                                    <div className="skel-pro skel-pro-list mb-4 col-6 col-sm-12" key={ 'list-skel-' + item }></div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="widget widget-products">
                                            <h4 className="widget-title">Our Featured</h4>

                                            <div className="widget-body">
                                                <OwlCarousel adClass="owl-nav-top" options={ mainSlider7 }>
                                                    <div className="products-col">
                                                        {
                                                            [ 1, 2, 3, 4 ].map( ( item ) =>
                                                                <div className="skel-pro-list mb-4" key={ 'small-skel-' + item }></div>
                                                            )
                                                        }
                                                    </div>

                                                    <div className="products-col">
                                                        {
                                                            [ 1, 2, 3, 4 ].map( ( item ) =>
                                                                <div className="skel-pro-list mb-4" key={ 'small-skel-one-' + item }></div>
                                                            )
                                                        }
                                                    </div>
                                                </OwlCarousel>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </section>
                </div>

                <ElementsList adClass="mt-9" />
            </div>
        </main>
    )
}

export default Products;