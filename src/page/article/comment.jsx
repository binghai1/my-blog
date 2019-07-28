import React from 'react'
import { Comment, Avatar,Alert,Divider,Tooltip } from 'antd';
import {Link } from 'react-router-dom'
import './comment'
import moment from 'moment'
const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span>Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }

    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
    datetime={(
        <Tooltip
          title={moment()
            .subtract(2, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>
            {moment()
              .subtract(2, 'days')
              .fromNow()}
          </span>
        </Tooltip>
      )}
  >
    {children}
  </Comment>
);
const CommentList=()=>(
    <div className="comment-list">
        <Divider>评论</Divider>
        
           
        <Alert message={<span > 
             请<Link style={{color:'#1890ff'}}>登陆</Link>后进行评论</span>
            }type="info" showIcon/>
        
        <ExampleComment>
         <ExampleComment></ExampleComment>
        </ExampleComment>
    </div>
    
)
export default CommentList