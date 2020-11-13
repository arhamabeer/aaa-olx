import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import AddAd from '../components/addAd.jsx';
import { connect } from 'react-redux';



class PostAd extends React.Component {
    render() {
        
        return (
            <div className=''>
                <Header userInfo={this.props.user} />
                <AddAd userInfo={this.props.user} />
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.current_user
})



export default connect(mapStateToProps, null)(PostAd);