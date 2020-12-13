import { url } from 'inspector'
import React,{Component} from 'react'
import {SongDetail} from '../../serve/api'
import './index.scss'
type Item ={
    [key:string]:any
}
interface Istate{
    detail:Item,
    
}
interface Iprops{   
    match:any
}

class SongList extends Component<Iprops,Istate>{
    public state={
        detail:{
            coverImgUrl:''
        }
    }
    componentDidMount(){
       this.detail()
        
    }
    detail(){
        console.log(this.props.match)
        const data={id:this.props.match.params.id}
        SongDetail(data).then((res:any)=>{
            this.state.detail = res.data.playlist
            this.setState({
                detail:res.data.playlist
            })
        })
    }
    render(){
        //let style = {}
        return (
            <div className="song-layout"> 
             <div className="song-title">
                <div className="song-title-layout">
                    <i className="iconfont iconicon-test"></i>
                    <p style={{paddingLeft:'.2rem'}}>{this.props.match.params.title}</p>
                </div>
            </div>
           <div className="song-header" style={{backgroundImage:`url(${this.state.detail.coverImgUrl})`}}>       
           44444444444444444444444444444
            </div> 
            </div>
        )
    }
}



export default SongList