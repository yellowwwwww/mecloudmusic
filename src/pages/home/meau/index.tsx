import React from 'react'
// type Item = {[key:string]:any}
// type State = {
//     meauList:[Item]
// }
import './index.scss'
export default class Meau extends React.Component<{},any>{
    constructor(props:any){
        super(props)
        this.state = {
            meauList: [ 
                        { title: '每日推荐', icon: 'iconrili' },
                        { title: '歌单', icon: 'icongedan' },
                        { title: '心灵电台', icon: 'iconshouyinji' },
                        { title: '排行榜', icon: 'iconpaihangbang' }
                        ]
        }
    }
    render(){
        console.log(this.context)
        return(
            <div className="meau-layout">
                <div className="meau">
                    {this.state.meauList.map((item:any,index:number)=>(
                        <div className="meau-item" key={index}>
                            <div className="item-content"><i className={['iconfont',item.icon].join(' ')}></i></div>
                            <div className="title">{item.title}</div>
                        </div>  
                    ))}
                </div>
            </div>
        )
    }
}