import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import MediaOne from './utils/MediaOne'
import MasterData from '..//..//shop/product-list/data/getProduct.json'
import DetailOne from './utils/detail-one'
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
  
            {/* <DescOne product={ Data} /> */}
  
            {/* <RelatedProducts products={ related } /> */}
          </div>
        </div>
      </>
    )
  }
  
  export default ProductHome
  