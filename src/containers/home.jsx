import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import Main from '../components/main.jsx';
import Top from '../components/gototop.jsx';
import { connect } from 'react-redux';
import firebase from '../config/firebase.js'



class Home extends React.Component {
     constructor() {
        super()
        this.state = {
            products: []
        }
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

    render() {
        
        return (
            <div>
                <Header userInfo={this.props.user} data={this.state} />
                <Main />
                <Top />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.current_user
})



export default connect(mapStateToProps, null)(Home);