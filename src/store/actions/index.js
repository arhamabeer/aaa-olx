// import firebase from '../../config/firebase'
import firebase from 'firebase'



const sendReduxData = (lname, fname, key, email) => {
    return (dispatch) => {
        dispatch({
            type: 'SendData',
            user: {
                lname: lname,
                fname: fname,
                key: key,
                email: email
            }
        })
        // console.log("Send data+> ", lname, fname, key, email)

    }
}


// const facebook_login = () => {
//     console.log('facebook login')
//     return (dispatch) => {
//         var provider = new firebase.auth.FacebookAuthProvider();

//         firebase.auth().signInWithPopup(provider)

//             .then(function (result) {
//                 var token = result.credential.accessToken;
//                 var user = result.user;

//                 let create_user = {
//                     name: user.displayName,
//                     email: user.email,
//                     profile: user.photoURL,
//                     uid: user.uid
//                 }
//                 console.log('fb-user =>', create_user)

//                 firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
//                 alert("User Login Successful..!")
//                 // console.log('fbprops',this.props)
//                 // props.history.push('/')

//             }).catch(function (error) {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;

//                 console.log('fb-user-error =>', errorMessage)

//             });
//     }
// }


export {
    sendReduxData
}   