
import React from 'react';
import banner from '../../static/banner.jpg'
import './mhead.scss'
function mheader(){
    return(
        <div  className="header-layout">
            <Banner></Banner>
        </div>
    )
}

function Banner(){
    return(
        <div className="banner"><img className="img" src={banner}/> </div>
    )
}
export default mheader