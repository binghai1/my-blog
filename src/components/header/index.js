
import React,{useState,useEffect,useCallback}  from 'react';
import {Row,Col,Button,Layout} from 'antd'
import Search from './search'
import Nav from './nav'
import './index.less'
import Login from '@/page/login'
import Register from '@/page/login/register'
import {connect} from 'react-redux'
import * as actionCreators from '@/store/actionCreators'
const {Header} = Layout
const Head=(props)=>{
    const [current,setCurrent] = useState('')
    const handleClick=useCallback((e)=>{
        console.log(e)
    })
    const {showModal,showRegisterModal}=props
    useEffect(()=>{

    })
    return <Header className="header-container" >
        <Row  >
            <Col span={5} >   
                <div>logo</div>
            </Col>
            <Col span={19}>
                <div className="search-bar">
                    <Search handleClick={handleClick}/>
                </div>
                <div className="btn-group" style={{marginRight:40}}>

                    <Button ghost type="primary" style={{marginRight:20}} size="small"
                    onClick={()=>showModal(true)}>登陆</Button>

                    <Button ghost type="danger" size="small" onClick={()=>showRegisterModal(true)}>注册</Button>
                </div>
                <div className="menu-bar">
                   <Nav/>
                </div>
                
            </Col>
            <Login/>
            <Register/>
        </Row>
    </Header>
}
export default connect(()=>({}),(dispatch)=>({
    showModal(flag){
        dispatch(actionCreators.getModel(flag))
    },
    showRegisterModal(flag){
        dispatch(actionCreators.getRegisterModel(flag))
    } 
}))(Head)