import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
// import Main from '../components/main.jsx';
import { connect } from 'react-redux';

import Product from '../components/product.jsx';


class Item extends React.Component {
    render() {
        // console.log('details: ', this.props.location.detail.item)
        return (
            <div>
                <Header userInfo={this.props.user} />
                <Product detail={this.props.location.detail.item} />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.current_user
})



export default connect(mapStateToProps, null)(Item);