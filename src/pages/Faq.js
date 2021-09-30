import React from 'react'
import BlueFooter from '../components/BlueFooter'
import { DarkNav } from '../components/Navbar'

export default function Faq() {
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
                            <h2 className="title"><span className="text-mark">FAQ</span> Page</h2>
                        </div>
                        <ul className="breadcrumb-nav">
                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ...::: End Breadcrumb Section :::... --></div> */}

    {/* <!-- ...::::Start Faq Section:::... --> */}
    <div className="faq-section section-fluid-270 section-top-gap-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="faq-content">
                        <h5 className="title">Below are frequently asked questions, you may find the answer for yourself</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
                    </div>
                </div>
            </div>
            <div className="faq-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="faq-accordian">
                            <div className="faq-accordian-single-item">
                                <input id="item-1" name="accordian-item" type="radio" checked=""/>
                                <label for="item-1">Convenient User Interface</label>
                                <div className="item-content">
                                    <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate,
                                        eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis.
                                        Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                </div>
                            </div>
                            <div className="faq-accordian-single-item">
                                <input id="item-2" name="accordian-item" type="radio"/>
                                <label for="item-2">Lorem ipsum dolor sit amet.</label>
                                <div className="item-content">
                                    <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                </div>
                            </div>
                            <div className="faq-accordian-single-item">
                                <input id="item-3" name="accordian-item" type="radio"/>
                                <label for="item-3">Aliquid esse atque eveniet fugiat ullam</label>
                                <div className="item-content">
                                    <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                </div>
                            </div>
                            <div className="faq-accordian-single-item">
                                <input id="item-4" name="accordian-item" type="radio"/>
                                <label for="item-4">Tenetur, facilis neque error earum facere exercitationem!</label>
                                <div className="item-content">
                                    <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                </div>
                            </div>
                            <div className="faq-accordian-single-item">
                                <input id="item-5" name="accordian-item" type="radio"/>
                                <label for="item-5">Perspiciatis ut ipsa cum molestias quaerat laborum.</label>
                                <div className="item-content">
                                    <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                </div>
                            </div>
                            <div className="faq-accordian-single-item">
                                <input id="item-6" name="accordian-item" type="radio"/>
                                <label for="item-6">Responsive Design</label>
                                <div className="item-content">
                                    <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* </div> <!-- ...::::End Faq Section:::... --> */}
    </div>

    <BlueFooter />


        
        </div>
    )
}

 
