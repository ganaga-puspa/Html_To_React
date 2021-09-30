import React from 'react'
import BlueFooter from '../components/BlueFooter'
import { ColorNav } from '../components/Navbar'
import SubscribeSection from '../components/SubscribeSection'

export default function About() {
    return (
        <div>
            <ColorNav />
            


            {/* <!-- ...::: Strat Breadcrumb Section :::... --> */}
    <div className="breadcrumb-section">
        <div className="box-wrapper">
            <div className="breadcrumb-wrapper breadcrumb-wrapper--style-2 breadcrumb-bg pos-relative">
                <div className=""></div>
                <div className="breadcrumb-content section-fluid-270">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-md-7">
                                <div className="content text-center">
                                    <div className="logo"><img src="assets/images/logo/logo-large.svg" alt=""/></div>
                                    <p>the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: End Breadcrumb Section :::... --> */}


    
    {/* <!-- ...::: Strat About Hero Section :::... --> */}
    <div className="about-hero-image">
        <div className="box-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="about-hero-img text-center">
                            <img className="img-fluid" src="assets/images/breadcrumb/breadcrumb-img-about-page.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: End About Hero Section :::... --> */}


    {/* <!-- ...::: Strat About Section :::... --> */}
    <div className="about-section section-fluid-270 section-top-gap-100">
        <div className="section-wrapper">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-10 col-lg-6 col-xl-4 col-xxl-5">
                        <div className="section-content">
                            <span className="title-tag m-0">BEST DEAL FOREVER</span>
                            <h2 className="section-title-stylish">
                                About <span>Martup</span> Best
                                <span>eCommerce </span> site.
                            </h2>
                            <p>the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book</p>

                            <div className="video-link">
                                <span className="video-text d-block text-uppercase">Play Video</span>
                                <a className="wave-btn vbox-item" href="https://youtu.be/MKjhBO2xQzg" data-autoplay="true" data-vbtype="video">
                                    <div className="ripple"><span className="material-icons">play_arrow</span></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-6 col-xl-7 col-xxl offset-xl-1">
                        <div className="image">
                            <img src="assets/images/about/about-section-img.webp" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: End About Section :::... --> */}

    {/* <!-- ...::: Strat Shipping Section :::... --> */}
    <div className="shipping-section section-fluid-270 section-top-gap-100">
        <div className="box-wrapper">
            <div className="section-wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
                            <div className="section-content section-content-gap-60 text-center">
                                <h2 className="section-title fw-bold">Why we are best</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Start Shipping Wrapper --> */}
            <div className="shipping-wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-center justify-content-sm-start mb-n40">
                        <div className="col-lg-3 col-sm-6 col-12 mb-40">
                            {/* <!-- Start Shipping Single Items --> */}
                            <div className="shipping-single-item--style-2">
                                <div className="icon">
                                    <img className="img-fluid" src="assets/images/icons/shipping-icon-4.svg" alt=""/>
                                </div>
                                <div className="content">
                                    <h4 className="title">Money Back Guarantee</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                                </div>
                            </div>
                            {/* <!-- Start Shipping Single Items --> */}
                        </div>
                        <div className="col-lg-3 offset-xl-1 col-sm-6 col-12 mb-40">
                            {/* <!-- Start Shipping Single Items --> */}
                            <div className="shipping-single-item--style-2">
                                <div className="icon">
                                    <img className="img-fluid" src="assets/images/icons/shipping-icon-5.svg" alt=""/>
                                </div>
                                <div className="content">
                                    <h4 className="title">Take a Great Discount</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                                </div>
                            </div>
                            {/* <!-- Start Shipping Single Items --> */}
                        </div>
                        <div className="col-lg-3 offset-xl-1 col-sm-6 col-12 mb-40">
                            {/* <!-- Start Shipping Single Items --> */}
                            <div className="shipping-single-item--style-2">
                                <div className="icon">
                                    <img className="img-fluid" src="assets/images/icons/shipping-icon-6.svg" alt=""/>
                                </div>
                                <div className="content">
                                    <h4 className="title">Free Shipping</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                                </div>
                            </div>
                            {/* <!-- Start Shipping Single Items --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Shipping Wrapper --> */}
        </div>
    </div>
    {/* <!-- ...::: End Shipping Section :::... --> */}

    {/* <!-- ...::: Strat Company Logo Section Section :::... --> */}
    <div className="company-logo-section section-fluid-270 section-top-gap-100">
        <div className="box-wrapper">
            <div className="section-wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
                            <div className="section-content section-content-gap-60 text-center">
                                <h2 className="section-title fw-bold">Our Clients</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="company-logo-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Start Company Slider --> */}
                            <div className="company-slider">
                                {/* <!-- Slider main container --> */}
                                <div className="swiper-container">
                                    {/* <!-- Additional required wrapper --> */}
                                    <div className="swiper-wrapper">
                                        {/* <!-- Slides --> */}
                                        {/* <!-- Start Company Slider Single Item --> */}
                                        <a href="/#" className="company-slider-single-item swiper-slide">
                                            <div className="image">
                                                <img className="img-fluid" src="assets/images/company-logo/company-logo-1.png" alt=""/>
                                            </div>
                                        </a>
                                        {/* <!-- End Company Slider Single Item --> */}
                                        {/* <!-- Start Company Slider Single Item --> */}
                                        <a href="/#" className="company-slider-single-item swiper-slide">
                                            <div className="image">
                                                <img className="img-fluid" src="assets/images/company-logo/company-logo-2.png" alt=""/>
                                            </div>
                                        </a>
                                        {/* <!-- End Company Slider Single Item --> */}
                                        {/* <!-- Start Company Slider Single Item --> */}
                                        <a href="/#" className="company-slider-single-item swiper-slide">
                                            <div className="image">
                                                <img className="img-fluid" src="assets/images/company-logo/company-logo-3.png" alt=""/>
                                            </div>
                                        </a>
                                        {/* <!-- End Company Slider Single Item --> */}
                                        {/* <!-- Start Company Slider Single Item --> */}
                                        <a href="/#" className="company-slider-single-item swiper-slide">
                                            <div className="image">
                                                <img className="img-fluid" src="assets/images/company-logo/company-logo-4.png" alt=""/>
                                            </div>
                                        </a>
                                        {/* <!-- End Company Slider Single Item --> */}
                                        {/* <!-- Start Company Slider Single Item --> */}
                                        <a href="/#" className="company-slider-single-item swiper-slide">
                                            <div className="image">
                                                <img className="img-fluid" src="assets/images/company-logo/company-logo-5.png" alt=""/>
                                            </div>
                                        </a>
                                        {/* <!-- End Company Slider Single Item --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Company Slider --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: Strat Company Logo Section Section :::... --> */}

   
          <SubscribeSection />

            <BlueFooter />
        </div>
        
    )
}


