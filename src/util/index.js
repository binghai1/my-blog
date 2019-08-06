import React from 'react'
import xss from 'xss'
import marked from 'marked'
//仅倒入js语言
import hljs from 'highlight.js/lib/highlight';
import "../assets/markdown.less";
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark-reasonable.css'
hljs.registerLanguage('javascript', javascript);
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
  
