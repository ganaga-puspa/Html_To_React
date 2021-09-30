import React from 'react'
// import { Link } from 'react-router-dom';



function SubscribeSection() {

    


    return (
        <div>
            

            {/* <!-- ...::: Strat Subscribe Section :::... --> */}
    <div className="newsletter-section section-fluid-270 section-top-gap-100">
        <div className="box-wrapper">
            <div className="newsletter-wrapper">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="newsletter-area newsletter-area-style-1">
                            <div className="content content-left">
                                <h4 className="title">Newsletter</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing.
                                    printing and typesetting industry.</p>
                                <div className="newsletter-form">
                                    <input type="email" placeholder="Enter your email" required />
                                    <button type="submit">Subscribe</button>
                                </div>
                                <div className="image-shape image-shape-left"><img className="img-fluid" src={"assets/images/icons/newsletter-paper-plane.svg"} width="119" height="74" loading="lazy" aria-hidden alt="newsletter-paper-plane"/></div>
                            </div>
                            <div className="content content-right">
                                <h4 className="title">Download App</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing.
                                    printing and typesetting industry.</p>

                                <div className="apps-btn">
                                    <a href="/#"><img className="img-fluid" src="assets/images/icons/iphone-app-button.png" width="128" height="45" loading="lazy"  alt="iphone-app-button" /></a>
                                    <a href="/#"><img className="img-fluid" src="assets/images/icons/googleplay-app-button.png" width="135" height="4545" loading="lazy"  alt="googleplay-app-button" /></a>
                                </div>
                                <div className="image-shape image-shape-right"><img className="img-fluid" src={"assets/images/icons/newsletter-cloud-computing.svg"} width="94" height="81" loading="lazy" aria-hidden alt="newsletter-cloud-computing"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: End Subscribe Section :::... --> */}
    </div>

        // </div>
    )
}

export default SubscribeSection
