import React,{Component} from 'react';
import './mhead.css'

class TabBar extends Component<any,any>{
    constructor(props:any){
        super(props)
    }
    
    render(){
        var list:Array<string>=[]
        const tabList = [{title:'推荐'},{title:'我的'}]
         tabList.forEach(item => {
             list.push((`<p>${item.title}</p>`)) 
        });

        return list
    }
    
}
function mheader(){
    return(
        <div  className="header-layout">
            <TabBar />
        </div>
    )
}
export default mheader