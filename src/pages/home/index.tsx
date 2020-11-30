import React from 'react'
import './index.scss'
import Banner from '../../components/header/mhead'
import Meau from '../home/meau'
import PlayList from '../../components/playlist/index'
const Home=()=>{
    return(
        <div className="home">
            <Banner></Banner>
            <Meau></Meau>
            <PlayList></PlayList>
        </div>
        
    )
}

export default Home
