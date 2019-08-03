import React, {  useState } from 'react'
import PropTypes from 'prop-types'
import './index.less'
import axios from 'axios'
import {createCommentUrl} from '@/util/interfaces'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Comment, Form, Button, Divider, Input, Alert,message} from 'antd'
import CommentList from './list'
const { TextArea } = Input

const Editor = ({ onChange, onSubmit, submitting, value,  }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} placeholder="说点什么..." onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <div className="controls">
        <i className="iconfont icon-tips" />
        <span className="support-tip">支持 Markdown 语法</span>
        <Button className="" htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          留言
        </Button>
      </div>
    </Form.Item>
  </div>
)

function ArticleComment(props) {
  const [value, setValue] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const { isAuthorization, articleId,commentList,setCommentList } = props
  const handleSubmit = () => {
    if (!value) return
    if (!isAuthorization) return message.warn('您未登陆，请登录后再试。')
    setSubmitting(true)
    axios
      .post(createCommentUrl, { articleId: articleId, content: value })
      .then(res => {
        setSubmitting(false)
        setValue('')
        res.data.data.childComments=[]
        setCommentList([res.data.data,...commentList])
        message.succes("评论成功")
      })
      .catch(() => setSubmitting(false))
  }


  return (
    <div className="comment-wrapper">
      <div className="comment-header">
        {/* <span className="count">{getCommentsCount(commentList)}</span> {articleId !== -1 ? '条评论' : '条留言'} */}
       
        <Divider className="hr" />
      </div>

      <Comment
        content={
          !isAuthorization?<Alert message={<span > 
            请<Link to="/" style={{color:'#1890ff'}}>登陆</Link>后进行评论</span>
           }type="info" showIcon/>:
           <Editor
           onChange={e => setValue(e.target.value)}
           onSubmit={handleSubmit}
           submitting={submitting}
           value={value}
           articleId={articleId}
         />
        }
      />
      <CommentList commentList={commentList} articleId={articleId} setCommentList={setCommentList} />
    </div>
  )
}

ArticleComment.propTypes = {
  articleId: PropTypes.string, // 文章 id，如果为 -1 则代表是自由评论区！
  commentList: PropTypes.array, // 评论列表
  setCommentList: PropTypes.func
}

export default connect(
  state => state.user
)(ArticleComment)