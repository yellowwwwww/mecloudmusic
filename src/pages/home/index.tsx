import React from 'react'
import './index.scss'
import Banner from '../../components/header/mhead'
import Meau from '../home/meau'
import HomeList from '../../components/homeList'
import SongList from '../../pages/songlist/index'
const Home=()=>{
    return(
        <div className="home">
            <Banner></Banner>
            <Meau></Meau>
            <SongList></SongList>
            <HomeList></HomeList>
            
        </div>
        
    )
}
export default Home
