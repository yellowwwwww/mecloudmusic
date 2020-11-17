
import React from 'react';
import banner from '../../static/banner.jpg'
import './mhead.css'
function mheader(){
    return(
        <div  className="header-layout">
            <TabBar></TabBar>
            <Banner></Banner>
        </div>
    )
}
class TabBar extends React.Component<any,any>{
    constructor(props:any){
        super(props)
    }
    render(){
        let arrList = [{title:'推荐音乐'},{title:'热歌榜'},{title:'搜索'}]
        let arr:Array<JSX.Element> = []
        arrList.forEach(item => {
         arr.push(<div className="item">{item.title}</div>)
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