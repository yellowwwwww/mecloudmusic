
import React from 'react';
import {withRouter ,RouteComponentProps } from 'react-router-dom';
import './index.scss';
interface props extends RouteComponentProps{}
class TabBar extends React.Component<props,any>{

    constructor(props:props){
        super(props)
     
        this.state={
            arrList:[{title:'推荐音乐',path:'/'},{title:'热歌榜',path:'/hot'},{title:'搜索',path:'/search'}],
            activeIndex:'/'
        }
        
    }
    componentDidMount(){
    }
    tabBar=(item:any)=>{
        this.props.history.push(item.path)
        this.setState({
            activeIndex:item.path
        })
    }
    render(){
        let arr:Array<JSX.Element> = []
        
        this.state.arrList.forEach((item:any,index:any) => {
            let active = this.props.location.pathname === item.path?'item-active':''
            arr.push(<div key={index} className="item" onClick={(e)=>{this.tabBar(item)}}><div className={active}></div>{item.title}</div>)
        });
        return(
            <div className='tabbar'>
                {arr}
            </div>
        )
    }
}
export default withRouter(TabBar)