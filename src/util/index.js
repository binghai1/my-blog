import xss from 'xss'
import marked from 'marked'
<<<<<<< HEAD
import hljs from 'highlight.js/lib/highlight';
import "../assets/markdown.less";
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark-reasonable.css'
hljs.registerLanguage('javascript', javascript);
=======
import hljs from 'highlight.js'

import 'highlight.js/styles/atom-one-dark-reasonable.css'
// import 'highlight.js/styles/github.css'
import axios from 'axios'
import {message} from 'antd'
import React from 'react'
>>>>>>> 3a20e12e5d3910e5611ed1b8eba825c27d2f8250
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
