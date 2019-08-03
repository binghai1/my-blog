import React from 'react'
import {Divider} from 'antd'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const Preview = ({list})=>{
    return <div className="preview">
        <Divider orientation='center'>预览</Divider>
         <ul className="hot">
                {list.map(item=>(
                     <li key={item._id}><Link to={`/article/${item._id}`}>{item.title}</Link></li>
                ))}
         </ul>
    </div>
}
export default connect((state)=>({list:state.model.list}))(Preview)