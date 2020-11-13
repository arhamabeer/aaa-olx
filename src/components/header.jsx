import React from 'react';
import { Link } from 'react-router-dom';
import chevronDown from './icons/chevronDown.png'
import plus from './icons/plus.png'
import search from './icons/search.png'
import { withRouter } from "react-router-dom"


class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            userInfo: '',
            search: ''
        }
    }
    // handleSearchClick() {
    //     !this.state.search ?
    //         this.props.history.push('/search')
    //         :
    //         this.props.history.push('/')
    // }
    handleClick() {
        console.log('this.props.history =>', this.props.history)
        !this.props.userInfo ?
            this.props.history.push('/login')
            :
            this.props.history.push('/post-ad')
    }

    componentDidMount = () => {
        let user = []
        user.push(this.props.userInfo)
        this.setState({ userInfo: user })
    }
    render() {
        console.log('redux-head> ', this.props.userInfo)
        // console.log('fb-data => ', this.props)
        // console.log('search>', this.state)
        const items = [
            { id: 1, label: 'Mobile Phones' },
            { id: 2, label: 'Cars' },
            { id: 3, label: 'Motorcycles' },
            { id: 4, label: 'Houses' },
            { id: 5, label: 'TV-Video-Audio' },
            { id: 6, label: 'Tablets' },
            { id: 7, label: 'Land & Plots' },
        ]


        return (
            <React.Fragment>
                <div className="header-div">
                    <div className="logo">
                        <Link to='/'>
                            <img className='logo-img-head' src={require('../logo/olx.png')} alt="" />
                        </Link>
                    </div>
                    <div className='location-header'>
                        <div className='icon-search loc-div-head s22' />
                        <input type="search" placeholder="Pakistan" className="loc-input s16" />
                        <button className="arrow-btn-flat">
                            <img src={chevronDown} alt="down" style={{ width: '25px' }} className='nav-icon-down' />
                        </button>
                    </div>
                    <div className='search-div-head'>
                        <input type="search" onChange={(e) => this.setState({ search: e.target.value })}  placeholder="Find Cars, Mobile Phones and more..." className="search s16" />
                        <img src={search} alt="search" style={{ width: '45px' }} className='search-icon' />
                    </div>
                    <div className="link-btn-div">
                        {
                            !this.props.userInfo ?
                                <Link className='login-link s18 fwb' to='./login' >Login</Link>
                                :
                                <div className='div-login'>
                                    <h3 className='h3-login'>
                                        {this.props.userInfo.fname[0] + this.props.userInfo.lname[0]}
                                    </h3>
                                    <img className='img-login' src={require('./icons/signout.png')} alt="signout" />
                                </div>
                        }
                        <button className='sell-btn s16 fwb' onClick={this.handleClick.bind(this)}>
                            <img src={plus} alt="add" style={{ width: '22px' }, { height: '15px' }} className='plus' />
                        SELL
                    </button>
                    </div>
                </div>

                <div className="nav-div">
                    <button className='nav-btn'>
                        <div className='nav-btn-div'>
                            <h2 className="s18 h2-nav">All Categories</h2>
                            <img src={chevronDown} alt="" style={{ width: '25px' }, { height: '30px' }} className='nav-icon-down' />
                        </div>
                    </button>
                    <div className='nav-item-div'>
                        {items.map((val, index) => {
                            return (
                                <Link to="/" className='link-van-item'>{val.label}</Link>
                            )
                        })}
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default withRouter(Header)