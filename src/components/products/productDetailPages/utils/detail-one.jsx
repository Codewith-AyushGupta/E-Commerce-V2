import React, { useEffect, useState, useRef, createContext } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import ALink from '../../../custom-link';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Countdown from '../../../utils/count-down';
import Quantity from '../../../utils/quantity/Quantity';
import ProductNav from './product-nav';
import { toDecimal } from '../../../utils';
import { cartActions } from '../../../store/cart';
import { connect } from 'react-redux';// DONE
import DynamicProductVarient from '../../DynamicFilter/DynamicProductVarient';
// import cartMenu from '../../components/partial/cart-menu';

const DetailOne = React.memo((props) => {
    const scrollToRef = useRef(null);
    const navigate = useLocation();
    const [filterData, setFilterData] = useState({});
    const HandelFilterData = (data, filterStatus, scrollToRef) => {
        // debugger;
        console.log('data from parent ', JSON.stringify(data), '    FilterStatus : ', filterStatus);
        setFilterData(data);
        if (filterStatus) {
            // debugger;
            setCartActive(true);
            // setCurIndex(product.variants.findIndex(item => (item.size !== null && item.color !== null && item.color.name === curColor && item.size.name === curSize) || (item.size === null && item.color.name === curColor) || (item.color === null && item.size.name === curSize)));
            setCurIndex(1);
        }
        else {
            setCartStatus(false);
            setCartActive(false);
        }
    }
    const [isFixed, setIsFixed] = useState(false);

    // this use Effect handels the sticky cart for desktop version. written by ayush.
    useEffect(() => {
        const stickyContentHandler = () => {
            let stickyContent = document.querySelector('.product-sticky-content');
            let height = 0;
            let offsetHeight = 0;
        
            if (stickyContent) {
              height = stickyContent.offsetHeight;
        
              if (window.scrollY > 450 && window.innerWidth > 991) {
                stickyContent.classList.add('fixed');
                if (document.querySelector('.sticky-header.sticky-content')) offsetHeight = document.querySelector('.sticky-header.sticky-content').offsetHeight;else offsetHeight = 88;
        
                if (!document.querySelector('.sticky-product-wrapper')) {
                  let stickyWrapper = document.createElement('div');
                  stickyWrapper.className = "sticky-product-wrapper";
                  stickyContent.parentNode.insertBefore(stickyWrapper, stickyContent);
                  document.querySelector('.sticky-product-wrapper').insertAdjacentElement('beforeend', stickyContent);
                  document.querySelector('.sticky-product-wrapper').setAttribute("style", "height: " + height + "px");
                }
        
                if (!document.querySelector('.sticky-product-wrapper').getAttribute("style")) {
                  document.querySelector('.sticky-product-wrapper').setAttribute("style", "height: " + height + "px");
                }
        
                document.querySelector('.product-sticky-content').setAttribute('style', `top: ${offsetHeight}px`);
              } else {
                if (document.querySelector('.sticky-product-wrapper')) {
                  document.querySelector('.sticky-product-wrapper').setAttribute("style", "");
                }
        
                document.querySelector('.product-sticky-content').classList.remove('fixed');
              }
            }
          };
        window.addEventListener('scroll', stickyContentHandler);
        /// By Ayush Gupta
        // if produt has no filter then make add to cart button active .
        
        if(product && !product.filters){
            setCartActive(true);
            setCurIndex(1);
        }
        return () => {
          window.removeEventListener('scroll', stickyContentHandler);
        };
      }, []);
    // debugger;
    const { data, isStickyCart = false, adClass = '', isNav = true } = props;
    const { toggleWishlist, addToCart, wishlist } = props;

    const [curColor, setCurColor] = useState('Black');
    const [cartStatus, setCartStatus] = useState(false);
    const [curSize, setCurSize] = useState('Large');
    const [curIndex, setCurIndex] = useState(-1);
    const [cartActive, setCartActive] = useState(false);
    const [quantity, setQauntity] = useState(1);
    let product = data[0];

    // decide if the product is wishlisted
    let isWishlisted, colors = [], sizes = [];
    // isWishlisted = wishlist.findIndex( item => item.slug === product.slug ) > -1 ? true : false;

    isWishlisted = false;
    if (product && product.variants.length > 0) {
        if (product.variants[0].size)
            product.variants.forEach(item => {
                if (sizes.findIndex(size => size.name === item.size.name) === -1) {
                    sizes.push({ name: item.size.name, value: item.size.size });
                }
            });

        if (product.variants[0].color) {
            product.variants.forEach(item => {
                if (colors.findIndex(color => color.name === item.color.name) === -1)
                    colors.push({ name: item.color.name, value: item.color.color });
            });
        }
    }
    useEffect(() => {
        return () => {
            setCurIndex(-1);
            resetValueHandler();
        }
    }, [product])
    const wishlistHandler = (e) => {
        e.preventDefault();

        if (toggleWishlist && !isWishlisted) {
            let currentTarget = e.currentTarget;
            currentTarget.classList.add('load-more-overlay', 'loading');
            toggleWishlist(product);

            setTimeout(() => {
                currentTarget.classList.remove('load-more-overlay', 'loading');
            }, 1000);
        } else {
            navigate('/pages/wishlist');
        }
    }



    const addToCartHandler = () => {
        if (!cartActive) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
            alert('Select the Req Filters')
        }
        if (product.stock > 0 && cartActive) {
            console.log('product detail  ==>> ', product)
            if (product.variants.length > 0) {
                let tmpName = product.name, tmpPrice;
                tmpName += curColor !== 'null' ? '-' + curColor : '';
                tmpName += curSize !== 'null' ? '-' + curSize : '';

                // product.variants[ curIndex ].sale_price


                console.log('tmpName==> ', tmpName)
                if (product.price[0] === product.price[1]) {
                    tmpPrice = product.variants[curIndex].sale_price;
                } else if (!product.variants[0].price && product.discount > 0) {
                    tmpPrice = product.price[0];
                } else {
                    tmpPrice = product.variants[curIndex].sale_price ? product.variants[curIndex].sale_price : product.variants[curIndex].price;
                }

                addToCart({ ...product, name: tmpName, qty: quantity, price: tmpPrice });
            } else {
                addToCart({ ...product, qty: quantity, price: product.price[0] });
            }
            // debugge1r;
            setCartStatus(true);
            console.log('window.innerWidth==>',window.innerWidth);
            if(window.innerWidth >= 770){
                showCartMenu();
            }
        }
        console.log('addToCart==>', addToCart);
    }
    const showCartMenu = () => {
        document.querySelector('.cart-dropdown').classList.add('opened');
        setTimeout(()=>{
            document.querySelector('.cart-dropdown').classList.remove('opened');
        },4000)
    }

    const resetValueHandler = (e) => {
        setCurColor('Black');
        setCurSize('Large');
    }

    function isDisabled(color, size) {
        if (color === 'null' || size === 'null') return false;

        if (sizes.length === 0) {
            return product.variants.findIndex(item => item.color.name === curColor) === -1;
        }

        if (colors.length === 0) {
            return product.variants.findIndex(item => item.size.name === curSize) === -1;
        }

        return product.variants.findIndex(item => item.color.name === color && item.size.name === size) === -1;
    }

    function changeQty(qty) {
        setQauntity(qty);
    }

    return (
        <div className={"product-details " + adClass}>
            {
                isNav ?
                    <div className="product-navigation">
                        <ul className="breadcrumb breadcrumb-lg">
                            <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                            <li><ALink href="#" className="active">Products</ALink></li>
                            <li>Detail</li>
                        </ul>

                        <ProductNav product={product} />
                    </div> : ''
            }

            <h2 className="product-name">{product.name}</h2>

            <div className='product-meta'>
                SKU: <span className='product-sku'>{product.sku}</span>
                CATEGORIES: <span className='product-brand'>
                    {
                        product.categories.map((item, index) =>
                            <React.Fragment key={item.name + '-' + index}>
                                <ALink href={{ pathname: '/shop', query: { category: item.slug } }}>
                                    {item.name}
                                </ALink>
                                {index < product.categories.length - 1 ? ', ' : ''}
                            </React.Fragment>
                        )}
                </span>
            </div>

            <div className="product-price mb-2">
                {
                    product.price[0] !== product.price[1] ?
                        product.variants.length === 0 || (product.variants.length > 0 && !product.variants[0].price) ?
                            <>
                                <ins className="new-price">&euro;{toDecimal(product.price[0])}</ins>
                                <del className="old-price">&euro;{toDecimal(product.price[1])}</del>
                            </>
                            :
                            < del className="new-price">&euro;{toDecimal(product.price[0])} – &euro;{toDecimal(product.price[1])}</del>
                        : <ins className="new-price">&euro;{toDecimal(product.price[0])}</ins>
                }
            </div>

            {
                product.price[0] !== product.price[1] && product.variants.length === 0 ?
                    <Countdown type={2} /> : ''
            }

            <div className="ratings-container">
                <div className="ratings-full">
                    <span className="ratings" style={{ width: 20 * product.ratings + '%' }}></span>
                    <span className="tooltiptext tooltip-top">{toDecimal(product.ratings)}</span>
                </div>

                <ALink href="#" className="rating-reviews">( {product.reviews} reviews )</ALink>
            </div>
            <div className='mb-2'>
            {/* <span className='mr-1'>Quantity</span> */}
            {/* <Quantity max={product.stock} product={product} onChangeQty={changeQty} /> */}
            </div>
            {
                product && product.variants.length > 0 ?
                    <>
                        {/* {
                            product.variants[ 0 ].color ?
                                <div className='product-form product-variations product-color'>
                                    <label>Color:</label>
                                    <div className='select-box'>
                                        <select name='color' className='form-control select-color' onChange={ setColorHandler } value={ curColor }>
                                            <option value="null">Choose an option</option>
                                            {
                                                colors.map( item =>
                                                    !isDisabled( item.name, curSize ) ?
                                                        <option value={ item.name } key={ "color-" + item.name }>{ item.name }</option> : ''
                                                )
                                            }
                                        </select>
                                    </div>
                                </div> : ""
                        } 

                         {
                            product.variants[ 0 ].size ?
                                <div className='product-form product-variations product-size mb-0 pb-2'>
                                    <label>Size:</label>
                                    <div className='product-form-group'>
                                        <div className='select-box'>
                                            <select name='size' className='form-control select-size' onChange={ setSizeHandler } value={ curSize }>
                                                <option value="null">Choose an option</option>
                                                {
                                                    sizes.map( item =>
                                                        !isDisabled( curColor, item.name ) ?
                                                            <option value={ item.name } key={ "size-" + item.name }>{ item.name }</option> : ''
                                                    )
                                                }
                                            </select>
                                        </div>

                                        <Collapse in={ 'null' !== curColor || 'null' !== curSize }>
                                            <div className="card-wrapper overflow-hidden reset-value-button w-100 mb-0">
                                                <ALink href='#' className='product-variation-clean' onClick={ resetValueHandler }>Clean All</ALink>
                                            </div>
                                        </Collapse>
                                    </div>
                                </div> : ""
                        }  */}
                        <DynamicProductVarient productDetail={product} scrollToRef={scrollToRef} getFilterData={HandelFilterData} />
                        <div className='product-variation-price'>
                            <Collapse in={cartActive && curIndex > -1}>
                                <div className="card-wrapper">
                                    {
                                        curIndex > -1 ?
                                            <div className="single-product-price">
                                                <p className="product-short-desc">{product.short_description}</p>
                                                {
                                                    product.variants[curIndex].price ?
                                                        product.variants[curIndex].sale_price ?
                                                            <div className="product-price mb-0">
                                                                <ins className="new-price">&euro;{toDecimal(product.variants[curIndex].sale_price)}</ins>
                                                                <del className="old-price">&euro;{toDecimal(product.variants[curIndex].price)}</del>
                                                            </div>
                                                            : <div className="product-price mb-0">
                                                                <ins className="new-price">&euro;{toDecimal(product.variants[curIndex].price)}</ins>
                                                            </div>
                                                        : ""
                                                }
                                            </div> : ''
                                    }
                                </div>
                            </Collapse>
                        </div>
                    </> : ''
            }

            {/* <hr className="product-divider"></hr> */}

            {
                isStickyCart ?
                <div className={`sticky-content fix-top product-sticky-content`} 
              >
                        <div className="container">
                            <div className="sticky-product-details" >
                                <figure className="product-image">
                                    <ALink href={'/product/default/' + product.slug}>
                                        <img src={product.pictures[0].url} width="90" height="90"
                                            alt="Product" />
                                    </ALink>
                                </figure>
                                <div>
                                    <h4 className="product-title entry-title"><ALink href={'/product/default/' + product.slug}>{product.name}</ALink></h4>
                                    <div className="product-info">
                                        <div className="product-price mb-0">
                                            {
                                                curIndex > -1 && product.variants[0] ?
                                                    product.variants[curIndex].price ?
                                                        product.variants[curIndex].sale_price ?
                                                            <>
                                                                <ins className="new-price">&euro;{toDecimal(product.variants[curIndex].sale_price)}</ins>
                                                                <del className="old-price">&euro;{toDecimal(product.variants[curIndex].price)}</del>
                                                            </>
                                                            :
                                                            <>
                                                                <ins className="new-price">&euro;{toDecimal(product.variants[curIndex].price)}</ins>
                                                            </>
                                                        : ""
                                                    :
                                                    product.price[0] !== product.price[1] ?
                                                        product.variants.length === 0 ?
                                                            <>
                                                                <ins className="new-price">&euro;{toDecimal(product.price[0])}</ins>
                                                                <del className="old-price">&euro;{toDecimal(product.price[1])}</del>
                                                            </>
                                                            :
                                                            < del className="new-price">&euro;{toDecimal(product.price[0])} – &euro;{toDecimal(product.price[1])}</del>
                                                        : <ins className="new-price">&euro;{toDecimal(product.price[0])}</ins>
                                            }
                                        </div>

                                        <div className="ratings-container mb-0">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{ width: 20 * product.ratings + '%' }}></span>
                                                <span className="tooltiptext tooltip-top">{toDecimal(product.ratings)}</span>
                                            </div>

                                            <ALink href="#" className="rating-reviews">( {product.reviews} reviews )</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-form product-qty pb-0">

                                <div className="product-form-group fixed-cart-footer-for-mobile">
                                    <Quantity max={ product.stock } product={ product } onChangeQty={ changeQty } />
                                    <button type='submit' className={`btn-product btn-cart text-normal ls-normal font-weight-semi-bold &euro; ${ cartActive ? '' : 'disabled' }`} onClick={addToCartHandler}><i className='d-icon-bag'></i>Add to Cart</button>
                                </div>
                            </div>
                            {cartStatus ?
                                <div className="product-form product-qty pb-0 forDesktopOnly">

                                    <div className="product-form-group fixed-cart-footer-for-mobile">
                                    <ALink href="/"><button className={`btn-product btn-cart text-normal ls-normal font-weight-semi-bold &euro;${ cartActive ? '' : 'disabled' }`} onClick={addToCartHandler}><i className='d-icon-shoppingbag'></i>Continue Shopping</button></ALink>
                                    <ALink href="/pages/cart"><button className={`btn-product btn-cart text-normal ls-normal font-weight-semi-bold &euro;${ cartActive ? '' : 'disabled' }`} onClick={addToCartHandler}><i className='d-icon-bag'></i>Go To Cart</button></ALink>
                                    </div>
                                </div> : <></>
                            }
                        </div>
                    </div>
                    :
                    <div className="product-form product-qty pb-0">
                        {/* <label className="d-none">QTY:</label> */}
                        <div className="product-form-group fixed-cart-footer-for-mobile">
                            <button className={`btn-product btn-cart text-normal ls-normal font-weight-semi-bold &euro;${ cartActive ? '' : 'disabled' }`} onClick={addToCartHandler}><i className='d-icon-bag'></i>Add to Cart</button>
                        </div>
                    </div>
            }

            <hr className="product-divider mb-3"></hr>

            <div className="product-footer">
                <div className="social-links mr-4">
                    <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                    <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                    <ALink href="#" className="social-link social-pinterest fab fa-pinterest-p"></ALink>
                </div>
                <span className="divider d-lg-show"></span> <a href="#" className={`btn-product btn-wishlist`} title={isWishlisted ? 'Browse wishlist' : 'Add to wishlist'} onClick={wishlistHandler}>
                    <i className={isWishlisted ? "d-icon-heart-full" : "d-icon-heart"}></i> {
                        isWishlisted ? 'Browse wishlist' : 'Add to Wishlist'
                    }
                </a>
            </div>
        </div>
    )
});
function mapStateToProps(state) {
    return {
        wishlist: state.wishlist.data ? state.wishlist.data : []
    }
}
export default connect(mapStateToProps, { addToCart: cartActions.addToCart })(DetailOne);
