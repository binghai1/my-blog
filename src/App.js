import React,{Component} from 'react';
import './App.css';
import {withRouter} from 'react-router-dom'
import * as actionCreators from '@/store/actionCreators'
import {connect} from 'react-redux'
import jwt_decode from 'jwt-decode'
@connect(()=>(
  { }) ,(dispatch)=>({
  setAuthorization(user){
      dispatch(actionCreators.setAuthorization(user))
    },
    setUserInfo(user){
      dispatch(actionCreators.setUserInfo(user))
    },
    setWidth(width){
      dispatch(actionCreators.setWidth(width))
    }
}))
@withRouter
class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentWillMount(){
  const {setUserInfo,setAuthorization}=this.props
    let token=localStorage.token
    if(token){
       let user=jwt_decode(token)
       setAuthorization(user)
       console.log(user,"用户")
       setUserInfo(user)
    }
    //先设置一遍width
    this.listenresize()
    window.addEventListener('resize',this.listenresize)
    
  }
  componentWillUnmount(){
    window.removeEventListener("resize",this.listenresize);
  }
  listenresize=()=>{
    this.props.setWidth(document.documentElement.clientWidth)
  }
  render(){
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
  
}

export default App;
