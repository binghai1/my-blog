import React,{Component} from 'react';
import Header from '../components/header'
import {Row,Col} from 'antd'
class Home extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <Header handleInput={(value)=>this}/>
        </div>
    }
}

export default Home