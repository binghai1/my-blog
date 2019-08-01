import React from 'react'
import {  Icon,Tag } from 'antd';
export const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
 export  const IconTag = ({ type, text ,useIdexKey}) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text&&text.map((item,index)=> <Tag key={useIdexKey?index:item._id} color="volcano">{item.title}</Tag>)}
    </span>
  );
  export default {IconText,IconTag}
