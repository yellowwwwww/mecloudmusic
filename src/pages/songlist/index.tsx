import { url } from 'inspector'
import React,{Component} from 'react'
import {SongDetail} from '../../serve/api'
import {withRouter,RouteComponentProps} from 'react-router'
import './index.scss'
type Item ={
    [key:string]:any
}
interface Istate{
    detail:Item,
    color:string,
    title:string
    
}
interface Iprops extends RouteComponentProps {   
    match:any
}

class SongList extends Component<Iprops,Istate>{
    public state:Istate={
        detail:{
            //coverImgUrl:''
        },
        color:'',
        title:this.props.match.params.title
    }
    componentDidMount(){
       this.detail()
       
       window.addEventListener('scroll',this.scroll)
    }
    componentDidUpdate(){
    }
    scroll=(e:any)=>{
        if(window.pageYOffset>50){
            this.setState({
                color:'#31c27c',
                title:this.state.detail.name
            })
        }else{
            this.setState({
                color:'',
                title:this.props.match.params.title
            })
        }
    }
    detail(){
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
                <div className="song-title" style={{background:this.state.color}}>
                    <div className="song-title-layout">
                        <i className="iconfont iconicon-test" onClick={()=>{this.props.history.goBack()}}></i>
                        <p style={{paddingLeft:'.2rem'}}>{this.state.title}</p>
                    </div>
                </div>
                <div className="song-header" style={{backgroundImage:`url(${this.state.detail.coverImgUrl})`}}>       
                </div> 
                <div className="nav">
                    <div className="nav-layout">
                        <img src={this.state.detail.coverImgUrl}></img>
                        <div className="content">
                            <div style={{fontWeight:900}}>{this.state.detail.name}</div>
                            <div className="creator">
                                <img src={this.state.detail.creator?this.state.detail.creator.avatarUrl:''}></img>
                                <div className="name">{this.state.detail.creator?this.state.detail.creator.nickname:''}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="song-list">

                    <div className="top">
                        <div><i className="iconfont iconzanting" style={{margin:"0 .2rem"}}></i>播放全部(共{this.state.detail.trackCount}首)</div>
                        <div>收藏({this.state.detail.subscribedCount})</div>
                    </div>
                    {
                    this.state.detail.tracks?this.state.detail.tracks.map((item:Item,index:number)=>(
                            <div className="item" key={index}>
                                <div className="num">{index+1}</div>
                    <div className="content"><div className="songname">{item.name}</div><div className="songer">{item.ar[0].name}{item.alia==''?'':'-'+item.alia}</div></div>
                            </div>
                        )):''
                    }
                </div>
                
            </div>
        )
    }
}


export default withRouter(SongList) 