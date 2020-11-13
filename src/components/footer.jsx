import React from 'react';
import AppAdd from './appadd.jsx'
import MidFoot from './midfoot.jsx'
import EndFoot from './endfoot.jsx'


class Footer extends React.Component{
    render(){
        return(
            <div className='footer-div'>
                <AppAdd />
                <MidFoot />
                <EndFoot />
            </div>
        )
    }
}


export default Footer;