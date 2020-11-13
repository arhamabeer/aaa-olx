import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from '../config/firebase.js'
// import {facebook_login} from '../store/actions/index'
import { connect } from 'react-redux';
class LoginEntry extends React.Component {
    render() {
        return (
            <div className='Login-entry-div'>
                <Link to='/'>
                    <img className='cancel-icon' src={require('../components/icons/cancel.png')} alt="cancel" />
                </Link>
                <div className='carousel-div'>
                    <Carousel className='carousel-main'>
                        <Carousel.Item>

                            <img
                                className="d-block w-100"
                                src={require('../../src/components/icons/loginEntryPointPost.webp')}
                                className='carousel-slide'
                                alt="First slide"
                            />

                            <Carousel.Caption>

                                <p className='carousel-caption-css'>Help make OLX safer place to buy and sale.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../../src/components/icons/loginEntryPointFavorite.webp')}
                                className='carousel-slide'
                                alt="Second slide"
                            />

                            <Carousel.Caption>

                                <p className='carousel-caption-css'>Contact and close deals faster.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../../src/components/icons/loginEntryPointChat.webp')}
                                className='carousel-slide'
                                alt="Third slide"
                            />

                            <Carousel.Caption>

                                <p className='carousel-caption-css'>Save all favorite items in one place.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='login-entry-button-div'>
                    {/* <Link to='login-phone'><button className='login-entry-button'>Continue with Phone</button></Link> */}
                    {/* <Link><button className='login-entry-button' onClick={()=> this.props.facebook_login()}>Continue with Facebook</button></Link>
                    <Link><button className='login-entry-button'>Continue with Google</button></Link> */}
                    <Link to='login-email'><button className='login-entry-button'>Continue with Email</button></Link>
                </div>
                <div className='login-entry-foot-div'>
                    <p>We won't share your personal details with anyone</p>
                </div>
            </div>
        )
    }
}



// const mapDispatchToProps = (dispatch) => ({
//     facebook_login: ()=> dispatch(facebook_login())
// })



export default connect(null, null)(LoginEntry);