import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import data from '..//blogs/data/GetPosts.json'
import OwlCarousel from '../owl-carousel/owl-carousel';
import Breadcrumb from '../pages/element/partials/Breadcrumb';

import PostFour from '../blogs/post/post-four';
import PostFive from '../blogs/post/post-five';
import PostSix from '../blogs/post/post-six';
import PostSeven from '../blogs/post/post-seven';
import PostEight from '../blogs/post/post-eight';
import ElementsList from '../pages/element/partials/ElementsList';

import { mainSlider5, mainSlider13, mainSlider14 } from '../owl-carousel/data/carousel';

function BlogPosts () {
    const posts = data && data.posts.data;
    const loading = false;
    const error = false;

    return (
        <main className="main skeleton-body">
            <Helmet>
                <title>Riode React eCommerce Template | Blog</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Blog</h1>

            <Breadcrumb subTitle="Elements" title="Element Blog" parentUrl="/elements" />

            <div className="page-content">
                <section className="mt-10 pt-4 pb-10">
                    <div className="container">
                        <h2 className="title title-center">Default</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider13 }>
                            {
                                loading ?
                                    new Array( parseInt( 3 ) ).fill( 1 ).map( ( item, index ) => (
                                        <div key={ "Skeleton:" + index }>
                                            <div className="skel-post"></div>
                                        </div>
                                    ) ) :
                                    posts ?
                                        posts.length ?
                                            posts.slice(0,5).map( ( post, index ) => (
                                                <React.Fragment key={ "post-four" + index }>
                                                    <PostFour post={ post } isOriginal={ true } adClass="text-center" />
                                                </React.Fragment>
                                            ) ) :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </OwlCarousel>
                    </div>
                </section>

                <section className="grey-section pt-10 pb-10">
                    <div className="container mt-4">
                        <h2 className="title title-center">List</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider14 }>
                            {
                                loading ?
                                    new Array( parseInt( 2 ) ).fill( 1 ).map( ( item, index ) => (
                                        <div key={ "Skeleton:" + index }>
                                            <div className="skel-post"></div>
                                        </div>
                                    ) ) :
                                    posts ?
                                        posts.length ?
                                            posts.slice(0,5).map( ( post, index ) => (
                                                <React.Fragment key={ "post-five" + index }>
                                                    <PostFive post={ post } />
                                                </React.Fragment>
                                            ) ) :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </OwlCarousel>
                    </div>
                </section>

                <section className="mt-10 pt-4 pb-10">
                    <div className="container">
                        <h2 className="title title-center">Without description</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider13 }>
                            {
                                loading ?
                                    new Array( parseInt( 3 ) ).fill( 1 ).map( ( item, index ) => (
                                        <div key={ "Skeleton:" + index }>
                                            <div className="skel-post"></div>
                                        </div>
                                    ) ) :
                                    posts ?
                                        posts.length ?
                                            posts.slice( 0,5).map( ( post, index ) => (
                                                <React.Fragment key={ "post-six" + index }>
                                                    <PostSix post={ post } isOriginal={ true } />
                                                </React.Fragment>
                                            ) ) :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </OwlCarousel>
                    </div>
                </section>

                <section className="grey-section pt-10 pb-10">
                    <div className="container mt-4">
                        <h2 className="title title-center">4 Columns</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider5 }>
                            {
                                loading ?
                                    new Array( parseInt( 3 ) ).fill( 1 ).map( ( item, index ) => (
                                        <div key={ "Skeleton:" + index }>
                                            <div className="skel-post"></div>
                                        </div>
                                    ) ) :
                                    posts ?
                                        posts.length ?
                                            posts.slice(0,5 ).map( ( post, index ) => (
                                                <React.Fragment key={ "post-four" + index }>
                                                    <PostFour post={ post } />
                                                </React.Fragment>
                                            ) ) :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </OwlCarousel>
                    </div>
                </section>

                <section className="mt-10 pt-4 pb-4 mb-10">
                    <div className="container">
                        <h2 className="title title-center">On Image</h2>

                        <OwlCarousel adClass="owl-theme" options={ mainSlider13 }>
                            {
                                loading ?
                                    new Array( parseInt( 3 ) ).fill( 1 ).map( ( item, index ) => (
                                        <div key={ "Skeleton:" + index }>
                                            <div className="skel-post"></div>
                                        </div>
                                    ) ) :
                                    posts ?
                                        posts.length ?
                                            posts.slice( 0,5 ).map( ( post, index ) => (
                                                <React.Fragment key={ "post-seven" + index }>
                                                    <PostSeven post={ post } isOriginal={ true } />
                                                </React.Fragment>
                                            ) ) :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </OwlCarousel>
                    </div>
                </section>

                <section className="pt-10 pb-10 grey-section">
                    <div className="container mt-4">
                        <h2 className="title title-center">Framed</h2>

                        <OwlCarousel adClass="owl-theme owl-shadow-carousel" options={ mainSlider13 }>
                            {
                                loading ?
                                    new Array( parseInt( 3 ) ).fill( 1 ).map( ( item, index ) => (
                                        <div key={ "Skeleton:" + index }>
                                            <div className="skel-post"></div>
                                        </div>
                                    ) ) :
                                    posts ?
                                        posts.length ?
                                            posts.slice( 0,5).map( ( post, index ) => (
                                                <React.Fragment key={ "post-eight" + index }>
                                                    <div className="blog-post">
                                                        <PostEight post={ post } isOriginal={ true } />
                                                    </div>
                                                </React.Fragment>
                                            ) ) :
                                            <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                        : ''
                            }
                        </OwlCarousel>
                    </div>
                </section>

                <ElementsList adClass="bg-white" />
            </div >
        </main >
    )
}

export default BlogPosts;