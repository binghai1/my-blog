import React,{PureComponent} from 'react';
import Header from '@/components/header'
import {Layout,Row,Col,BackTop} from 'antd'
import {withRouter} from 'react-router-dom'
import './index.less'
import Sider from '@/components/sider'
import {connect} from 'react-redux'
import LoadingAct from '@/components/loading'
import {getTagsUrl} from '../../util/interfaces'
import * as actionCreators from '@/store/actionCreators'
import axios from 'axios'
const {  Footer } = Layout;
@withRouter
@connect((state)=>({
    list:state.model.list
}),(dispatch)=>({
    saveTags(tags){
    dispatch(actionCreators.saveTags(tags))
    }
}))
class Home extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount(){
        const {saveTags}=this.props
        axios.get(getTagsUrl).then((res)=>{
            saveTags(res.data.data)
        })
    }
    handleInput(value){
        console.log(value,333)
    }
    render(){
        console.log(222)
        const {list } = this.props
        return <div className="home-container">
              <Layout >
                <Header handleInput={(value)=>this.handleInput(value)}/>
                <Row className="main">
                    <Col span={5}><Sider/></Col>
                    <Col className="right-wrapper" span={19}>
                         {list?this.props.children:<LoadingAct/>}
                    </Col>
                </Row>
                <BackTop visibilityHeight={1} target={() => document.querySelector('.right-wrapper')} />
                <Footer>Footer</Footer>
                </Layout>
        </div>
    }
}

export default Home