import React from 'react';
import { Helmet } from 'react-helmet';


import ShopBanner from './ShopBanner';
import SidebarFilterTwo from './slideBar/SidebarFilterTwo';
import ProductListOne from './product-list/product-list-one';
import ToolBox from './ToolBox';
    
import SlideToggle from 'react-slide-toggle';

function ShopNavigationFilter() {
    let expanded = false;

    return (
        <main className="main navigation-filter">
            <Helmet>
                <title>Riode React eCommerce Template - Shop Navigation Filter</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Shop Navigation Filter</h1>

            <ShopBanner subTitle="categories" title="Navigation Filter" current="Navigation Filter" />

            <div className="page-content mb-0 mb-lg-10 pb-0 pb-lg-6">
                <div className="container">
                    <div className="toolbox-wrap">
                        <SlideToggle collapsed={ expanded ? false : true } >
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className={ `card navigation-card ${ toggleState.toLowerCase() }` }>
                                    <div className="card-header" onClick={ onToggle } >
                                        <span className="toggle">
                                            <span className="navigation-toggle-btn d-none">toggle button</span>
                                        </span>
                                    </div>

                                    <div ref={ setCollapsibleElement }>
                                        <div className={ `card-body p-0 ${ toggleState.toLowerCase() }` }>
                                            <SidebarFilterTwo />
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </SlideToggle >

                        <ToolBox type="navigation" />
                    </div>

                    <ProductListOne isToolbox={ false } itemsPerRow={ 4 } />
                </div>
            </div>
        </main >
    )
}

export default React.memo( ShopNavigationFilter );