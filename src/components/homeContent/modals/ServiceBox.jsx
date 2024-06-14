import React from 'react';
import Reveal from "react-awesome-reveal";

import OwlCarousel from '../../owl-carousel/owl-carousel';

import { serviceSlider } from '../../owl-carousel/data/carousel';
import { fadeInRightShorter } from '../../utils/keyframes';

function ServiceBox( props ) {
    return (
        <section className="service-list mt-10">
            <OwlCarousel adClass="owl-theme" options={ serviceSlider }>
                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } triggerOnce>
                    <div className="icon-box">
                        <div className="icon-box-content">
                            <h3 className="icon-box-title font-weight-bold text-capitalize ls-normal mb-0">Free
                                            delivery</h3>
                            <p className="text-primary">When You Spend $80 or More</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 300 } triggerOnce>
                    <div className="icon-box">
                        <div className="icon-box-content">
                            <h3 className="icon-box-title font-weight-bold text-capitalize ls-normal mb-0">Tracked
                                            delivery</h3>
                            <p className="text-primary">Only $6 Standard 6-10 Days</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 400 } triggerOnce>
                    <div className="icon-box">
                        <div className="icon-box-content">
                            <h3 className="icon-box-title font-weight-bold text-capitalize ls-normal mb-0">Need it
                                            in a hurry</h3>
                            <p className="text-primary">You can Express Shipping in 5 Days</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 500 } triggerOnce>
                    <div className="icon-box">
                        <div className="icon-box-content">
                            <h3 className="icon-box-title font-weight-bold text-capitalize ls-normal mb-0">30 - Day
                                            returns</h3>
                            <p className="text-primary">Return Most Items Within 30 Days</p>
                        </div>
                    </div>
                </Reveal>
            </OwlCarousel>
        </section>
    )
}

export default React.memo( ServiceBox );