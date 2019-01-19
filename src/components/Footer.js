import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div>
                <footer>
                    <div className="block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 column">
                                    <div className="widget">
                                        <div className="about_widget">
                                            <div className="logo">
                                                <a href="#" title><img src="http://placehold.it/178x40" alt /></a>
                                            </div>
                                            <span>Collin Street West, Victor 8007, Australia.</span>
                                            <span>+1 246-345-0695</span>
                                            <span>info@jobhunt.com</span>
                                            <div className="social">
                                                <a href="#" title><i className="fa fa-facebook" /></a>
                                                <a href="#" title><i className="fa fa-twitter" /></a>
                                                <a href="#" title><i className="fa fa-linkedin" /></a>
                                                <a href="#" title><i className="fa fa-pinterest" /></a>
                                                <a href="#" title><i className="fa fa-behance" /></a>
                                            </div>
                                        </div>{/* About Widget */}
                                    </div>
                                </div>
                                <div className="col-lg-4 column">
                                    <div className="widget">
                                        <h3 className="footer-title">Frequently Asked Questions</h3>
                                        <div className="link_widgets">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <a href="#" title>Privacy &amp; Seurty </a>
                                                    <a href="#" title>Terms of Serice</a>
                                                    <a href="#" title>Communications </a>
                                                    <a href="#" title>Referral Terms </a>
                                                    <a href="#" title>Lending Licnses </a>
                                                    <a href="#" title>Disclaimers </a>
                                                </div>
                                                <div className="col-lg-6">
                                                    <a href="#" title>Support </a>
                                                    <a href="#" title>How It Works </a>
                                                    <a href="#" title>For Employers </a>
                                                    <a href="#" title>Underwriting </a>
                                                    <a href="#" title>Contact Us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 column">
                                    <div className="widget">
                                        <h3 className="footer-title">Find Jobs</h3>
                                        <div className="link_widgets">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <a href="#" title>US Jobs</a>
                                                    <a href="#" title>Canada Jobs</a>
                                                    <a href="#" title>UK Jobs</a>
                                                    <a href="#" title>Emplois en Fnce</a>
                                                    <a href="#" title>Jobs in Deuts</a>
                                                    <a href="#" title>Vacatures China</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 column">
                                    <div className="widget">
                                        <div className="download_widget">
                                            <a href="#" title><img src="images/app_store.png" alt /></a>
                                            <a href="#" title><img src="images/play_store.png" alt /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line">
                        <span>© 2018 Jobhunt All rights reserved. Design by Creative Layers</span>
                        <a href="#scrollup" className="scrollup" title><i className="la la-arrow-up" /></a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;