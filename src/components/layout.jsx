import React , {useEffect ,useLayoutEffect} from 'react'
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {useLocation} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-image-lightbox/style.css';
import ALink from './custom-link';
import Header from './header/Heder';
import Footer from './Footer/footer';
import StickyFooter from './Footer/sticky-footer';
import '..//public/vendor/riode-fonts/riode-fonts.css'
import { showScrollTopHandler,scrollTopHandler, stickyHeaderHandler, stickyFooterHandler, resizeHandler } from './utils';
import { modalActions } from './utils/modal';
import MobileMenu from './menu/mobile-menu';

function Layout( { children, closeQuickview } ) {
    const router = useLocation();

    useLayoutEffect( () => {
        document.querySelector( 'body' ).classList.remove( 'loaded' );
    }, [ router.pathname ] )

    useEffect( () => {
        window.addEventListener( 'scroll', showScrollTopHandler, true );
        window.addEventListener( 'scroll', stickyHeaderHandler, true );
        window.addEventListener( 'scroll', stickyFooterHandler, true );
        window.addEventListener( 'resize', stickyHeaderHandler );
        window.addEventListener( 'resize', stickyFooterHandler );
        window.addEventListener( 'resize', resizeHandler );

        return () => {
            window.removeEventListener( 'scroll', showScrollTopHandler, true );
            window.removeEventListener( 'scroll', stickyHeaderHandler, true );
            window.removeEventListener( 'scroll', stickyFooterHandler, true );
            window.removeEventListener( 'resize', stickyHeaderHandler );
            window.removeEventListener( 'resize', stickyFooterHandler );
            window.removeEventListener( 'resize', resizeHandler );
        }
    }, [] )

    useEffect( () => {
        closeQuickview();

        let bodyClasses = [ ...document.querySelector( "body" ).classList ];
        for ( let i = 0; i < bodyClasses.length; i++ ) {
            document.querySelector( 'body' ).classList.remove( bodyClasses[ i ] );
        }

        setTimeout( () => {
            document.querySelector( 'body' ).classList.add( 'loaded' );
        }, 50 );
    }, [ router.pathname ] )

    return (
        <>
            <div className="page-wrapper">
                <Header />

                { children }

                <Footer />

                <StickyFooter />
            </div>

            <ALink id="scroll-top" href="#" title="Top" role="button" className="scroll-top" onClick={ () => scrollTopHandler( false ) }><i className="d-icon-arrow-up"></i></ALink>

            <MobileMenu />

            <ToastContainer
                autoClose={ 3000 }
                duration={ 300 }
                newestOnTo={ true }
                className="toast-container"
                position="bottom-left"
                closeButton={ false }
                hideProgressBar={ true }
                newestOnTop={ true }
            />

            {/* <Quickview /> */}

            {/* <VideoModal /> */}
        </>
    )
}

export default connect( null, { closeQuickview: modalActions.closeQuickview } )( Layout );
