import React,{Component} from 'react';
import Header from '../components/header'
import {Row,Col} from 'antd'
class Home extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <Header></Header>
        </div>
    }
}

export default Home