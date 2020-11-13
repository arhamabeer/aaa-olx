import React, { Component } from 'react'
import { createFilter } from 'react-search-input'
import Header from '../components/header.jsx'
import firebase from '../config/firebase.js'




class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            searchTerm: '',
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }
    componentDidMount() {
        // console.log('componentDidMount');
        const products = [];
        
        firebase.database().ref('products').on('value', (data) => {
            
            // console.log(data.val())
            var fb_data = data.val();
            this.setData(data.val());
            
        })
    }
    
    setData = val => {
        const keys = Object.keys(val);
        const products = keys.map(item => {
            return { _id: item, ...val[item] }
        })
        
        this.setState({ products });
    }
    
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    render() {
        const KEYS_TO_FILTERS = [this.state.products.category]
        // const filteredSearch = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <div>
                {/* <SearchInput className="search-input"/> */}
                {/* {filteredSearch.map( => {
                    return ( */}

                            <Header SearchInput={this.searchUpdated} />

                        {/* // <div className="mail" key={email.id}>
                        //   <div className="from">{email.user.name}</div>
                        //   <div className="subject">{email.subject}</div>
                        // </div> */}



                    {/* )
                })} */}
            </div>
        )
    }


}

export default Search;