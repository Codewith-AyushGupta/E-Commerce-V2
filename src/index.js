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
          <Route path="elements/cta" element={<Layout children={<Cta/>}/>} />
          <Route path="*" element={<Layout children={<Error404/>}/>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
