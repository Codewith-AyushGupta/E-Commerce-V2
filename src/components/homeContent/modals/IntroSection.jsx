import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import banner1 from '..//media/images/banner1.png'
import banner2 from '..//media/images/banner2.jpg'
// import Custom Components
import ALink from '../../custom-link';
import OwlCarousel from '../../owl-carousel/owl-carousel';
import cap from '..//media/images/3.jpg'
import shoes from '..//media/images/4.jpg'

import { fadeInUpShorter, fadeInRightShorter, fadeInDownShorter, blurIn } from '..//..//utils/keyframes';
import { introSlider } from '../../owl-carousel/data/carousel';

function IntroSection() {
    return (
        <section className="intro-section">
            <div className="row">
                <div className="col-12 mb-4">
                    <OwlCarousel adClass="owl-theme owl-dot-inner owl-dot-white intro-slider animation-slider" options={ introSlider }>
                        <div className="banner banner-fixed intro-slide1 content-center content-middle"
                            style={ { backgroundColor: "#444342" } }>
                            <figure>
                                <LazyLoadImage
                                    threshold={ 500 }
                                    src={banner1}
                                    alt="intro-banner"
                                    width="1180"
                                    height="550"
                                    style={ { backgroundColor: "#444342" } }
                                    effect="opacity"
                                />
                            </figure>
                            <div className="banner-content">
                                <Reveal keyframes={ fadeInRightShorter } duration={ 1200 } delay={ 300 }>
                                    <h4 className="banner-subtitle font-weight-semi-bold text-white ls-normal lh-1 mb-0 text-uppercase text-left">
                                        Men’s wear</h4>
                                </Reveal>

                                <Reveal keyframes={ fadeInRightShorter } duration={ 1200 } delay={ 300 }>
                                    <h2 className="banner-title text-uppercase text-white">
                                        Collection</h2>
                                </Reveal>

                                <Reveal keyframes={ fadeInRightShorter } duration={ 1000 } delay={ 1000 }>
                                    <h5 className="font-weight-normal text-white lh-1 ls-normal text-right mb-1">
                                        Start at <span className="text-secondary font-weight-bold">$19.99</span>
                                    </h5>
                                </Reveal>
                            </div>
                        </div>

                        <div className="intro-slide2 banner banner-fixed">
                            <figure>
                                <LazyLoadImage
                                    threshold={ 500 }
                                    src={banner2}
                                    alt="banner" width="1180"
                                    height="550"
                                    style={ { backgroundColor: "#686868" } }
                                    effect="opacity" />
                            </figure>
                            <div className="banner-content y-50">
                                <Reveal keyframes={ fadeInDownShorter } duration={ 1200 } delay={ 500 }>
                                    <h4 className="banner-subtitle font-weight-normal lh-1 ls-m">
                                        Lifestyle collection</h4>
                                </Reveal>

                                <Reveal keyframes={ blurIn } duration={ 1400 } delay={ 100 }>
                                    <h3 className="banner-title ls-l text-white text-uppercase font-weight-bold lh-1">
                                        For Women’s</h3>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } duration={ 1000 } delay={ 700 }>
                                    <h5 className="font-weight-normal text-white text-uppercase lh-1 ls-m mb-1">
                                        sale Up to <span className="text-secondary font-weight-bold">30% Off</span>
                                    </h5>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } duration={ 1000 } delay={ 900 }>
                                    <p className="font-weight-normal ls-s mb-7">
                                        Get Free Shipping on all orders over $99.00</p>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 1100 }>
                                    <ALink href="/shop" className="btn btn-white btn-rounded">Shop now</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

                <div className="col-md-6 mb-4">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 300 } triggerOnce>
                        <div className="banner banner-fixed intro-banner intro-banner1 content-middle">
                            <figure>
                                <LazyLoadImage
                                    threshold={ 500 }
                                    src={cap}
                                    width="580"
                                    height="249"
                                    alt="banner"
                                    style={ { backgroundColor: "#eca5a9" } }
                                    effect="opacity"
                                />
                            </figure>
                            <div className="banner-content">
                                <h4
                                    className="banner-subtitle ls-normal text-white text-uppercase font-weight-normal lh-1">
                                    New Arrivals</h4>
                                <h3 className="banner-title text-white font-weight-bold ls-md">
                                    Women's Sale
                            </h3>
                                <ALink href="/shop"
                                    className="btn btn-white btn-link btn-underline font-weight-semi-bold">Shop
                                Now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-md-6 mb-4">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 500 } triggerOnce>
                        <div className="banner banner-fixed intro-banner intro-banner2 content-middle">
                            <figure>
                                <LazyLoadImage
                                    threshold={ 500 }
                                    src={shoes}
                                    width="580"
                                    height="249"
                                    alt="banner"
                                    style={ { backgroundColor: "#494442" } }
                                    effect="opacity"
                                />
                            </figure>
                            <div className="banner-content">
                                <h4
                                    className="banner-subtitle ls-normal text-white text-uppercase font-weight-normal lh-1">
                                    Trending</h4>
                                <h3 className="banner-title text-white font-weight-bold ls-md">
                                    New Sneaker
                            </h3>
                                <ALink href="/shop"
                                    className="btn btn-white btn-link btn-underline btn-white font-weight-semi-bold">Shop
                                Now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section >
    )
}

export default React.memo( IntroSection );