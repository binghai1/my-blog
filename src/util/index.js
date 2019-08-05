import xss from 'xss'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import axios from 'axios'
import {message} from 'antd'
import React from 'react'
export const translateMarkdown = (plainText, isGuardXss = false) => {
    return marked(isGuardXss ? xss(plainText) : plainText, {
      renderer: new marked.Renderer(),
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: true,
      smartLists: true,
      smartypants: true,
      highlight: function(code) {
        return hljs.highlightAuto(code).value
      }
    })
  }
export const axiousInsterors=()=>{
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
}
//排序
export const groupBy = (arr, f) => {
  const groups = {}
  arr.forEach(item => {
    const group = JSON.stringify(f(item))
    groups[group] = groups[group] || []
    groups[group].push(item)
  })
  return Object.keys(groups).map(group => groups[group] )
}
//异步加载组件
export const asyncComponent=(getComponent)=> {
    return class AsyncComponent extends React.Component {
      static Component = null;
      state = { Component: AsyncComponent.Component };
  
      componentDidMount() {
        if (!this.state.Component) {
          getComponent().then(({ default: Component }) => {
            AsyncComponent.Component = Component
            this.setState({ Component })
          })
        }
      }
      //组件将被卸载
      componentWillUnmount() {
        //重写组件的setState方法，直接返回空
        this.setState = (state, callback) => {
          return;
        };
      }
      render() {
        const { Component } = this.state
        if (Component) {
          return <Component {...this.props} />
        }
        return null
      }
    }
  }
  
