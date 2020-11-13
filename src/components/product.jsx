import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Product extends React.Component {
    render() {
        console.log('details in product: ', this.props.detail)
        return (
            <div className='prd-main-div'>
                <div className='prd-main-inner-div'>
                    <div className='prd-carousel-div'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={this.props.detail.url}
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={this.props.detail.url}
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={this.props.detail.url}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className='prd-des-div'>
                        <h2>Model</h2>
                        <p>{this.props.detail.model}</p>
                        <img src={require('./icons/minus.png')} className='prd-minus' alt="" />
                        <h2>Description</h2>
                        <p>
                            {this.props.detail.description}
                        </p>
                    </div>
                </div>
                <div className='prd-sell-div'>
                    <div className='prd-sell-rs'>
                        <h1 className='fwb'>Rs {this.props.detail.amount}/-</h1>
                        <p className='fwb s18'>{this.props.detail.name}</p>
                        <p>{this.props.detail.location}</p>
                    </div>
                    <div className='prd-sell-des'>
                        <h3>Seller description</h3>
                        <Link>
                            <h4>{this.props.detail.fname} {this.props.detail.lname}</h4>
                        </Link>
                        <div>
                            <Link className='prd-sell-des-img-link'><img className='prd-sell-des-img' src={require('./icons/chevronRight.png')} alt="" /></Link>
                        </div>
                        <button className='prd-sell-button fwb'>Chat with Seller</button>
                        <p style={{ textAlign: 'center' }}>
                            <img src={require('./icons/phone.png')} className='prd-sell-call-img' alt="" />
                        ** *** ****
                            <p className='s13' style={{ color: '#bdbdbde5' }, { textDecoration: 'underline' }}>Show Number</p>
                        </p>
                    </div>
                    <div className='prd-sell-loc'>
                        <h2>Posted In</h2>
                        <p className='s13' style={{ color: '#bdbdbde5' }}>{this.props.detail.location}</p>
                        <img className='prd-sell-loc-img' src={require('./icons/staticmap.png')} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}


export default Product;