import React from 'react';
import { Card } from 'react-bootstrap';
import Cards from './cards';
import Banner from './olxbanner.jsx'
import firebase from '../config/firebase.js'


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [],
            display: 'none'
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
        const products = [];
        this.setState({
            display: 'flex'
        })
        firebase.database().ref('products').on('value', (data) => {

            // console.log(data.val())
            var fb_data = data.val();
            this.setData(data.val());
            this.setState({
                display: 'none'
            })
        })
    }

    setData = val => {
        const keys = Object.keys(val);
        const products = keys.map(item => {
            return { _id: item, ...val[item] }
        })

        this.setState({ products });
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <Banner />
                </div>
                <div className='main-div-card'>

                    <div style={{ display: this.state.display }} className='loading-spinner loading-spinner-main'>
                        <div class="text-center loading-ad">
                            <div class="spinner-border loading-ad-inner" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>

                    <div className='main-card-div'>
                        {this.state.products.map(item => {
                            return <Cards item={item} />
                        })}
                    </div>
                </div>
            </React.Fragment >
        )
    }
}


export default Main;