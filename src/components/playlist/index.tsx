import React from 'react'
import Title from '../title/index'
import './index.scss'
type Item ={
    [key:string]:any
}
type Istate={
    list:[Item]|never[]
}
interface Iprops{
    title:string,
    list:[]
}
export default class PlayList extends React.Component<Iprops,Istate>{
    public state = {
        list:[]
    }

    render(){
    
      return  (
            <div className="page">
                <Title title={this.props.title}></Title>
                
                <div className="layout">
                    {this.props.list.map((item:Item,index)=>
                    (<div className="item" key={index}>
                        <img src={item.picUrl}></img>
                    <p>{item.name.substring(0,20)}</p>
                    </div>)
                    )}
               
                </div>
            </div>
            )
    }
}