import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { loginAuth, authAction } from '../../actions';
import { connect } from 'react-redux';


class HomeSignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            btnText:"Login"
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.btn.setAttribute("disabled", "disabled");
        this.setState({btnText:"Waiting....."});
        this.props.onLogin({email:this.state.username,password:this.state.password});

    }

    
    componentDidUpdate() {
        const newProps = this.props
        if (newProps.data1.isAuth) {
            newProps.onAuth({ isAuth: true });
            if (newProps.data1.role === 'Employer') {
                this.props.history.push('/dashboard');
            }
        }
    }

    render() {
        return (
            <div>
                <div className="account-popup-area signin-popup-box">
                    <div className="account-popup">
                        <span className="close-popup"><i className="la la-close" /></span>
                        <h3>User Login</h3>
                        <span>Click To Login With Demo User</span>
                        <div className="select-user">
                            <span>Candidate</span>
                            <span>Employer</span>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="cfield">
                                <input name="username" type="text" onChange={this.onChange} value={this.state.username} placeholder="Username" />
                                <i className="la la-user" />
                            </div>
                            <div className="cfield">
                                <input name="password" type="password" onChange={this.onChange} value={this.state.password} placeholder="********" />
                                <i className="la la-key" />
                            </div>
                            <p className="remember-label">
                                <input type="checkbox" name="cb" id="cb1" /><label htmlFor="cb1">Remember me</label>
                            </p>
                            <button ref={btn => { this.btn = btn; }}  type='submit'>{this.state.btnText}</button>
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
        );
    }
}

const mapStateToProps = state => {
    //console.log(state);
    return {
        data:state.AuthReducer,
        data1: state.AuthReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (inputTaskName) => {
            dispatch(loginAuth(inputTaskName));
        },

        onAuth: (authInfo) =>{
            dispatch(authAction(authInfo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeSignInComponent));