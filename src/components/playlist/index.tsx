import React from 'react'

import Title from '../title/index'
import './index.scss'
import { RouteComponentProps,withRouter} from 'react-router'
import { connect } from 'react-redux'
import {setName} from '../../store/action'
type Item ={
    [key:string]:any
}
type Istate={
    list:[Item]|never[]
}

interface  Iprops extends RouteComponentProps{
    title:string,
    list:[],
    //history:any
    setName(data:any):any
}

 class PlayList extends React.Component<Iprops,Istate>{
    public state = {
        list:[]
    }
    Nato(item:Item){
        this.props.setName(item.name)
        
        this.props.history.push({pathname:`/List/${item.id}/${this.props.title}`})
    }
    render(){
    
      return  (
            <div className="page">
                <Title title={this.props.title}></Title>
                
                <div className="layout">
                    
                    {this.props.list.map((item:Item,index)=>
                    (<div  className="item" key={index} onClick={()=>this.Nato(item)}>
                        
                        <img src={item.picUrl}></img>
                        <p>{item.name.substring(0,20)}</p>
                    
                    </div>)
                    )}
                    
                </div>
                
            </div>
            )
    }
}
const mapStateToProps = (state:any) =>{
    return {
        name:state.name,
    
    }
}
const mapDispatchToProps = (dispatch:any,ownProps:any)=>{
    return {
        setName(data:any|string){
            dispatch(setName(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PlayList))