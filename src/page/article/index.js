import React,{Component} from 'react';
import {Button} from 'antd'
import {withRouter} from 'react-router-dom'
@withRouter
class Article extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.match.params.id)
        return <div>
            article
            <Button>111</Button>
        </div>
    }
}

export default Article