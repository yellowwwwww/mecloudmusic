
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
            activeIndex:1
        }
    }
    render(){
        let arrList = [{title:'推荐音乐'},{title:'热歌榜'},{title:'搜索'}]
        let arr:Array<any> = []
        
        for(let i = 0;i<arrList.length;i++){
            let style = this.state.activeIndex == i?'item-active':''
            arr.push(<div className="item item-acitve"><div className={style}></div>{arrList[i].title}</div>)
        }
        // arrList.forEach(element:<any,any> => {
         
        // });
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