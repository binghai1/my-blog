import React,{Component} from 'react';
import Header from '../components/header'
import {Row,Col} from 'antd'
class Home extends Component{
    constructor(){
        super()
    }
    handleInput(value){
        console.log(value,333)
    }
    render(){
        return <div>
            <Header handleInput={(value)=>this.handleInput(value)}/>
        </div>
    }
}

export default Home