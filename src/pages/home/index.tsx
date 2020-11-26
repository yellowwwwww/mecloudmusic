import React from 'react'
import './index.scss'
import Banner from '../../components/header/mhead'
import Meau from '../home/meau'
const Home=()=>{
    return(
        <div className="home">
            <Banner></Banner>
            <Meau></Meau>
        </div>
        
    )
}

export default Home
