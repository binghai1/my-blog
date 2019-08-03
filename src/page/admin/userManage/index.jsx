import React, { Component } from 'react'
import moment from 'moment'
import { Table, Button, Modal, Input } from 'antd'
import {findUsersUrl,deleteUserUrl} from '@/util/interfaces'
import axios from 'axios'
class UserManage extends Component {
  state = {
    list: [],
    pagination: {},
    loading: false,
    q:""
  }

  componentDidMount() {
    this.fetchList()
  }

  getColumns = () => {
    return [
      {
        title: '用户名',
        dataIndex: 'username'
      },
      {
        title: '注册时间',
        dataIndex: 'createdAt',
        sorter: (a, b) => (moment(a.createdAt).isBefore(b.createdAt) ? 1 : -1)
      },
      {
        title: '邮箱',
        dataIndex: 'email',
      },
      {
        title: '操作',
        render: (text, record) => (
          <Button type="danger" onClick={() => this.handleDelete(record._id, record.username)}>
            删除
          </Button>
        )
      }
    ]
  }

  fetchList = (page,q) => {
    this.setState({ loading: true })
    axios.get(findUsersUrl(page,q)).then(res => {
      const pagination = {
        pageSize:6,
        total: res.data.totalCount
      }
      this.setState({ list: res.data.data, pagination, loading: false })
    })
  }

  handleDelete =(userId, username) => {
    Modal.confirm({
      title: '您确认删除该用户?，此操作不可恢复！',
      content: `用户： ${username} `,
      onOk: () => {
        axios.delete(deleteUserUrl(userId)).then(res => {
        //   if (res.code === 200) {
        //     this.fetchList(this.state.pagination)
        //     message.success(res.message)
        //   }
        })
      }
    })
  }

  handleChange = pagination => {
    this.fetchList(pagination.current)
  }
  handleClick=()=>{
    this.fetchList("",this.state.q)
  }
  handleInput=e=>{
      this.setState({q:e.target.value})
  }
  render() {
    const { list, pagination, loading } = this.state
    return (
      <div className="">
        <div style={{marginBottom:20}}>
            <Input style={{width:200}} onChange={this.handleInput} placeholder="请输入用户名"></Input>
            <Button style={{marginLeft:10}} onClick={this.handleClick}>检索</Button>
        </div>
        <Table
          rowKey={record=>record._id}
          bordered
          columns={this.getColumns()}
          loading={loading}
          dataSource={list}
          pagination={pagination}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default UserManage
