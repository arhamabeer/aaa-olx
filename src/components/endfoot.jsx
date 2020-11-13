import React from 'react';
import { Link } from 'react-router-dom';


class EndFoot extends React.Component {
    render() {
        const country = [
            { item: 'India - ' }, { item: 'South Africa - ' }, { item: 'Indonesia' }
        ]
        return (
            <div className='endfoot-div s14'>
                <div className='endfoot-inner-div1'>
                    <h5 className='s14'>
                        Other Countries:&emsp;
                    </h5>
                    <div>
                        {
                            country.map((val, index) => {
                                return (

                                    <Link style={{ color: 'white' }}>{val.item}</Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='s14 endfoot-inner-div'>
                    <h5 className='s14'>
                        Free Classifieds in Pakistan
                    </h5>
                    <p>
                        © 2006-2020 OLX
                    </p>
                </div>
            </div>
        )
    }
}


export default EndFoot;