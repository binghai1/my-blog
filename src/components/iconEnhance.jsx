import React from 'react'
import {  Icon,Tag } from 'antd';
import {withRouter} from 'react-router-dom'
export const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
 export  const IconTag = withRouter(({ type, text ,useIdexKey,history}) => {
  const onClick=(id,title,e)=>{
    e.stopPropagation()
    e.preventDefault()
    history.push(`/tags/${id}/${title}`)
  }
    return <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text&&text.map((item,index)=> <Tag onClick={(e)=>onClick(item._id,item.title,e)} key={useIdexKey?index+item._id+useIdexKey:item._Id} color="volcano">{item.title}</Tag>)}
    </span>
  });
  export default {IconText,IconTag}
