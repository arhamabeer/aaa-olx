import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';


const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);


    useEffect(() => {
        if (pageYOffset > 300) {
            setVisiblity(true);
        }
        else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    if (!visible) {
        return false;
    }

    const scroll = () => window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    return (
        <div className='scroll-to-top' onClick={scroll}>
            <img src={require('./icons/chevron-upwards-arrow.png')} className='top-icon' style={{width: '40px'}} alt=""/>
        </div>
    );
    }
    export default ScrollToTop;