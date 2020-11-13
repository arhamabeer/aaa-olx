import React from 'react';
import firebase from '../config/firebase.js'
import { Link } from 'react-router-dom';
// import {facebook_login} from '../store/actions/index'
import { connect } from 'react-redux';

class ChatComp extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         name: [],
    //         amount: [],
    //         url: [],
    //         length: 0
    //     }
    // }



    render() {

        return (

          <div className='chat-main-div'>
              {/* <button onClick={()=> this.props.facebook_login()}>Facebook Login</button> */}
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.current_user
})
// const mapDispatchToProps = (dispatch) => ({
//     facebook_login: ()=> dispatch(facebook_login())
// })



export default connect(mapStateToProps, null)(ChatComp);

