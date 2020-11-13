import React from 'react';
import { Link } from 'react-router-dom';

class MidFoot extends React.Component {
    render() {
        const pc = [
            { item: 'Cars' }, { item: 'Flat for Rent' }, { item: 'Jobs' }, { item: 'Mobile Phones' }
        ]
        const ts = [
            { item: 'Bikes' }, { item: 'Watches' }, { item: 'Books' }, { item: 'Cats' }
        ]
        const about = [
            { item: 'About OLX Group' }, { item: 'OLX Blog' }, { item: 'Contact Us' }, { item: 'OLX for Businesses' }
        ]
        const olx = [
            { item: 'Help' }, { item: 'Site Map' }, { item: 'Legal & Privacy information' }
        ]
        return (
            <div className='midfoot-main-div'>
                <div className='midfoot-inner-div'>
                    <h7 className='clr-olx fwb s14'>POPULAR CATEGORIES</h7>
                    {pc.map((val, index) => {
                        return (
                            <Link to='/' className='midfoot-link'>{val.item}</Link>
                        )
                    })}
                </div>
                <div className='midfoot-inner-div'>
                    <h7 className='clr-olx fwb s14'>TRENDING SEARCHES</h7>
                    {ts.map((val, index) => {
                        return (
                            <Link to='/' className='midfoot-link'>{val.item}</Link>
                        )
                    })}
                </div>
                <div className='midfoot-inner-div'>
                    <h7 className='clr-olx fwb s14'>ABOUT US</h7>
                    {about.map((val, index) => {
                        return (
                            <Link to='/' className='midfoot-link'>{val.item}</Link>
                        )
                    })}
                </div>
                <div className='midfoot-inner-div'>
                    <h7 className='clr-olx fwb s14'>OLX</h7>
                    {olx.map((val, index) => {
                        return (
                            <Link to='/' className='midfoot-link'>{val.item}</Link>
                        )
                    })}
                </div>
                <div className='midfoot-inner-div'>
                    <h7 className='clr-olx fwb s14'>FOLLOW US</h7><br />
                    <a href="https://www.facebook.com/olxpakistan"><img src={require('./icons/facebook.png')} style={{ width: '25px' }} className='midfoot-link-img' alt="" /></a>
                    <a href="https://twitter.com/OLX_Pakistan"><img src={require('./icons/twitter.png')} style={{ width: '25px' }} className='midfoot-link-img' alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1"><img src={require('./icons/youtube.png')} style={{ width: '25px' }} className='midfoot-link-img' alt="" /></a>
                    <a href="https://www.instagram.com/olx.pakistan/"><img src={require('./icons/instagram.png')} style={{ width: '25px' }} className='midfoot-link-img' alt="" /></a> <br /><br />
                    <button className='appad-button'>
                        <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"><img src={require('./icons/appstore_2x.webp')} style={{ width: '80px' }} alt="" /></a>
                    </button>
                    <button className='appad-button'>
                        <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home"><img src={require('./icons/playstore_2x.webp')} style={{ width: '80px' }} alt="" /></a>
                    </button>
                </div>
            </div>
        )
    }
}


export default MidFoot;



