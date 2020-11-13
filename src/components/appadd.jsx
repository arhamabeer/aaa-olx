import React from 'react';


class AppAdd extends React.Component {
    render() {
        return (
            <div className='appad-main-div clr-olx'>
                <div>
                    <img src={require('./icons/addpic.webp')} alt="ad" />
                </div>
                <div className='appad-caption'>
                    <h1>TRY THE OLX APP</h1>
                    <p>Buy, sell and find just about anything using the app on your mobile.</p>
                </div>
                <div>
                    <img src={require('./icons/vertical-line.png')} className='appad-line' alt="" />
                </div>
                <div className='appad-button-div'>
                    <p style={{ fontWeight: 'bolder' }}>GET YOUR APP TODAY</p>
                    <button className='appad-button'>
                        <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"><img src={require('./icons/appstore_2x.webp')} style={{ width: '120px' }} alt="" /></a>
                    </button>
                    <button className='appad-button'>
                        <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home"><img src={require('./icons/playstore_2x.webp')} style={{ width: '120px' }} alt="" /></a>
                    </button>
                </div>
            </div>

        )
    }
}


export default AppAdd;