import React from 'react';


class textarea extends React.Component {
    constructor() {
        super()
        this.state = {
            discription: ''
        }
    }

    render() {
        const handleChange = (event) => {
            this.setState({
                discription: event.target.value
            })
        };
        
        // console.log('discription>>>', this.state.discription)
        
        return (
            <div className='textf-comp'>
                <div className='price-comp-inner'>
                    <label style={{ marginLeft: '10px' }} for='w3review'>Enter Description:</label>
                    <textarea disabled={this.props.disable} id="w3review" required="required" value={this.props.onAdd} name="w3review" className='prd-price prd-txtarea' onChange={(e)=> this.props.onChange('description', e)} rows="10" cols="68" placeholder='Enter Description' />

                </div>
            </div>
        )
    }
}

export default textarea;