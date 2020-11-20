
import React from 'react';
import banner from '../../static/banner.jpg'
import './mhead.scss'
function mheader(){
    return(
        <div  className="header-layout">
            <TabBar></TabBar>
            {/* <Banner></Banner> */}
        </div>
    )
}
class TabBar extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            arrList:[{title:'推荐音乐'},{title:'热歌榜'},{title:'搜索'}],
            activeIndex:0
        }
    }
    tabBar=(index:Number)=>{
        console.log(index)
        this.setState({
            activeIndex:index
        })
    }
    render(){
        let arrList = [{title:'推荐音乐'},{title:'热歌榜'},{title:'搜索'}]
        let arr:Array<JSX.Element> = []
        
        arrList.forEach((item,index) => {
            let active = this.state.activeIndex == index?'item-active':''
            arr.push(<div onClick={(e)=>this.tabBar(index)} className="item"><div  className={active}></div>{item.title}</div>)
        });
        return(
            <div className='tabbar'>
                {arr}
            </div>
        )
    }
}
function Banner(){
    return(
        <div className="banner"><img className="img" src={banner}/> </div>
    )
}
export default mheader