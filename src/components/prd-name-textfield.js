import React from 'react';


class Prdname extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    render() {
   
        // console.log('name>>>', this.state.name)
        return (
            <div className='textf-comp'>
                <div className='price-comp-inner'>
                    <label style={{ marginLeft: '10px' }} for='demo-simple-select-outlined'>Enter Name:</label>
                    <input disabled={this.props.disable} type="text" className='prd-price' id='demo-simple-select-outlined' required="required" value={this.props.onAdd} onChange={(e) => this.props.onChange("name", e)} placeholder='Enter name...' />
                </div>
            </div>
        )
    }
}

export default Prdname;