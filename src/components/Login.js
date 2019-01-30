import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './Footer';
import HomeSignInComponent from './Home/HomeSignInComponent';
import HomeSignUpComponent from './Home/HomeSignUpComponent';
import {Link} from 'react-router-dom';
import Sample from './Headers/Sample';

class Login extends Component {
    state = {}
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (this.props.data.auth === true) {
            return <Redirect to={from} />
        }
        return (
            <div>
                <div className="theme-layout" id="scrollup">
                    <Sample />
                    <section>
                        <div className="block no-padding  gray">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="inner2">
                                            <div className="inner-title2">
                                                <h3>Login</h3>
                                                <span>Keep up to date with the latest news</span>
                                            </div>
                                            <div className="page-breacrumbs">
                                                <ul className="breadcrumbs">
                                                    <li><Link to="">Home</Link></li>
                                                    <li><Link to="">Pages</Link></li>
                                                    <li><Link to="">Login</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="block remove-bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="account-popup-area signin-popup-box static">
                                            <div className="account-popup">
                                                <span>Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis risus at lobortis ullamcorper</span>
                                                <form>
                                                    <div className="cfield">
                                                        <input type="text" placeholder="Username" />
                                                        <i className="la la-user" />
                                                    </div>
                                                    <div className="cfield">
                                                        <input type="password" placeholder="********" />
                                                        <i className="la la-key" />
                                                    </div>
                                                    <p className="remember-label">
                                                        <input type="checkbox" name="cb" id="cb1" /><label htmlFor="cb1">Remember me</label>
                                                    </p>
                                                    <Link to="">Forgot Password?</Link>
                                                    <button type="submit">Login</button>
                                                </form>
                                                <div className="extra-login">
                                                    <span>Or</span>
                                                    <div className="login-social">

                                                        <Link to="" className="fb-login"><i className="fa fa-facebook" /></Link>
                                                        <Link to="" className="tw-login"><i className="fa fa-twitter" /></Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* LOGIN POPUP */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
                <HomeSignInComponent />
                <HomeSignUpComponent />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.LoginReducer
    }
}

export default connect(mapStateToProps, null)(Login);