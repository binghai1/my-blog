import React, { Component,Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {createCommentUrl,deleteCommentUrl,deleteAllCommentUrl} from '@/util/interfaces'
import {  translateMarkdown } from '@/util'
import { Comment, Avatar, Button, Tooltip, Input, Icon, Popconfirm, message, } from 'antd'
import moment from 'moment'
import axios from 'axios'
import AuthorAvatar from '@/components/authorAvatar'

const { TextArea } = Input

const CommentItem = ({
  children,
  item,
  rootCommentId,
  OpenReplyId,
  handleChange,
  handleKeyUp,
  onSubmit,
  renderAvatar,
  delComment,
  auth,
  value
}) => {
  function handleClick(id) {
    OpenReplyId(id)
  }
  const content = translateMarkdown(item.content, true)
  return (
    <Comment
      actions={[<Fragment>
        {
          item.rootCommentId?""
          :<span onClick={() => handleClick(item._id)}>Reply to</span>
        }
      </Fragment>
        ,
        <Fragment>
          {auth  && (
            <Popconfirm
              title={'是否删除该评论？'}
              cancelText="取消"
              okText="确认"
              onConfirm={() => delComment(item)}>
              <Icon type="delete" className="icon-delete" />
            </Popconfirm>
          )}
        </Fragment>
      ]}
      author={<span>{item.commentor && item.commentor.username}</span>}
      avatar={renderAvatar(item)}
      content={<div className="article-detail" dangerouslySetInnerHTML={{ __html: content }} />}
      datetime={
        <Tooltip title={moment(item.createdAt).format("YYYY-MM-DD")}>
          <span>{moment(item.createdAt).fromNow()}</span>
        </Tooltip>
      }>
      {(item._id===rootCommentId) && (
        <div className="reply-form">
          <TextArea
            placeholder={`回复${item.commentor.username}...`}
            value={value}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          />
          <div className="reply-form-controls">
            <span className="tip">Ctrl or ⌘ + Enter</span>
            <Button htmlType="submit" type="primary" disabled={!value.trim()} onClick={()=>onSubmit(item)}>
              回复
            </Button>
          </div>
        </div>
      )}
      {children}
    </Comment>
  )
}

@connect(state => ({
  username: state.user.username,
  userId: state.user._id,
  auth: state.user.isAuthorization,
  role: state.user.role
}))
class CommentList extends Component {
  static propTypes = {
    commentList: PropTypes.array,
    articleId: PropTypes.string,
    setCommentList: PropTypes.func
  }

  state = {
    commentList: [],
    rootCommentId: "",
    value: '',
  }

  renderAvatar = item => {
    if (this.props.role==="管理员") {
      return <AuthorAvatar size="default" />
    } else {
      return (
        <Avatar className="user-avatar" size="default" style={{ backgroundColor:   '#ffbf00' }}>
          {item.user && item.user.username}
        </Avatar>
      )
    }
  }

  OpenReplyId=(id)=>{
    this.setState({
      rootCommentId:id
    })
    
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleKeyUp = e => {
    if (e.ctrlKey && e.keyCode === 13) {
      this.onSubmit()
    }
  }

  onSubmit = (item) => {
    const {rootCommentId}=this.state
    const content = this.state.value.trim()
    if (!this.props.auth) return message.warn('您未登陆，请登录后再试。')
    const { articleId } = this.props
    axios.post(createCommentUrl, {
        articleId,
        content,
        rootCommentId,
        replyTo:item.commentor._id
      })
      .then(res => {
        let list = [...this.props.commentList]
        let data=res.data.data
        let index=list.findIndex(val=>val._id===rootCommentId)
        list[index].childComments?list[index].childComments.unshift(data): list[index].childComments=[data]
        this.props.setCommentList(list)
        this.setState({ rootCommentId: "",  value: '' })
      })
  }

  delComment = async (item) => {
    let list = [...this.props.commentList]
    if(!item.rootCommentId){
      const rootCommentId=item._id
      let res=await axios.delete(deleteAllCommentUrl(rootCommentId))
      if (!res.data.data ) return message.error(res.data.message)
      list = list.filter(d => d._id !==rootCommentId)
    }else{
      const {rootCommentId,_id}=item
      let res=await axios.delete(deleteCommentUrl(item._id))
      if (!res.data.data ) return message.error(res.data.message)
        let index=list.findIndex(val=>val._id===rootCommentId)
        list[index].childComments=list[index].childComments.filter(d => d._id !== _id)
    }
    this.props.setCommentList(list)
    this.setState({ rootCommentId: "",  value: '' })
    
    
  }

  render() {
    const { commentList,role} = this.props
    const { value,rootCommentId} = this.state
    let auth=role==="管理员"
    const commonProps = {
      value,
      auth,
      OpenReplyId:this.OpenReplyId,
      rootCommentId,
      renderAvatar: this.renderAvatar,
      handleChange: this.handleChange,
      handleKeyUp: this.handleKeyUp,
      onSubmit: this.onSubmit,
      delComment: this.delComment
    }

    return (
      <div className="">
        {commentList.map(comment => (
          <CommentItem key={comment._id} item={comment}  {...commonProps}>
            {comment.childComments.map(reply => (
              <CommentItem key={reply._id} item={reply}  rootCommentId={comment._id} {...commonProps} />
            ))}
          </CommentItem>
        ))}
      </div>
    )
  }
}

export default CommentList
