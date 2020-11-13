import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../containers/home.jsx'
import Item from '../containers/item.jsx'
import PostAd from '../containers/postAd.jsx'
import LoginEntry from '../containers/loginEntry.jsx';
import LoginPhone from '../containers/loginphone.jsx';
import LoginEmail from '../containers/loginEmail.jsx';
import SignUp from '../containers/signup.jsx';
import Chat from '../containers/chat.jsx';
// import Search from '../containers/search.jsx';



class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/items" component={Item} />
                <Route exact path='/post-ad' component={PostAd} />
                <Route exact path="/login" component={LoginEntry} />
                {/* <Route exact path="/login-phone" component={LoginPhone} /> */}
                <Route exact path="/login-email" component={LoginEmail} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/chat" component={Chat} />
                {/* <Route exact path="/search" component={Search} /> */}
            </Router>
        )
    }
}

export default AppRouter;