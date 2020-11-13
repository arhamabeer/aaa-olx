import React from 'react';


class Prdmodel extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    render() {

       
        // console.log('model>>>', this.props.onAdd)
        return (
            <div className='textf-comp'>
                <div className='price-comp-inner'>
                    <label style={{ marginLeft: '10px' }} for='demo-simple-select-outlined'>Enter Model:</label>
                    <input disabled={this.props.disable} value={this.props.onAdd} type="text" required="required" className='prd-price' id='demo-simple-select-outlined' onChange={(e) => this.props.onChange("model", e)} placeholder='Enter model...' />
                </div>
            </div>
        )
    }
}

export default Prdmodel;

