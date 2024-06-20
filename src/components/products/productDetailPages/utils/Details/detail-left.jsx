import React from 'react';

import ALink from '../../../../custom-link';
import ProductCountDown from '../../../../utils/count-down';

import { toDecimal } from '../../../../utils';

function DetailLeft( props ) {
    
    const { data, isSticky = false, adClass = "mb-4" } = props;
    let product = data && data.products;

    return (
        <div className={ `product-details p-0 ${ isSticky ? 'p-sticky' : '' } ${ adClass }` }>
            <h2 className="product-name mt-3">{ product.data[0].name }</h2>

            <div className='product-meta'>
                SKU: <span className='product-sku'>{ product.data[0].sku }</span>
                CATEGORIES: <span className='product-brand'>
                    {
                        product.data[0].categories.map( ( item, index ) =>
                            <React.Fragment key={ item.name + '-' + index }>
                                <ALink href={ { pathname: '/shop', query: { category: item.slug } } }>
                                    { item.name }
                                </ALink>
                                { index < product.data[0].categories.length - 1 ? ', ' : '' }
                            </React.Fragment>
                        ) }
                </span>
            </div>

            <div className="product-price">
                {
                    product.data[0].price[ 0 ] !== product.data[0].price[ 1 ] ?
                        product.data[0].variants.length === 0 || ( product.data[0].variants.length > 0 && !product.data[0].variants[ 0 ].price ) ?
                            <>
                                <ins className="new-price">${ toDecimal( product.data[0].price[ 0 ] ) }</ins>
                                <del className="old-price">${ toDecimal( product.data[0].price[ 1 ] ) }</del>
                            </>
                            :
                            < del className="new-price">${ toDecimal( product.data[0].price[ 0 ] ) } – ${ toDecimal( product.data[0].price[ 1 ] ) }</del>
                        : <ins className="new-price">${ toDecimal( product.data[0].price[ 0 ] ) }</ins>
                }
            </div>

            {
                product.data[0].price[ 0 ] !== product.data[0].price[ 1 ] && product.data[0].variants.length === 0 ?
                    <ProductCountDown type={ 2 } /> : ''
            }

            <div className="ratings-container">
                <div className="ratings-full">
                    <span className="ratings" style={ { width: 20 * product.data[0].ratings + '%' } }></span>
                    <span className="tooltiptext tooltip-top">{ toDecimal( product.data[0].ratings ) }</span>
                </div>

                <ALink href="#" className="rating-reviews">( { product.data[0].reviews } reviews )</ALink>
            </div>

            <p className="product-short-desc">{ product.data[0].short_description }</p>
        </div >
    )
}

export default ( DetailLeft );