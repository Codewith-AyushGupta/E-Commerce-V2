import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/collapse';

import ALink from '../../../../custom-link';
import ProductCountDown from '../../../../utils/count-down';
import Quantity from '../../../../utils/quantity/Quantity';

import { wishlistActions } from '../../../../store/wishlistReducer';
import { cartActions } from '../../../../store/cart';

import { toDecimal } from '../../../../utils';

function DetailFour( props ) {
    let router = useLocation();
    const { data, isSticky = false, isDesc = false } = props;
    const { toggleWishlist, addToCart, wishlist } = props;
    const [ curColor, setCurColor ] = useState( 'null' );
    const [ curSize, setCurSize ] = useState( 'null' );
    const [ curIndex, setCurIndex ] = useState( 0 );
    const [ cartActive, setCartActive ] = useState( false );
    const [ quantity, setQauntity ] = useState( 1 );
    let product = data && data.products.data[0];

    // decide if the product is wishlisted
    let isWishlisted, colors = [], sizes = [];
    isWishlisted = wishlist.findIndex( item => item.slug === product.slug ) > -1 ? true : false;

    if ( product && product.variants.length > 0 ) {
        if ( product.variants[ 0 ].size )
            product.variants.forEach( item => {
                if ( sizes.findIndex( size => size.name === item.size.name ) === -1 ) {
                    sizes.push( { name: item.size.name, value: item.size.size } );
                }
            } );

        if ( product.variants[ 0 ].color ) {
            product.variants.forEach( item => {
                if ( colors.findIndex( color => color.name === item.color.name ) === -1 )
                    colors.push( { name: item.color.name, value: item.color.color } );
            } );
        }
    }

    useEffect( () => {
        setCurIndex( -1 );
        resetValueHandler();
    }, [ product ] )

    useEffect( () => {
        if ( product.variants.length > 0 ) {
            if ( ( curSize !== 'null' && curColor !== 'null' ) || ( curSize === 'null' && product.variants[ 0 ].size === null && curColor !== 'null' ) || ( curColor === 'null' && product.variants[ 0 ].color === null && curSize !== 'null' ) ) {
                setCartActive( true );
                setCurIndex( product.variants.findIndex( item => ( item.size !== null && item.color !== null && item.color.name === curColor && item.size.name === curSize ) || ( item.size === null && item.color.name === curColor ) || ( item.color === null && item.size.name === curSize ) ) );
            } else {
                setCartActive( false );
            }
        } else {
            setCartActive( true );
        }

        if ( product.stock === 0 ) {
            setCartActive( false );
        }
    }, [ curColor, curSize, product ] )

    const wishlistHandler = ( e ) => {
        e.preventDefault();

        if ( toggleWishlist && !isWishlisted ) {
            let currentTarget = e.currentTarget;
            currentTarget.classList.add( 'load-more-overlay', 'loading' );
            toggleWishlist( product );

            setTimeout( () => {
                currentTarget.classList.remove( 'load-more-overlay', 'loading' );
            }, 1000 );
        } else {
            router.push( '/pages/wishlist' );
        }
    }

    const toggleColorHandler = ( color ) => {
        if ( !isDisabled( color.name, curSize ) ) {
            if ( curColor === color.name ) {
                setCurColor( 'null' );
            } else {
                setCurColor( color.name );
            }
        }
    }

    const toggleSizeHandler = ( size ) => {
        if ( !isDisabled( curColor, size.name ) ) {
            if ( curSize === size.name ) {
                setCurSize( 'null' );
            } else {
                setCurSize( size.name );
            }
        }
    }

    const addToCartHandler = () => {
        if ( product.stock > 0 && cartActive ) {
            if ( product.variants.length > 0 ) {
                let tmpName = product.name, tmpPrice;
                tmpName += curColor !== 'null' ? '-' + curColor : '';
                tmpName += curSize !== 'null' ? '-' + curSize : '';

                if ( product.price[ 0 ] === product.price[ 1 ] ) {
                    tmpPrice = product.price[ 0 ];
                } else if ( !product.variants[ 0 ].price && product.discount > 0 ) {
                    tmpPrice = product.price[ 0 ];
                } else {
                    tmpPrice = product.variants[ curIndex ].sale_price ? product.variants[ curIndex ].sale_price : product.variants[ curIndex ].price;
                }

                addToCart( { ...product, name: tmpName, qty: quantity, price: tmpPrice } );
            } else {
                addToCart( { ...product, qty: quantity, price: product.price[ 0 ] } );
            }
        }
    }

    const resetValueHandler = ( e ) => {
        setCurColor( 'null' );
        setCurSize( 'null' );
    }

    function isDisabled( color, size ) {
        if ( color === 'null' || size === 'null' ) return false;

        if ( sizes.length === 0 ) {
            return product.variants.findIndex( item => item.color.name === curColor ) === -1;
        }

        if ( colors.length === 0 ) {
            return product.variants.findIndex( item => item.size.name === curSize ) === -1;
        }

        return product.variants.findIndex( item => item.color.name === color && item.size.name === size ) === -1;
    }

    function changeQty( qty ) {
        setQauntity( qty );
    }

    return (
        <div className="product-details row pl-0">
            <div className="col-md-6">
                <h2 className="product-name mt-3">{ product.name }</h2>

                <div className='product-meta'>
                    SKU: <span className='product-sku'>{ product.sku }</span>
                    CATEGORIES: <span className='product-brand'>
                        {
                            product.categories.map( ( item, index ) =>
                                <React.Fragment key={ item.name + '-' + index }>
                                    <ALink href={ { pathname: '/shop', query: { category: item.slug } } }>
                                        { item.name }
                                    </ALink>
                                    { index < product.categories.length - 1 ? ', ' : '' }
                                </React.Fragment>
                            ) }
                    </span>
                </div>

                <div className="ratings-container">
                    <div className="ratings-full">
                        <span className="ratings" style={ { width: 20 * product.ratings + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ toDecimal( product.ratings ) }</span>
                    </div>

                    <ALink href="#" className="rating-reviews">( { product.reviews } reviews )</ALink>
                </div>

                <p className="product-short-desc">{ product.short_description }</p>

                <ul className="product-status mt-4 mb-4 list-type-check list-style-none pl-0">
                    <li>Praesent id enim sit amet.</li>
                    <li>Tdio vulputate eleifend in in tortor. ellus massa.Dristique sitiismonec.</li>
                    <li>Massa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim.</li>
                </ul>
            </div>

            <div className="col-md-6 pl-2">
                <div className="product-price">
                    {
                        product.price[ 0 ] !== product.price[ 1 ] ?
                            product.variants.length === 0 || ( product.variants.length > 0 && !product.variants[ 0 ].price ) ?
                                <>
                                    <ins className="new-price">${ toDecimal( product.price[ 0 ] ) }</ins>
                                    <del className="old-price">${ toDecimal( product.price[ 1 ] ) }</del>
                                </>
                                :
                                < del className="new-price">${ toDecimal( product.price[ 0 ] ) } – ${ toDecimal( product.price[ 1 ] ) }</del>
                            : <ins className="new-price">${ toDecimal( product.price[ 0 ] ) }</ins>
                    }
                </div>

                {
                    product.price[ 0 ] !== product.price[ 1 ] && product.variants.length === 0 ?
                        <ProductCountDown type={ 2 } /> : ''
                }

                {
                    product && product.variants.length > 0 ?
                        <>
                            {
                                product.variants[ 0 ].color ?
                                    <div className='product-form product-color'>
                                        <label>Color:</label>

                                        <div className="product-variations">
                                            {
                                                colors.map( item =>
                                                    <ALink href="#" className={ `color ${ curColor === item.name ? 'active' : '' } ${ isDisabled( item.name, curSize ) ? 'disabled' : '' }` } key={ "color-" + item.name } style={ { backgroundColor: `${ item.value }` } } onClick={ ( e ) => toggleColorHandler( item ) }></ALink> )
                                            }
                                        </div>
                                    </div> : ''
                            }

                            {
                                product.variants[ 0 ].size ?
                                    <div className='product-form product-size'>
                                        <label>Size:</label>

                                        <div className="product-form-group">
                                            <div className="product-variations">
                                                {
                                                    sizes.map( item =>
                                                        <ALink href="#" className={ `size ${ curSize === item.name ? 'active' : '' } ${ isDisabled( curColor, item.name ) ? 'disabled' : '' }` } key={ "size-" + item.name } onClick={ ( e ) => toggleSizeHandler( item ) }>{ item.value }</ALink> )
                                                }
                                            </div>

                                            <Collapse in={ 'null' !== curColor || 'null' !== curSize }>
                                                <div className="card-wrapper overflow-hidden reset-value-button w-100 mb-0">
                                                    <ALink href='#' className='product-variation-clean' onClick={ resetValueHandler }>Clean All</ALink>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div> : ''
                            }

                            <div className='product-variation-price'>
                                <Collapse in={ cartActive && curIndex > -1 }>
                                    <div className="card-wrapper">
                                        {
                                            curIndex > -1 ?
                                                <div className="single-product-price">
                                                    {
                                                        product.variants[ curIndex ].price ?
                                                            product.variants[ curIndex ].sale_price ?
                                                                <div className="product-price mb-0">
                                                                    <ins className="new-price">${ toDecimal( product.variants[ curIndex ].sale_price ) }</ins>
                                                                    <del className="old-price">${ toDecimal( product.variants[ curIndex ].price ) }</del>
                                                                </div>
                                                                : <div className="product-price mb-0">
                                                                    <ins className="new-price">${ toDecimal( product.variants[ curIndex ].price ) }</ins>
                                                                </div>
                                                            : ""
                                                    }
                                                </div> : ''
                                        }
                                    </div>
                                </Collapse>
                            </div>

                        </>
                        : ''
                }

                <hr className="product-divider"></hr>

                <div className="product-form product-qty">
                    <label className="d-none">QTY:</label>
                    <div className="product-form-group mr-2">
                        <Quantity max={ product.stock } product={ product } onChangeQty={ changeQty } />
                        <button className={ `btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${ cartActive ? '' : 'disabled' }` } onClick={ addToCartHandler } ><i className='d-icon-bag'></i>Add to Cart</button>
                    </div>
                </div>

                <hr className="product-divider mb-3"></hr>

                <div className="product-footer">
                    <div className="social-links mr-4">
                        <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                        <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                        <ALink href="#" className="social-link social-pinterest fab fa-pinterest-p"></ALink>
                    </div>

                    <div className="product-action">
                        <a href="#" className={ `btn-product btn-wishlist mr-6` } title={ isWishlisted ? 'Browse wishlist' : 'Add to wishlist' } onClick={ wishlistHandler }>
                            <i className={ isWishlisted ? "d-icon-heart-full" : "d-icon-heart" }></i> {
                                isWishlisted ? 'Browse wishlist' : 'Add to Wishlist'
                            }
                        </a>

                        {/* <ALink href="#" className="btn-product btn-compare"><i className="d-icon-compare"></i>Add to compare</ALink> */ }
                    </div>
                </div>
            </div>
        </div >
    )
}

function mapStateToProps( state ) {
    return {
        wishlist: state.wishlist.data ? state.wishlist.data : []
    }
}

export default connect( mapStateToProps, { toggleWishlist: wishlistActions.toggleWishlist, addToCart: cartActions.addToCart } )( DetailFour );