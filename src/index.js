import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './components/store';
import { Provider } from 'react-redux';
import Layout from './components/layout';
import AboutUs from './components/pages/about-us';
import './public/sass/style.scss'
import ContactUs from './components/pages/contact-us';
import Error404 from './components/pages/Error404'
import Account from './components/pages/Account';
import CommingSoon from './components/pages/CommingSoon';
import Faqs from './components/pages/faqs';
import HomePage from './components/homeContent/Home';
import Cta from './components/pages/element/cta';
import Horizontal from './components/products/productCategories/Horizontal';
import ProductHome from './components/products/productDetailPages/productHome';
import OffCanvansFilter from './components/categories/OffCanvusFilter/Off-Canvas-Filter';
import TestFile from './components/testFile';
import Products from './components/elements/products';
import Typography from './components/elements/Typography';
import Titles from './components/elements/Titles';
import ProductCategories from './components/elements/product-category';
import Buttons from './components/elements/buttons';
import Accordions from './components/elements/Accordions';
import Alert from './components/elements/Alert';
import ElementTabs from './components/elements/tabs';
import Instagrams from './components/elements/instagrams';
import IconBoxes from './components/elements/icon-boxes';
import Icon from './components/elements/icon';
import BlogPosts from './components/elements/blog-posts';
import Classic from './components/blogs/Classics';
import Listing from './components/blogs/listing';
import PostSingle from './components/blogs/single/[slug]';
import PostGrid from './components/blogs/grid/[slug]';
import PostMasonry from './components/blogs/masonry/[column]';
import PostMaskGrid from './components/blogs/mask/grid';
import BoxedBanner from './components/shop/boxed-banner';
import BannerSidebar from './components/shop/banner-sidebar';
import HorizontalFilter from './components/shop/horizontal-filter';
import NavigationFilter from './components/shop/navigation-filter';
import RightSidebar from './components/shop/right-sidebar';
import Slug from './components/shop/grid/[slug]';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Order from './components/Order/order';
import InfiniteScroll from './components/shop/infinite-scroll';
import Gridslug from './components/products/grid/[Gridslug]';
import MansonrySlug from './components/products/mansonry/[mansonrySlug]';
import GallerySlug from './components/products/Gallery/[gallerySlug]';
import FullWidthSlug from './components/products/FullWidth/[FullWidthSlug]';
import StickyInforSlug from './components/products/StickyInfo/[StickyInforSlug]';
import LeftRightStickySlug from './components/products/Stickyboth/[leftRightStickySlug]';
import HorizontalSlug from './components/products/horizontal/[horizontalSlug]';
import LeftSlideSlug from './components/products/leftSlideBar/[leftSlideSlug]';
import RightSlideBarSlug from './components/products/[RightSlideBarSlug].jsx/[RightSlideBarSlug]';
import StickyCartSlug from './components/products/stickyCart/[StickyCartSlug]';
import Testimonials from './components/elements/Testimonials';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout children={<HomePage/>}/>} />

          <Route path="pages/aboutUs" element={<Layout children={<AboutUs/>}/>} />
          <Route path="pages/ContactUs" element={<Layout children={<ContactUs/>}/>} />
          <Route path="pages/404" element={<Layout children={<Error404/>}/>} />
          <Route path="pages/account" element={<Layout children={<Account/>}/>} />
          <Route path="pages/coming-soon" element={<Layout children={<CommingSoon/>}/>} />
          <Route path="pages/faqs" element={<Layout children={<Faqs/>}/>} />
          <Route path="pages/cart" element={<Layout children={<Cart />}/>} />
          <Route path="pages/checkout" element={<Layout children={<Checkout />}/>} />
          <Route path="pages/order" element={<Layout children={<Order />}/>} />

          <Route path="elements/cta" element={<Layout children={<Cta/>}/>} />
          <Route path="elements/products" element={<Layout children={<Products/>}/>} />
          <Route path="elements/Typography" element={<Layout children={<Typography/>}/>} />
          <Route path="elements/Titles" element={<Layout children={<Titles/>}/>} />
          <Route path="elements/product-category" element={<Layout children={<ProductCategories/>}/>} />
          <Route path="elements/buttons" element={<Layout children={<Buttons/>}/>} />
          <Route path="elements/accordions" element={<Layout children={<Accordions/>}/>} />
          <Route path="elements/alerts" element={<Layout children={<Alert/>}/>} />
          <Route path="elements/tabs" element={<Layout children={<ElementTabs/>}/>} />
          <Route path="elements/instagrams" element={<Layout children={<Instagrams/>}/>} />
          <Route path="elements/icon-boxes" element={<Layout children={<IconBoxes/>}/>} />
          <Route path="elements/icons" element={<Layout children={<Icon/>}/>} />
          <Route path="elements/blog-posts" element={<Layout children={<BlogPosts/>}/>} />
          <Route path="elements/testimonials" element={<Layout children={<Testimonials/>}/>} />

          <Route path="blog/classic" element={<Layout children={<Classic/>}/>} />
          <Route path="blog/listing" element={<Layout children={<Listing/>}/>} />
          <Route path="blog/single/*" element={<Layout children={<PostSingle/>}/>} />
          <Route path="blog/grid/*" element={<Layout children={<PostGrid router= {window.location}/>}/>} />
          <Route path="blog/masonry/*" element={<Layout children={<PostMasonry router= {window.location}/>}/>} />
          <Route path="blog/mask/grid" element={<Layout children={<PostMaskGrid />}/>} />
          <Route path="blog/mask/masonry" element={<Layout children={<PostMaskGrid />}/>} />

          <Route path="shop/infinite-scroll" element={<Layout children={<InfiniteScroll />}/>} />
          <Route path="shop/boxed-banner" element={<Layout children={<BoxedBanner />}/>} />
          <Route path="shop/banner-sidebar" element={<Layout children={<BannerSidebar />}/>} />
          <Route path="shop/navigation-filter" element={<Layout children={<NavigationFilter />}/>} />
          <Route path="shop/right-sidebar" element={<Layout children={<RightSidebar />}/>} />
          <Route path="shop/grid/*" element={<Layout children={<Slug />}/>} />
          <Route path="shop/horizontal-filter" element={<Layout children={<HorizontalFilter/>}/>} />
          <Route path="shop/off-canvas-filter" element={<Layout children={<OffCanvansFilter/>}/>} />
        
          <Route path="product/default/*" element={<Layout children={<ProductHome/>}/>} />
          <Route path="product/grid/note-character-half" element={<Layout children={<Gridslug />}/>} />
          <Route path="product/masonry/fashionable-hooded-coat" element={<Layout children={<MansonrySlug />}/>} />
          <Route path="product/gallery/note-character-half" element={<Layout children={<GallerySlug />}/>} />
          <Route path="product/full-width/note-character-half" element={<Layout children={<FullWidthSlug />}/>} />
          <Route path="product/sticky-info/note-character-half" element={<Layout children={<StickyInforSlug />}/>} />
          <Route path="product/sticky-both/note-character-half" element={<Layout children={<LeftRightStickySlug />}/>} />
          <Route path="product/horizontal/note-character-half" element={<Layout children={<HorizontalSlug />}/>} />
          <Route path="product/left-sidebar/note-character-half" element={<Layout children={<LeftSlideSlug />}/>} />
          <Route path="product/right-sidebar/note-character-half" element={<Layout children={<RightSlideBarSlug />}/>} />
          <Route path="product/sticky-cart/note-character-half" element={<Layout children={<StickyCartSlug />}/>} />

          <Route path="*" element={<Layout children={<Error404/>}/>} />
          <Route path="test" element={<Layout children={<TestFile/>}/>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
