import React,{Component} from 'react'
import './index.scss'
interface Iprops{
    title:string
}
// export default class Title extends Component<Iprops,{}>{
//     render(){
//         console.log(this.props)
//         return(
//             <div className="title-layout">
//                 <p>{this.props.title}</p>
//                 <i className='iconfont iconyou'></i>
//             </div>
//         )
//     }
// }
 const Title = (props:Iprops) =>{
    return (
             <div className="title-layout">
                <p>{props.title}</p>
                <i className='iconfont iconyou'></i>
            </div>
    )
}

export default Title