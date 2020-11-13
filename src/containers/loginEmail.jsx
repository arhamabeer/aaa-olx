import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';
import { sendReduxData } from '../store/actions/index'

class LoginEmail extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            key: '',
            fname: '',
            lname: '',
            users: [],
            count: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        const users = [];

        firebase.database().ref('users').on('value', (data) => {

            var fb_data = data.val();
            this.setData(data.val());

        })
    }

    setData = val => {
        const keys = Object.keys(val);
        const users = keys.map(item => {
            return { _id: item, ...val[item] }
        })

        this.setState({ users });
    }


    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendData = (lname,fname,key,email) => {
        this.props.sendReduxData(lname,fname,key,email)
    }

    handleClick = async () => {

        for (let i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].email === this.state.email && this.state.users[i].password === this.state.password) {
                console.log('correct email and password')
                await this.setState({
                    fname: this.state.users[i].fname,
                    lname: this.state.users[i].lname,
                    key: this.state.users[i].key,
                    password: this.state.users[i].password,
                    email: this.state.users[i].email
                })
                
                this.props.history.push('/')
                console.log('current_user => ', this.state)
                this.sendData(
                    this.state.lname,
                    this.state.fname,
                    this.state.key,
                    this.state.email
                )
            }
            else
                this.state.count = + 1;
            if (this.state.count >= 1) {

                this.setState({
                    email: '',
                    password: ''
                })
            }
        }

    }

    render() {

        console.log('redux user >> ', this.props.user)
        return (
            <div className='Login-phone-div'>
                <div style={{ position: 'absolute' }, { width: '100%' }}>
                    <Link to='/'>
                        <img className='cancel-icon' src={require('../components/icons/cancel.png')} alt="cancel" />
                    </Link>
                    <div className='login-phone-capt'>
                        <img src={require('../logo/olx.png')} className='logo-img-head login-entry-logo' alt="" />
                        <h1>Enter Your Email</h1>
                    </div>
                    <div class="input-group mb-3 mail-div">
                        <input value={this.state.email} type="email" name='email' class='form-control form-control-email' onChange={(e) => this.handleChange(e)} placeholder='Email' aria-label="Text input with dropdown button" />
                        <input value={this.state.password} type="password" name='password' class="form-control form-control-email" onChange={(e) => this.handleChange(e)} placeholder='Password' aria-label="Text input with dropdown button" />
                    </div>
                </div>
                <button className='prd-sell-button Login-phone-btn fwb' onClick={this.handleClick}>Login</button>
                <Link to='/signup' className='donthaveaccount'>Don't have an account? Sign Up here!</Link>
                {
                    this.state.count > 0 && <p className='wrong-password'>You entered wrong Password or Email.</p>
                }{
                    this.state.count = 0,
                    console.log(this.state)
                }
                <p className='Login-phone-p fwl s14' >
                    We won't reveal your email address to anyone else nor use it to send you spam
                </p>
            </div >
        )
    }
}
// const mapStateToProps = (state) => ({
//     user: state.current_user
// })
const mapDisatchToProps = (dispatch) => ({
    sendReduxData: (lname,fname,key,email) => dispatch(sendReduxData(lname,fname,key,email))
})


export default connect(null, mapDisatchToProps)(LoginEmail);