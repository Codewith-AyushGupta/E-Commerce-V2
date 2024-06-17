import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { useLazyQuery } from '@apollo/react-hooks';

import ToolBox from '../ToolBox';
import ProductTwo from '../../products/ProductTwo';
import ProductEight from '../../products/ProductEight';
// import Pagination from '~/components/features/pagination';
import ProductData from './data/getProduct.json'
// import withApollo from '~/server/apollo';
// import { GET_PRODUCTS } from '~/server/queries';

function ProductListOne( props ) {
    // debugger;
    const { itemsPerRow = 3, type = "left", isToolbox = true } = props;
    const router = useLocation();
    // const query = router.query;
    const data  = ProductData;
    const loading=false, error=false;
    const products = data && data.products.data;
    const gridClasses = {
        3: "cols-2 cols-sm-3",
        4: "cols-2 cols-sm-3 cols-md-4",
        5: "cols-2 cols-sm-3 cols-md-4 cols-xl-5",
        6: "cols-2 cols-sm-3 cols-md-4 cols-xl-6",
        7: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-7",
        8: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-8"
    }
    // const perPage = query.per_page ? parseInt( query.per_page ) : 12;
    // const totalPage = data ? parseInt( data.products.total / perPage ) + ( data.products.total % perPage ? 1 : 0 ) : 1;
    // const page = query.page ? query.page : 1;
    const gridType = 'grid';

    // useEffect( () => {
    //     getProducts( {
    //         variables: {
    //             search: query.search,
    //             colors: query.colors ? query.colors.split( ',' ) : [],
    //             sizes: query.sizes ? query.sizes.split( ',' ) : [],
    //             brands: query.brands ? query.brands.split( ',' ) : [],
    //             min_price: parseInt( query.min_price ),
    //             max_price: parseInt( query.max_price ),
    //             category: query.category,
    //             tag: query.tag,
    //             sortBy: query.sortby,
    //             from: perPage * ( page - 1 ),
    //             to: perPage * page
    //         }
    //     } );
    // }, [ query ] )

    return (
        <>
            {
                isToolbox ? <ToolBox type={ type } /> : ''
            }
            {
                loading ?
                    gridType === 'grid' ?
                        <div className={ `row product-wrapper ${ gridClasses[ itemsPerRow ] }` }>
                            {
                                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map( ( item ) =>
                                    <div className="product-loading-overlay" key={ 'popup-skel-' + item }></div>
                                )
                            }
                        </div> :
                        <div className="row product-wrapper skeleton-body cols-1">
                            {
                                [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map( ( item ) =>
                                    <div className="skel-pro skel-pro-list mb-4" key={ 'list-skel-' + item }></div>
                                )
                            }
                        </div>
                    : ''
            }
            {
                gridType === 'grid' ?
                    <div className={ `row product-wrapper ${ gridClasses[ itemsPerRow ] }` }>
                        { products && products.map( item =>
                            <div className="product-wrap" key={ 'shop-' + item.slug }>
                                <ProductTwo product={ item } adClass="" />
                            </div>
                        ) }
                    </div>
                    :
                    <div className="product-lists product-wrapper">
                        { products && products.map( item =>
                            <ProductEight product={ item } key={ 'shop-list-' + item.slug } />
                        ) }
                    </div>
            }

            {
                products && products.length === 0 ?
                    <p className="ml-1">No products were found matching your selection.</p> : ''
            }

            {/* {
                data && data.products.total > 0 ?
                    <div className="toolbox toolbox-pagination">
                        {
                            data && <p className="show-info">Showing <span>{ perPage * ( page - 1 ) + 1 } - { Math.min( perPage * page, data.products.total ) } of { data.products.total }</span>Products</p>
                        }

                        <Pagination totalPage={ totalPage } />
                    </div> : ''
            } */}
        </>
    )
}

export default ProductListOne;