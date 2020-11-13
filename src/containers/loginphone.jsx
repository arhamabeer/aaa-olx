import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LoginPhone extends React.Component {
    render() {
        return (
            <div className='Login-phone-div'>
                <div style={{ position: 'absolute' }, { width: '100%' }}>
                <Link to='/'>
                    <img className='cancel-icon' src={require('../components/icons/cancel.png')} alt="cancel" />
                </Link>
                    <div className='login-phone-capt'>
                        <img src={require('../logo/olx.png')} className='logo-img-head login-entry-logo' alt="" />
                        <h1>Enter Your Phone</h1>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+92</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        <input type="text" class="form-control " placeholder='Phone Number' aria-label="Text input with dropdown button" />
                    </div>
                    <button className='prd-sell-button Login-phone-btn fwb'>Continue</button>
                    <p className='Login-phone-p fwl s14' >
                        We won't reveal your phone number to anyone else nor use it to send you spam
                    </p>
                </div >
            </div>
        )
    }
}


export default LoginPhone;