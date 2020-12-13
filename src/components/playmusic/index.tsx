import { format } from 'path'
import React,{Component} from 'react'
import './index.scss'
import {connect} from "react-redux"
class PlayMusic extends Component<any,any>{
    
    render(){
        return(
            <div className="play-layout">
                <div className="play">
                    <div className="play-header"></div>
                    <div className="play-title">
                        <div>{this.props.name}</div>
                        <div>Jony J</div>
                    </div>
                    <div style={{flex:1}}></div>
                    <div className="play-btn">
                        <i className="iconfont iconzanting"></i>
                    </div>
                    <i className="iconfont iconaixin1"></i>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state:any)=>{
    return{
        name:state.name
    }
}

export default  connect(mapStateToProps)(PlayMusic)