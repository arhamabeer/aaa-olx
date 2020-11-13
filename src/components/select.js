import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

class SimpleSelect extends React.Component {

    constructor() {
        super()
        this.state = {
            category: ''
        }
    }
    render() {
        // const classes = useStyles();
        // const [category, setcategory] = React.useState('');

        const handleChange = (event) => {
            this.setState({
                category: event.target.value
            })
        };
        // console.log('category>>>', this.state.category)
        return (
            <div className='select-comp'>
                <div className='select-comp-inner'>
                    <label style={{ marginLeft: '10px' }} for='demo-simple-select-outlined'>Select a category:</label>
                    <div className='MuiOutlinedInput-adornedStart'>
                        <FormControl variant="outlined"  >
                            <InputLabel id="demo-simple-select-outlined-label">Select Category</InputLabel>
                            <Select
                                value={this.props.onAdd}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                // value={category}
                                onChange={this.props.onChange}
                                label="Category"
                                name='category'
                                disabled={this.props.disable}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Mobiles'}>Mobiles</MenuItem>
                                <MenuItem value={'Electronics'}>Electronics</MenuItem>
                                <MenuItem value={'Laptops'}>Laptops</MenuItem>
                                <MenuItem value={'Home Appliances'}>Home Appliances</MenuItem>
                                <MenuItem value={'Cars'}>Cars</MenuItem>
                                <MenuItem value={'Bikes'}>Bikes</MenuItem>
                                <MenuItem value={'Property For Sale'}>Property For Sale</MenuItem>
                                <MenuItem value={'Property For Rent'}>Property For Rent</MenuItem>
                                <MenuItem value={'Jobs'}>Jobs</MenuItem>
                                <MenuItem value={'Services'}>Services</MenuItem>
                                <MenuItem value={'Furnitures'}>Furnitures</MenuItem>
                                <MenuItem value={'Decorations'}>Decorations</MenuItem>
                                <MenuItem value={'Animals'}>Animals</MenuItem>
                                <MenuItem value={'Others'}>Others</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        );
    }
}


export default SimpleSelect;