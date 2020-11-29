import React from 'react'
import Title from '../title/index'
import {playList} from '../../serve/api'
import './index.scss'
type Item ={
    [key:string]:any
}
type Istate={
    list:[Item]|never[]
}
export default class PlayList extends React.Component<{},Istate>{
    public state = {
        list:[]
    }
    componentDidMount(){
        this.getPlayList()
    }
    getPlayList(){
        const data = {'limit':6}
        playList(data).then((res:any)=>{
            
            this.setState({
                list:res.data.result
            })
            
        })  
    }
    tlist(){
        this.state.list.map((item:Item,index)=>{
            return(<p key={index}>{item.name}</p>)
            })
    }
    render(){
    
      return  (
            <div className="page">
                <Title title="推荐歌单"></Title>
                
                <div className="layout">
                    {this.state.list.map((item:Item,index)=>
                    (<div className="item">
                        <img src={item.picUrl}></img>
                    <p>{item.name}</p>
                    </div>)
                    )}
               
                </div>
            </div>
            )
    }
}