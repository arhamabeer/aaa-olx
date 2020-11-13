import React from 'react';
import Button from './button-matui'


class Pricetxt extends React.Component {
    constructor() {
        super()
        this.state = {
            price: '$'
        }
    }

    render() {

        // console.log('price>>>', this.state.price)
        return (
            <div className='textf-comp'>
                <div className='price-comp-inner'>
                    <label style={{ marginLeft: '10px' }} for='demo-simple-select-outlined'>Enter PRICE:</label>
                    <input disabled={this.props.disable} type="number" required="required" value={this.props.onAdd} className='prd-price' id='demo-simple-select-outlined' onChange={(e) => this.props.onChange('amount', e)} placeholder='Enter PRICE...' />
                </div>
                {/* <Button /> */}
            </div>
        )
    }
}

export default Pricetxt;