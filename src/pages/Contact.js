import React from 'react'
import BlueFooter from '../components/BlueFooter'
import { DarkNav } from '../components/Navbar'
import Iframe from 'react-iframe'

export default function Contact() {
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
                            <h2 className="title"><span className="text-mark">Contact</span> Page</h2>
                        </div>
                        <ul className="breadcrumb-nav">
                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: End Breadcrumb Section :::... --></div> */}


    {/* <!-- ...::::Start Map Section:::... --> */}
    <div className="map-section section-fluid-270 section-top-gap-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <Iframe id="gmap_canvas" url="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    {/* <!-- ...::::End  Map Section:::... --> */}

    {/* <!-- ...::::Start Contact Section:::... --> */}
    <div className="contact-section section-fluid-270">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/* <!-- Start Contact Details --> */}
                    <div className="contact-details-wrapper section-top-gap-120">
                        <div className="contact-details">
                            {/* <!-- Start Contact Details Single Item --> */}
                            <div className="contact-details-single-item">
                                <div className="contact-details-icon">
                                    <span className="material-icons">phone</span>
                                </div>
                                <div className="contact-details-content contact-phone">
                                    <a href="tel:+012345678102">+012 345 678 102</a>
                                    <a href="tel:+012345678102">+012 345 678 102</a>
                                </div>
                            </div> 
                            {/* <!-- End Contact Details Single Item --> */}

                            {/* <!-- Start Contact Details Single Item --> */}
                            <div className="contact-details-single-item">
                                <div className="contact-details-icon">
                                    <span className="material-icons">language</span>
                                </div>
                                <div className="contact-details-content contact-phone">
                                    <a href="mailto:urname@email.com">urname@email.com</a>
                                    <a href="http://www.yourwebsite.com">www.yourwebsite.com</a>
                                </div>
                            </div> 
                            {/* <!-- End Contact Details Single Item --> */}

                            {/* <!-- Start Contact Details Single Item --> */}
                            <div className="contact-details-single-item">
                                <div className="contact-details-icon">
                                    <span className="material-icons">location_on</span>
                                </div>
                                <div className="contact-details-content contact-phone">
                                    <span>Address goes here,</span>
                                    <span>street, Crossroad 123.</span>
                                </div>
                            </div> 
                            {/* <!-- End Contact Details Single Item --> */}
                        </div>
                        {/* <!-- Start Contact Social Link --> */}
                        <div className="contact-social">
                            <h4>Follow Us</h4>
                            <ul>
                                <li><a href="https://example.com/"><img className="icon-svg" src="assets/images/icons/icon-facebook-f-dark.svg" alt=""/></a></li>
                                <li><a href="https://example.com/"><img className="icon-svg" src="assets/images/icons/icon-twitter-dark.svg" alt=""/></a></li>
                                <li><a href="https://example.com/"><img className="icon-svg" src="assets/images/icons/icon-pinterest-p-dark.svg" alt=""/></a></li>
                                <li><a href="https://example.com/"><img className="icon-svg" src="assets/images/icons/icon-dribbble-dark.svg" alt=""/></a></li>
                            </ul>
                        </div> 
                        {/* <!-- End Contact Social Link --> */}
                    </div> 
                    {/* <!-- End Contact Details --> */}
                </div>
                <div className="col-lg-8">
                    <div className="contact-form section-top-gap-120">
                        <h3>Get In Touch</h3>
                        <form id="contact-form" action="assets/mail/contact.php" method="post">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="default-form-box mb-20">
                                        <label for="contact-name">Name</label>
                                        <input name="name" type="text" id="contact-name"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="default-form-box mb-20">
                                        <label for="contact-email">Email</label>
                                        <input name="email" type="email" id="contact-email"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="default-form-box mb-20">
                                        <label for="contact-subject">Subject</label>
                                        <input name="subject" type="text" id="contact-subject"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="default-form-box mb-20">
                                        <label for="contact-message">Your Message</label>
                                        <textarea name="message" id="contact-message" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn btn-sm btn-radius btn-default" type="submit">Submit</button>
                                </div>
                                <p className="form-messege"></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::::ENd Contact Section:::... --></ul> */}


    <BlueFooter />


        </div>
    )
}
