import React, { Component } from 'react';

class HomeMenuComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="responsive-header three">
                    <div className="responsive-menubar">
                        <div className="res-logo"><a href="index.html" title><img src="http://placehold.it/178x40" alt /></a></div>
                        <div className="menu-resaction">
                            <div className="res-openmenu">
                                <img src="images/icon5.png" alt /> Menu
                    </div>
                            <div className="res-closemenu">
                                <img src="images/icon6.png" alt /> Close
                    </div>
                        </div>
                    </div>
                    <div className="responsive-opensec">
                        <div className="btn-extars">
                            <a href="#" title className="post-job-btn"><i className="la la-plus" />Post Jobs</a>
                            <ul className="account-btns">
                                <li className="signup-popup"><a title><i className="la la-key" /> Sign Up</a></li>
                                <li className="signin-popup"><a title><i className="la la-external-link-square" /> Login</a></li>
                            </ul>
                        </div>{/* Btn Extras */}
                        <form className="res-search">
                            <input type="text" placeholder="Job title, keywords or company name" />
                            <button type="submit"><i className="la la-search" /></button>
                        </form>
                        <div className="responsivemenu">
                            <ul>
                                <li className="menu-item-has-children">
                                    <a href="#" title>Home</a>
                                    <ul>
                                        <li><a href="index.html" title>Home Layout 1</a></li>
                                        <li><a href="index2.html" title>Home Layout 2</a></li>
                                        <li><a href="index3.html" title>Home Layout 3</a></li>
                                        <li><a href="index4.html" title>Home Layout 4</a></li>
                                        <li><a href="index5.html" title>Home Layout 5</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#" title>Employers</a>
                                    <ul>
                                        <li><a href="employer_list1.html" title> Employer List 1</a></li>
                                        <li><a href="employer_list2.html" title>Employer List 2</a></li>
                                        <li><a href="employer_list3.html" title>Employer List 3</a></li>
                                        <li><a href="employer_list4.html" title>Employer List 4</a></li>
                                        <li><a href="employer_single1.html" title>Employer Single 1</a></li>
                                        <li><a href="employer_single2.html" title>Employer Single 2</a></li>
                                        <li className="menu-item-has-children">
                                            <a href="#" title>Employer Dashboard</a>
                                            <ul>
                                                <li><a href="employer_manage_jobs.html" title>Employer Job Manager</a></li>
                                                <li><a href="employer_packages.html" title>Employer Packages</a></li>
                                                <li><a href="employer_post_new.html" title>Employer Post New</a></li>
                                                <li><a href="employer_profile.html" title>Employer Profile</a></li>
                                                <li><a href="employer_resume.html" title>Employer Resume</a></li>
                                                <li><a href="employer_transactions.html" title>Employer Transaction</a></li>
                                                <li><a href="employer_job_alert.html" title>Employer Job Alert</a></li>
                                                <li><a href="employer_change_password.html" title>Employer Change Password</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#" title>Candidates</a>
                                    <ul>
                                        <li><a href="candidates_list.html" title>Candidates List 1</a></li>
                                        <li><a href="candidates_list2.html" title>Candidates List 2</a></li>
                                        <li><a href="candidates_list3.html" title>Candidates List 3</a></li>
                                        <li><a href="candidates_single.html" title>Candidates Single 1</a></li>
                                        <li><a href="candidates_single2.html" title>Candidates Single 2</a></li>
                                        <li className="menu-item-has-children">
                                            <a href="#" title>Candidates Dashboard</a>
                                            <ul>
                                                <li><a href="candidates_my_resume.html" title>Candidates Resume</a></li>
                                                <li><a href="candidates_my_resume_add_new.html" title>Candidates Resume new</a></li>
                                                <li><a href="candidates_profile.html" title>Candidates Profile</a></li>
                                                <li><a href="candidates_shortlist.html" title>Candidates Shortlist</a></li>
                                                <li><a href="candidates_job_alert.html" title>Candidates Job Alert</a></li>
                                                <li><a href="candidates_dashboard.html" title>Candidates Dashboard</a></li>
                                                <li><a href="candidates_cv_cover_letter.html" title>CV Cover Letter</a></li>
                                                <li><a href="candidates_change_password.html" title>Change Password</a></li>
                                                <li><a href="candidates_applied_jobs.html" title>Candidates Applied Jobs</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#" title>Blog</a>
                                    <ul>
                                        <li><a href="blog_list.html"> Blog List 1</a></li>
                                        <li><a href="blog_list2.html">Blog List 2</a></li>
                                        <li><a href="blog_list3.html">Blog List 3</a></li>
                                        <li><a href="blog_single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#" title>Job</a>
                                    <ul>
                                        <li><a href="job_list_classic.html">Job List Classic</a></li>
                                        <li><a href="job_list_grid.html">Job List Grid</a></li>
                                        <li><a href="job_list_modern.html">Job List Modern</a></li>
                                        <li><a href="job_single1.html">Job Single 1</a></li>
                                        <li><a href="job_single2.html">Job Single 2</a></li>
                                        <li><a href="job-single3.html">Job Single 3</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#" title>Pages</a>
                                    <ul>
                                        <li><a href="about.html" title>About Us</a></li>
                                        <li><a href="404.html" title>404 Error</a></li>
                                        <li><a href="contact.html" title>Contact Us 1</a></li>
                                        <li><a href="contact2.html" title>Contact Us 2</a></li>
                                        <li><a href="faq.html" title>FAQ's</a></li>
                                        <li><a href="how_it_works.html" title>How it works</a></li>
                                        <li><a href="login.html" title>Login</a></li>
                                        <li><a href="pricing.html" title>Pricing Plans</a></li>
                                        <li><a href="register.html" title>Register</a></li>
                                        <li><a href="terms_and_condition.html" title>Terms &amp; Condition</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <header className="stick-top style3">
                    <div className="menu-sec">
                        <div className="container">
                            <div className="logo">
                                <a href="#" title><img src="http://placehold.it/203x34" alt /></a>
                            </div>{/* Logo */}
                            <div className="btn-extars">
                                <a href="#" title className="post-job-btn"><i className="la la-plus" />Post Jobs</a>
                                <ul className="account-btns">
                                    <li className="signup-popup"><a title><i className="la la-key" /> Sign Up</a></li>
                                    <li className="signin-popup"><a title><i className="la la-external-link-square" /> Login</a></li>
                                </ul>
                            </div>{/* Btn Extras */}
                            <nav>
                                <ul>
                                    <li className="menu-item-has-children">
                                        <a href="#" title>Home</a>
                                        <ul>
                                            <li><a href="index.html" title>Home Layout 1</a></li>
                                            <li><a href="index2.html" title>Home Layout 2</a></li>
                                            <li><a href="index3.html" title>Home Layout 3</a></li>
                                            <li><a href="index4.html" title>Home Layout 4</a></li>
                                            <li><a href="index5.html" title>Home Layout 5</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" title>Employers</a>
                                        <ul>
                                            <li><a href="employer_list1.html" title> Employer List 1</a></li>
                                            <li><a href="employer_list2.html" title>Employer List 2</a></li>
                                            <li><a href="employer_list3.html" title>Employer List 3</a></li>
                                            <li><a href="employer_list4.html" title>Employer List 4</a></li>
                                            <li><a href="employer_single1.html" title>Employer Single 1</a></li>
                                            <li><a href="employer_single2.html" title>Employer Single 2</a></li>
                                            <li className="menu-item-has-children">
                                                <a href="#" title>Employer Dashboard</a>
                                                <ul>
                                                    <li><a href="employer_manage_jobs.html" title>Employer Job Manager</a></li>
                                                    <li><a href="employer_packages.html" title>Employer Packages</a></li>
                                                    <li><a href="employer_post_new.html" title>Employer Post New</a></li>
                                                    <li><a href="employer_profile.html" title>Employer Profile</a></li>
                                                    <li><a href="employer_resume.html" title>Employer Resume</a></li>
                                                    <li><a href="employer_transactions.html" title>Employer Transaction</a></li>
                                                    <li><a href="employer_job_alert.html" title>Employer Job Alert</a></li>
                                                    <li><a href="employer_change_password.html" title>Employer Change Password</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" title>Candidates</a>
                                        <ul>
                                            <li><a href="candidates_list.html" title>Candidates List 1</a></li>
                                            <li><a href="candidates_list2.html" title>Candidates List 2</a></li>
                                            <li><a href="candidates_list3.html" title>Candidates List 3</a></li>
                                            <li><a href="candidates_single.html" title>Candidates Single 1</a></li>
                                            <li><a href="candidates_single2.html" title>Candidates Single 2</a></li>
                                            <li className="menu-item-has-children">
                                                <a href="#" title>Candidates Dashboard</a>
                                                <ul>
                                                    <li><a href="candidates_my_resume.html" title>Candidates Resume</a></li>
                                                    <li><a href="candidates_my_resume_add_new.html" title>Candidates Resume new</a></li>
                                                    <li><a href="candidates_profile.html" title>Candidates Profile</a></li>
                                                    <li><a href="candidates_shortlist.html" title>Candidates Shortlist</a></li>
                                                    <li><a href="candidates_job_alert.html" title>Candidates Job Alert</a></li>
                                                    <li><a href="candidates_dashboard.html" title>Candidates Dashboard</a></li>
                                                    <li><a href="candidates_cv_cover_letter.html" title>CV Cover Letter</a></li>
                                                    <li><a href="candidates_change_password.html" title>Change Password</a></li>
                                                    <li><a href="candidates_applied_jobs.html" title>Candidates Applied Jobs</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" title>Blog</a>
                                        <ul>
                                            <li><a href="blog_list.html"> Blog List 1</a></li>
                                            <li><a href="blog_list2.html">Blog List 2</a></li>
                                            <li><a href="blog_list3.html">Blog List 3</a></li>
                                            <li><a href="blog_single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" title>Job</a>
                                        <ul>
                                            <li><a href="job_list_classic.html">Job List Classic</a></li>
                                            <li><a href="job_list_grid.html">Job List Grid</a></li>
                                            <li><a href="job_list_modern.html">Job List Modern</a></li>
                                            <li><a href="job_single1.html">Job Single 1</a></li>
                                            <li><a href="job_single2.html">Job Single 2</a></li>
                                            <li><a href="job-single3.html">Job Single 3</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" title>Pages</a>
                                        <ul>
                                            <li><a href="about.html" title>About Us</a></li>
                                            <li><a href="404.html" title>404 Error</a></li>
                                            <li><a href="contact.html" title>Contact Us 1</a></li>
                                            <li><a href="contact2.html" title>Contact Us 2</a></li>
                                            <li><a href="faq.html" title>FAQ's</a></li>
                                            <li><a href="how_it_works.html" title>How it works</a></li>
                                            <li><a href="login.html" title>Login</a></li>
                                            <li><a href="pricing.html" title>Pricing Plans</a></li>
                                            <li><a href="register.html" title>Register</a></li>
                                            <li><a href="terms_and_condition.html" title>Terms &amp; Condition</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>{/* Menus */}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default HomeMenuComponent;