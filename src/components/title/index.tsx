<<<<<<< HEAD
import React from 'react'
=======
import React,{Component} from 'react'
import './index.scss'
interface Iprops{
    title:string
}
export default class Title extends Component<Iprops,{}>{
    render(){
        console.log(this.props)
        return(
            <div className="title-layout">
                <p>{this.props.title}</p>
                <i className='iconfont iconyou'></i>
            </div>
        )
    }
}
>>>>>>> c7a08fe00502d1a04cf18ff51f53d7c5ee0721fe
