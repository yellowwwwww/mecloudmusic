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
<<<<<<< HEAD

export default Title
=======
>>>>>>> 31c06c723979082da913aeac18b13fc8eaf46236
