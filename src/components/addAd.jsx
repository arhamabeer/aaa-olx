import React from 'react';
import SelectUI from './select.js'
import Prdname from './prd-name-textfield.js'
import Prdmodel from './prd-model-textfield.jsx'
import Textarea from './textarea.js'
import Prdimg from './prd-image.jsx'
import Pricetxt from './price-txt.jsx'
import Prdloc from './prd-loc.jsx'
import Button from './button-matui.js'
import firebase from '../config/firebase.js'
import { storage } from '../config/firebase.js'
import { withRouter } from "react-router-dom"

class AddAd extends React.Component {
    constructor() {
        super();
        this.state = {
            category: '',
            name: '',
            model: '',
            description: '',
            amount: '',
            location: '',
            image: null,
            key: '',
            url: '',
            disabled: false,
            display: 'none'
        }
    }



    handleSelectChange = (event) => {
        this.setState({ category: event.target.value })

    }

    handleTextChange = (label, event) => {
        this.setState({ [label]: event.target.value })
    }

    handleImageChange = e => {
        console.log(this.state)
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }))

        }

    }

    upload = async () => {
        if (!this.props.userInfo.fname){
            this.props.history.push('/login')
        }
        else if (this.state.category === '') {
            prompt('Category Value Requireed', 'Enter this please')
        }
        else if (this.state.name === '') {
            prompt('Name Value Requireed', 'Enter this please')
        }
        else if (this.state.description === '') {
            prompt('Description Value Requireed', 'Enter this please')
        }
        else if (this.state.amount === '') {
            prompt('Amount Value Requireed', 'Enter this please')
        }
        else if (this.state.img === '') {
            prompt('Image Value Requireed', 'Enter this please')
        }
        else if (this.state.model === '') {
            prompt('Model Value Requireed', 'Enter this please')
        }
        else {
            this.setState({
                display: 'flex',
                disabled: true
            })
            const { image } = this.state;
            const uploadTask = await firebase.storage().ref(`images/${image.name}`).put(image);
            const url = await firebase.storage().ref('images').child(image.name).getDownloadURL()
            // console.log(this.state)

            var key = firebase.database().ref('/products').push().key;
            console.log("keys =>", key);

            this.setState({
                key: key
            })
            let payload = {
                category: this.state.category,
                name: this.state.name,
                model: this.state.model,
                description: this.state.description,
                location: this.state.location,
                amount: this.state.amount,
                key: key,
                url: url,
                fname: this.props.userInfo.fname,
                lname: this.props.userInfo.lname,
                email: this.props.userInfo.email,
            }
            this.setState({
                category: '',
                name: '',
                model: '',
                description: '',
                location: '',
                amount: '',
                img: '',
                key: '',
                display: 'none',
                disabled: false
            })
            await firebase.database().ref('/products').child(key).set(payload)
            prompt("CONGRATULATIONS!", "New Product Added Successfully...")
            this.props.history.push('/')

        }
    }

    render() {

        console.log('adAd-user => ', this.props)
        return (
            <div className='AddAd'>
                <div style={{display: this.state.display}} className='loading-spinner'>
                    <div class="text-center loading-ad">
                        <div class="spinner-border loading-ad-inner" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                <SelectUI onChange={this.handleSelectChange} onAdd={this.state.category} disable={this.state.disabled} />
                <Prdname onChange={this.handleTextChange} onAdd={this.state.name} disable={this.state.disabled} />
                <Prdmodel onChange={this.handleTextChange} onAdd={this.state.model} disable={this.state.disabled} />
                <Textarea onChange={this.handleTextChange} onAdd={this.state.description} disable={this.state.disabled} />
                <Prdloc onChange={this.handleTextChange} onAdd={this.state.location} disable={this.state.disabled} />
                <Pricetxt onChange={this.handleTextChange} onAdd={this.state.amount} disable={this.state.disabled} />
                <Prdimg onChange={this.handleImageChange} onAdd={this.state.img} disable={this.state.disabled} />
                <Button onPress={this.upload} ad-state={this.state} disable={this.state.disabled} />
            </div>
        )
    }
}


export default withRouter(AddAd)


 
