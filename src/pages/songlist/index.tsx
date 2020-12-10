import React,{Component} from 'react'
import { connect } from 'react-redux'
interface Istate{
    name:String
}

class songList extends Component<Istate,any>{

    render(){
        console.log(this.props)
        return (
            <div>111</div>
        )
    }
}


const mapStateToProps = (state:any) =>{
    return {
        name:state.name,
    
    }
}
export default connect(mapStateToProps)(songList)