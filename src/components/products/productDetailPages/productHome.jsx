import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
// import MediaOne from './utils/Media/MediaOne'
import MasterData from '..//..//shop/product-list/data/getProduct.json'
import DetailOne from './utils/Details/detail-oneGenral'
import data from '..//..//shop/product-list/data/getProductOne.json'
import DescOne from '../description/DescOne'
import RelatedProducts from '../related-products'
import MediaOne from './utils/Media/MediaOneForGental'
function ProductHome(props) {
    // debugger;
    const selectedProduct = window.location.pathname.split('/')[3];
    // alert(selectedProduct);
    const matchingProducts = [];
    console.log(JSON.stringify(MasterData))
    MasterData.products.data.forEach(product => {
    if (product.slug.includes(selectedProduct)) {
        matchingProducts.push(product);
    }
    });
    const related = data.products.data[0].related;

    // alert(JSON.stringify(selectedProduct));
    const product = [{}]
    // const data = ReactDOM.createRoot(document.getElementById('innserRoot'))
    return (
      <>
        <Helmet>
          <title>Product Detail Page</title>
        </Helmet>
        <div className='page-content mb-10 pb-6 ' >
          <div className="container vertical">
            <div className="product product-single row mb-2 ">
              <div className="col-md-6 sticky-sidebar-wrapper ">
                <MediaOne product={matchingProducts} />
              </div>
  
              <div className="col-md-6">
                <DetailOne data={matchingProducts} isStickyCart={ true } adClass="mt-4 mt-md-0"/>
              </div>
            </div>
  
            {/* <DescOne product={ matchingProducts} /> */}
  
            <RelatedProducts products={ related } />
          </div>
        </div>
      </>
    )
  }
  
  export default ProductHome
  