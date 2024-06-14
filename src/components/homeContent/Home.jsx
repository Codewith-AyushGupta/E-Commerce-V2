import React from 'react';
import { Helmet } from 'react-helmet';

// import { useQuery } from "@apollo/react-hooks";

// // Import Apollo Server and Query
// import withApollo from '../server/apollo';
import homeData from './Data/homeData.json'

// import Home Components
import NewsletterModal from './modals/NewsletterModal';
import IntroSection from './modals/IntroSection';
import BestCollection from './modals/best-collection';
import CategorySection from './modals/CategorySection'
import PromoSection from './modals/PromoSection';
import FeaturedCollection from './modals/FeaturedCollection';
// import InstagramSection from '~/components/partials/home/instagram-section';
import ServiceBox from './modals/ServiceBox';

function HomePage() {
    const  loading=false, error=false ;
    const data = homeData.data;
    const featured = data && data.specialProducts.featured.slice(0,4);
    const bestSelling = data && data.specialProducts.bestSelling.slice(0,4);

    return (
        <div className="main home demo2-cls">
            <Helmet>
                <title>Riode React eCommerce Template - Home</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Home</h1>

            <div className="page-content">
                <div className="container">
                    <IntroSection />

                    <BestCollection products={ bestSelling } loading={ loading } />
                    <CategorySection />

                    <PromoSection />

                    <FeaturedCollection products={ featured } loading={ loading } />

                    {/* <ServiceBox /> */}

                    {/* <InstagramSection /> */}
                </div>
            </div>

            <NewsletterModal />
        </div>
    )
}

export default HomePage