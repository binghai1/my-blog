
import axios from 'axios'
import {message} from 'antd'

export default ()=>{axios.interceptors.request.use(config=>{
    // ReactDOM.render(<Spin/>,document.getElementById("loading-wrapper"))
    if(localStorage.token){
      config.headers.Authorization="Bearer "+localStorage.token
} return config
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
      tip="登陆验证过时，请重新登陆";
      setTimeout(() => {
        window.location.href="/"
      }, 1000);
    } break;
    case 422 : tip="参数错误"; break;
    default : tip="未知错误"
  }
  message.warning(tip)
  return Promise.resolve(error.response);
})
}