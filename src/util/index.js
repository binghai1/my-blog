import xss from 'xss'
import marked from 'marked'
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
