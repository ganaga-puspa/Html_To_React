import React from 'react'
import BlueFooter from '../components/BlueFooter'
import { DarkNav } from '../components/Navbar'

export default function Login() {
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
                            <h2 className="title"><span className="text-mark">Login</span> Page</h2>
                        </div>
                        <ul className="breadcrumb-nav">
                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: End Breadcrumb Section :::... --> */}

    {/* <!-- ...:::: Start Customer Login Section :::... --> */}
    <div className="customer-login section-fluid-270 section-top-gap-100">
        <div className="container-fluid">
            <div className="row">
                {/* <!--login area start--> */}
                <div className="col-lg-6 col-md-6">
                    <div className="account_form">
                        <h3>login</h3>
                        <form action="#" method="POST">
                            <div className="default-form-box">
                                <label>Username or email <span>*</span></label>
                                <input type="text"/>
                            </div>
                            <div className="default-form-box">
                                <label>Passwords <span>*</span></label>
                                <input type="password"/>
                            </div>
                            <div className="login_submit">
                                <button className="btn btn-sm btn-radius btn-default mb-4" type="submit">login</button>
                                <label className="checkbox-default mb-4" for="offer">
                                    <input type="checkbox" id="offer"/>
                                    <span>Remember me</span>
                                </label>
                                <a href="/#">Lost your password?</a>

                            </div>
                        </form>
                    </div>
                </div>
                {/* <!--login area start--> */}

                {/* <!--register area start--> */}
                <div className="col-lg-6 col-md-6">
                    <div className="account_form register" data-aos="fade-up" data-aos-delay="200">
                        <h3>Register</h3>
                        <form action="/#">
                            <div className="default-form-box">
                                <label>Email address <span>*</span></label>
                                <input type="text"/>
                            </div>
                            <div className="default-form-box">
                                <label>Passwords <span>*</span></label>
                                <input type="password"/>
                            </div>
                            <div className="login_submit">
                                <button className="btn btn-sm btn-radius btn-default" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!--register area end--> */}
            </div>
        </div>
    </div> 
    {/* <!-- ...:::: End Customer Login Section :::... --></div> */}


    <BlueFooter />


        </div>
    )
}
