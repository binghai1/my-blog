import React from 'react'
import {  Icon,Tag } from 'antd';
export const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
 export  const IconTag = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text.map((item,index)=> <Tag key={index} color="volcano">{item}</Tag>)}
    </span>
  );
  export default {IconText,IconTag}
