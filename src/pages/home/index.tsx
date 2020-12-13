import React from 'react'
import './index.scss'
import Banner from '../../components/header/mhead'
import Meau from '../home/meau'
import HomeList from '../../components/homeList'
import TopMeau from '../../components/topmeau'
import TopBar from '../../components/topbar'
const Home=()=>{
    return(
        <div className="home">
            <TopMeau></TopMeau>
            <TopBar></TopBar>
            <Banner></Banner>
            <Meau></Meau>
            <HomeList></HomeList>
            
        </div>
        
    )
}
export default Home
