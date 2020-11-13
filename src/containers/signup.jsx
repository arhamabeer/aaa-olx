import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link, matchPath } from 'react-router-dom';
import firebase from '../config/firebase.js'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            c_password: '',
            display: 'none',
            key: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = async () => {
        if (this.state.fname === '') {
            prompt('First Name Requireed', 'Enter this please')
        }
        else if (this.state.lname === '') {
            prompt('Last Name Requireed', 'Enter this please')
        }
        else if (this.state.email === '') {
            prompt('Email Requireed', 'Enter this please')
        }
        else if (this.state.password === '') {
            prompt('Password Requireed', 'Enter this please')
        }
        else if(this.state.password != this.state.c_password){
            prompt('WRONG PASSWORD', "Your Password doesn't match, Try Again")
        }
        else {
            this.setState({
                display: 'flex',
            })
            var key = firebase.database().ref('/users').push().key;
            console.log("keys =>", key);

            this.setState({
                key: key
            })
            let payload = {
                fname : this.state.fname,
                lname : this.state.lname,
                email : this.state.email,
                password : this.state.password,
                key : key
            }
            await firebase.database().ref('/users').child(key).set(payload);
            this.setState({
                fname: '',
                lname: '',
                email: '',
                password: '',
                c_password: '',
                display: 'none',
            })
            prompt("CONGRATULATIONS!", "New User Added Successfully...")
            this.props.history.push('/login-email')
        }
    }
    render() {
        console.log('STATE >>> ', this.state)
        return (
            <div className='Login-phone-div'>
                  <div style={{display: this.state.display}} className='loading-spinner-signup'>
                    <div class="text-center loading-ad">
                        <div class="spinner-border loading-ad-inner" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                
                <div style={{ position: 'absolute' }, { width: '100%' }}>
                    <Link to='/'>
                        <img className='cancel-icon' src={require('../components/icons/cancel.png')} alt="cancel" />
                    </Link>
                    <div className='login-phone-capt'>
                        <img src={require('../logo/olx.png')} className='logo-img-head login-entry-logo' alt="" />
                        <h1>Enter Your Details</h1>
                    </div>
                    <div class="input-group mb-3 mail-div">
                        <input type="text" value={this.state.fname} class='form-control form-control-email' name='fname' placeholder='First Name' onChange={(e) => this.handleChange(e)} aria-label="Text input with dropdown button" />
                        <input type="text" value={this.state.lname} class='form-control form-control-email' name='lname' placeholder='Last Name' onChange={(e) => this.handleChange(e)} aria-label="Text input with dropdown button" />
                        <input type="email" value={this.state.email} class='form-control form-control-email' name='email' placeholder='Email' onChange={(e) => this.handleChange(e)} aria-label="Text input with dropdown button" />
                        <input type="password" value={this.state.password} class="form-control form-control-email" name='password' placeholder='Password' onChange={(e) => this.handleChange(e)} aria-label="Text input with dropdown button" />
                        <input type="password" value={this.state.c_password} class="form-control form-control-email" name='c_password' placeholder='Confirm Password' onChange={(e) => this.handleChange(e)} aria-label="Text input with dropdown button" />
                    </div>
                </div>
                <button className='prd-sell-button Login-phone-btn fwb' onClick={this.handleClick}>Sign Up</button>
                <Link to='/login-email' className='signup'>Have an account? Login here!</Link>
                <p className='Login-phone-p fwl s14 signup-wont' >
                    We won't reveal your personal details to anyone else nor use it to send you spam
                </p>
            </div >
        )
    }
}


export default SignUp;