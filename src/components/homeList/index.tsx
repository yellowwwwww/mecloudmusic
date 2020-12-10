import React from 'react'
import PlayList from '../../components/playlist/index'
import {playList, nowMusicList,dtList} from '../../serve/api'

class HomeList extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state ={
            playlist:[],
            nowmusiclist:[],
            diantailist:[]
        }
    }
    componentDidMount(){
        this.getPlayList()
        this.getNowMusicList()
        this.getDtList()
    }
    getPlayList(){
        const data = {'limit':6}
        playList(data).then((res:any)=>{
            this.setState({
                playlist:res.data.result
            })
            
        })  
    }
    getNowMusicList(){
        nowMusicList({'limit':6}).then((res:any)=>{
            console.log(res)
            this.setState({
                nowmusiclist:res.data.result
            })

        })
    }
    getDtList(){
        dtList({'limit':6}).then((res:any)=>{
            this.setState({
                diantailist:res.data.data
            },()=>{
                console.log(this.state.diantailist)
            })
        })
    }
    render(){
        return(
            <div>
                <PlayList title="推荐歌单"  list={this.state.playlist}></PlayList>
                <PlayList title="最新音乐"  list={this.state.nowmusiclist}></PlayList>
                <PlayList title="主播电台"  list={this.state.diantailist}></PlayList>
            </div>
        )
    }
}
export default HomeList