import React from 'react'
import {Divider} from 'antd'
import {Link} from 'react-router-dom'
const Preview = (props)=>{
    return <div className="preview">
        <Divider orientation='center'>预览</Divider>
         <ul className="hot">
                <li><Link to="/">如何用 es6+ 写出优雅的 js 代码</Link></li>
         </ul>
    </div>
}
export default Preview