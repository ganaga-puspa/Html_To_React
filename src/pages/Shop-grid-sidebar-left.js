import React from 'react'
import BlueFooter from '../components/BlueFooter'
import { DarkNav } from '../components/Navbar'

export default function ShopGridSidebarLeft() {
    return (
        <div>
            
            <DarkNav />


            {/* <!-- ...::: Strat Breadcrumb Section :::... --> */}
    <div className="breadcrumb-section">
        <div className="box-wrapper">
            <div className="breadcrumb-wrapper breadcrumb-wrapper--style-1 pos-relative">
                <div className="breadcrumb-bg">
                    <img src="assets/images/breadcrumb/breadcrumb-img-shop-page.webp" alt=""/>
                </div>
                <div className="breadcrumb-content section-fluid-270">
                    <div className="breadcrumb-wrapper">
                        <div className="content">
                            <span className="title-tag">BEST DEAL FOREVER</span>
                            <h2 className="title"><span className="text-mark">Hurry!</span> <br/> Get your product now</h2>
                        </div>
                        <ul className="breadcrumb-nav">
                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                            <li> Shop Page Left Sidebar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: End Breadcrumb Section :::... --></div> */}



    {/* <!-- ...:::: Start Shop List Section:::... --> */}
    <div className="shop-list-section section-fluid-270 section-top-gap-100">
        <div className="box-wrapper">
            <div className="shop-list-wrapper">
                <div className="container-fluid">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-xl-3 col-lg-3">
                            {/* <!-- Start Sidebar Area --> */}
                            <div className="siderbar-section">
                                {/* <!-- Start Single Sidebar Widget --> */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title title-border title-border">Categories</h6>
                                    <div className="sidebar-content">
                                        <div className="filter-type-select">
                                            <ul>
                                                <li>
                                                    <label className="checkbox-default" for="men">
                                                        <input type="checkbox" id="men"/>
                                                        <span>Men</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="women">
                                                        <input type="checkbox" id="women"/>
                                                        <span>Women</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="kid">
                                                        <input type="checkbox" id="kid"/>
                                                        <span>Kid</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="fashion">
                                                        <input type="checkbox" id="fashion"/>
                                                        <span>Fashion</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="new-arrival">
                                                        <input type="checkbox" id="new-arrival"/>
                                                        <span>New Arrival</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                {/* </div> <!-- End Single Sidebar Widget --> */}

                                {/* <!-- Start Single Sidebar Widget --> */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title title-border">Color</h6>
                                    <div className="sidebar-content">
                                        <div className="filter-type-select">
                                            <ul>
                                                <li>
                                                    <label className="checkbox-default" for="red">
                                                        <input type="checkbox" id="red"/>
                                                        <span>Red</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="green">
                                                        <input type="checkbox" id="green"/>
                                                        <span>Green</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="blue">
                                                        <input type="checkbox" id="blue"/>
                                                        <span>Blue</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="black">
                                                        <input type="checkbox" id="black"/>
                                                        <span>Black</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="pink">
                                                        <input type="checkbox" id="pink"/>
                                                        <span>Pink</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                 {/* <!-- End Single Sidebar Widget --> */}

                                {/* <!-- Start Single Sidebar Widget --> */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title title-border">FILTER BY PRICE</h6>
                                    <div className="sidebar-content">
                                        <input type="text" className="js-range-slider" name="my_range" value="" data-type="double" data-min="0" data-max="7000" data-from="500" data-to="5000" />
                                    </div>
                                </div> 
                                {/* <!-- End Single Sidebar Widget --> */}

                                {/* <!-- Start Single Sidebar Widget --> */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title title-border">Material</h6>
                                    <div className="sidebar-content">
                                        <div className="filter-type-select">
                                            <ul>
                                                <li>
                                                    <label className="checkbox-default" for="fabric">
                                                        <input type="checkbox" id="fabric"/>
                                                        <span>Fabric</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="wood">
                                                        <input type="checkbox" id="wood"/>
                                                        <span>Wood</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox-default" for="cotton">
                                                        <input type="checkbox" id="cotton"/>
                                                        <span>Cotton</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- End Single Sidebar Widget --> */}

                                {/* <!-- Start Single Sidebar Widget --> */}
                                <div className="sidebar-single-widget">
                                    <div className="sidebar-content">
                                        <div className="banner-animate--flash">
                                            <a href="product-details-default.html" className="sidebar-banner img-responsive">
                                                <img src="assets/images/banner/banner-sidebar.webp" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- End Single Sidebar Widget --> */}

                                {/* <!-- Start Single Sidebar Widget --> */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title title-border">Tags</h6>
                                    <div className="sidebar-content">
                                        <ul className="tag-link">
                                            <li><a href="/#">Fabric</a></li>
                                            <li><a href="/#">Cloth</a></li>
                                            <li><a href="/#">Fashion</a></li>
                                            <li><a href="/#">kid</a></li>
                                            <li><a href="/#">Fakoli</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- End Single Sidebar Widget --> */}
                            </div> 
                            {/* <!-- End Sidebar Area --> */}
                        </div>
                        <div className="col-xl-8 offset-xl-1 col-lg-9">
                            <ul className="product-shop-filter-info">
                                <li className="prduct-item-traking"><span>total 08 of 40</span></li>
                                <li className="prduct-item-filter">
                                    <select name="choice">
                                        <option value="first">New Arrival</option>
                                        <option value="second" selected>Featured</option>
                                        <option value="third">Popular</option>
                                    </select>
                                </li>
                            </ul>
                            <div className="product-shop-list-items">
                                <div className="row mb-n25">
                                    <div className="col-md-6 col-12 mb-25">
                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                        <div className="product-single-item-style-1">
                                            <a href="product-details-default.html" className="image img-responsive">
                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-1.webp" alt=""/>
                                                <ul className="tooltip-tag-items">
                                                    <li className="color-green">15%</li>
                                                </ul>
                                            </a>
                                            <div className="content">
                                                <div className="top">
                                                    <span className="catagory">MEN</span>
                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                </div>
                                                <div className="bottom">
                                                    <ul className="review-star">
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                    </ul>
                                                    <div className="product-event-items">
                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                    </div>
                                    <div className="col-md-6 col-12 mb-25">
                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                        <div className="product-single-item-style-1">
                                            <a href="product-details-default.html" className="image img-responsive">
                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-2.webp" alt=""/>
                                            </a>
                                            <div className="content">
                                                <div className="top">
                                                    <span className="catagory">WOMEN</span>
                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                    <span className="price">$550.00</span>
                                                </div>
                                                <div className="bottom">
                                                    <ul className="review-star">
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                    </ul>
                                                    <div className="product-event-items">
                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                    </div>
                                    <div className="col-md-6 col-12 mb-25">
                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                        <div className="product-single-item-style-1">
                                            <a href="product-details-default.html" className="image img-responsive">
                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-3.webp" alt=""/>
                                            </a>
                                            <div className="content">
                                                <div className="top">
                                                    <span className="catagory">WOMEN</span>
                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                    <span className="price">$1050.00</span>
                                                </div>
                                                <div className="bottom">
                                                    <ul className="review-star">
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                    </ul>
                                                    <div className="product-event-items">
                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                    </div>
                                    <div className="col-md-6 col-12 mb-25">
                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                        <div className="product-single-item-style-1 swiper-slide">
                                            <a href="product-details-default.html" className="image img-responsive">
                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-5.webp" alt=""/>
                                                <ul className="tooltip-tag-items">
                                                    <li className="color-yellow">15%</li>
                                                </ul>
                                            </a>
                                            <div className="content">
                                                <div className="top">
                                                    <span className="catagory">WOMEN</span>
                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                </div>
                                                <div className="bottom">
                                                    <ul className="review-star">
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                    </ul>
                                                    <div className="product-event-items">
                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                    </div>
                                    <div className="col-md-6 col-12 mb-25">
                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                        <div className="product-single-item-style-1 swiper-slide">
                                            <a href="product-details-default.html" className="image img-responsive">
                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-1.webp" alt=""/>
                                                <ul className="tooltip-tag-items">
                                                    <li className="color-green">15%</li>
                                                </ul>
                                            </a>
                                            <div className="content">
                                                <div className="top">
                                                    <span className="catagory">MEN</span>
                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                </div>
                                                <div className="bottom">
                                                    <ul className="review-star">
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                    </ul>
                                                    <div className="product-event-items">
                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                    </div>
                                    <div className="col-md-6 col-12 mb-25">
                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                        <div className="product-single-item-style-1">
                                            <a href="product-details-default.html" className="image img-responsive">
                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-2.webp" alt=""/>
                                            </a>
                                            <div className="content">
                                                <div className="top">
                                                    <span className="catagory">WOMEN</span>
                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                    <span className="price">$550.00</span>
                                                </div>
                                                <div className="bottom">
                                                    <ul className="review-star">
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                    </ul>
                                                    <div className="product-event-items">
                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                    </div>
                                    <div className="col-md-6 col-12 mb-25">
                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                        <div className="product-single-item-style-1">
                                            <a href="product-details-default.html" className="image img-responsive">
                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-4.webp" alt=""/>
                                            </a>
                                            <div className="content">
                                                <div className="top">
                                                    <span className="catagory">WOMEN</span>
                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                    <span className="price">$350.00</span>
                                                </div>
                                                <div className="bottom">
                                                    <ul className="review-star">
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                    </ul>
                                                    <div className="product-event-items">
                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                    </div>
                                    <div className="col-md-6 col-12 mb-25">
                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                        <div className="product-single-item-style-1">
                                            <a href="product-details-default.html" className="image img-responsive">
                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-3.webp" alt=""/>
                                            </a>
                                            <div className="content">
                                                <div className="top">
                                                    <span className="catagory">WOMEN</span>
                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                    <span className="price">$1050.00</span>
                                                </div>
                                                <div className="bottom">
                                                    <ul className="review-star">
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                    </ul>
                                                    <div className="product-event-items">
                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Start Pagination --> */}
                            <div className="d-flex justify-content-center">
                                <ul className="page-pagination">
                                    <li className="icon-direction icon-direction--prev"><a href="/#"><span className="material-icons-outlined">arrow_left</span></a></li>
                                    <li><a href="/#">1</a></li>
                                    <li><a href="/#">2</a></li>
                                    <li><a href="/#">3</a></li>
                                    <li>...</li>
                                    <li><a href="/#">10</a></li>
                                    <li className="icon-direction icon-direction--next"><a href="/#"><span className="material-icons-outlined">arrow_right</span></a></li>
                                </ul>
                            </div>
                            {/* <!-- End Pagination --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    {/* <!-- ...:::: End Shop List Section:::... --> */}



    </div> 


    <BlueFooter />
        </div>
    )
}
