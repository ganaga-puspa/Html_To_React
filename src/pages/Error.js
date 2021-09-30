import React from 'react'
import BlueFooter from '../components/BlueFooter'
import { DarkNav } from '../components/Navbar'

export default function Error() {
    return (
        <div>
            
            <DarkNav />


            {/* <!-- ...::: Strat Breadcrumb Section :::... --> */}
    <div className="breadcrumb-section">
        <div className="box-wrapper">
            <div className="breadcrumb-wrapper breadcrumb-wrapper--style-1 pos-relative">
                <div className="breadcrumb-bg">
                    <img src="assets/images/breadcrumb/breadcrumb-img-product-details-page.webp" alt=""/>
                </div>
                <div className="breadcrumb-content section-fluid-270">
                    <div className="breadcrumb-wrapper">
                        <div className="content">
                            <span className="title-tag">BEST DEAL FOREVER</span>
                            <h2 className="title"><span className="text-mark">404</span> Page</h2>
                        </div>
                        <ul className="breadcrumb-nav">
                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                            <li>404 Error</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: End Breadcrumb Section :::... --></div> */}

    {/* <!-- ...:::: Start Error Section :::... --> */}
    <div className="error-section section-fluid-270 section-top-gap-100">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="error-form text-center">
                        <img className="img-fluid" src="assets/images/error/error.png" alt=""/>
                        <p data-aos="fade-up">Sorry but the page you are looking for does not exist, have been<br/> removed, name changed or is temporarily unavailable.</p>
                        <div className="row">
                            <div className="col-10 offset-1 col-md-4 offset-md-4">
                                <div className="default-search-style d-flex">
                                    <input className="default-search-style-input-box" type="search" placeholder="Search..." required/>
                                    <button className="default-search-style-input-btn" type="submit"><img src="assets/images/icons/icon-search.svg" alt=""/></button>
                                </div>
                                <a href="index.html" className="btn btn-sm btn-default-outline mt-4">Back to home page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...:::: End Error Section :::... --> */}


    <BlueFooter />

        </div>
    )
}
