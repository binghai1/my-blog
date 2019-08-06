import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './router'
import * as serviceWorker from './serviceWorker';
import {Provider}  from  'react-redux'
import store from './store'
import axios from 'axios'
import {message} from 'antd'
// import './index.less';
    axios.interceptors.request.use(config=>{
      // ReactDOM.render(<Spin/>,document.getElementById("loading-wrapper"))
      if(localStorage.token){
        config.headers.Authorization="Bearer "+localStorage.token
      }
      return config
    },error=>{
      console.error(error)
    })
    axios.interceptors.response.use(config=>{
      return config
    },error=>{
      let tip="";
      switch(error.response.status){
        case 404 : tip="服务器异常，请稍后再试"; break;
        case 403 : tip="您没有权限"; break;
        case 401 : {
          localStorage.token&&localStorage.removeItem("token")
          window.location.href="/"
          tip="登陆验证过时，请重新登陆";
        } break;
        case 422 : tip="参数错误"; break;
        default : tip="未知错误"
      }
      message.warning(tip)
      return Promise.resolve(error.response);
    })
//markdown额外样式

ReactDOM.render(<Provider store={store}><MainRouter /></Provider>, document.getElementById('root'));

axiousInsterors()
React.Component.prototype.$axios=axios
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
