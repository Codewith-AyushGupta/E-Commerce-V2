import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useLocation } from 'react-router-dom';

import data from './data/GetPosts.json'
import ALink from '../custom-link';
import Pagination from '../features/Pagination';

import PostOne from './post/post-one'
import BlogSidebar from './Blog-sidebar';

import { scrollTopHandler } from '../utils';

function Classic () {
    const router = useLocation();
    const [ isFirst, setFirst ] = useState( true );
    const query = router.query;
    const loading = false;
    const error = false;
    const showingCount = 8;
    const [ perPage, setPerPage ] = useState( showingCount );
    const posts = data && data.posts.data;
    const totalPage = data ? parseInt( data.posts.total / perPage ) + ( data.posts.total % perPage ? 1 : 0 ) : 1;
    let page = 2



    return (
        <main className="main skeleton-body">
            <Helmet>
                <title>Riode React eCommerce Template | Blog Classic</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Blog Classic</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li><ALink href="#" className="active">Blog</ALink></li>
                        <li>Classic</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content with-sidebar">
                <div className="container">
                    <div className="row gutter-lg">
                        <div className="col-lg-9">
                            <div className="posts">
                                {
                                    loading ?
                                        new Array( parseInt( perPage ) ).fill( 1 ).map( ( item, index ) => (
                                            <div key={ "Skeleton:" + index }>
                                                <div className="skel-post"></div>
                                            </div>
                                        ) ) :
                                        posts ?
                                            posts.length ?
                                                posts.slice( 0, posts.length ).map( ( post, index ) => (
                                                    <React.Fragment key={ "post-one" + index }>
                                                        <PostOne post={ post } />
                                                    </React.Fragment>
                                                ) ) :
                                                <div className="info-box with-icon"><p className="mt-4">No blogs were found matching your selection.</p></div>
                                            : ''
                                }
                            </div>

                            <Pagination totalPage={ totalPage } />
                        </div>

                        <BlogSidebar />
                    </div>
                </div>
            </div >
        </main >
    )
}

export default Classic;