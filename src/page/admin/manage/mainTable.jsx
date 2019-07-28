import React,{Component} from 'react'

import { Table,Button } from 'antd';
import moment from 'moment'
const ButtonGroup = Button.Group;
function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    align:"center"
  },
  {
    title: '标签',
    dataIndex: 'tags',
    align:"center"
  },
  {
    title: '评论数',
    dataIndex: 'comments',
    align:"center",
    sorter:(a,b)=>a.comments>b.comments
  },
  {
    title: '发布时间',
    dataIndex: 'createdAt',
    // sorter: (a, b) => a.age - b.age,
    align:"center",
    sorter:(a,b)=>moment(a.createdAt).isBefore(b.createdAt)?1:-1
  },
  {
    title: '操作',
    dataIndex: 'operation',
    render: () => 
    <ButtonGroup>
        <Button type="primary" size="small">查看</Button>
        <Button type="dashed" size="small">编辑</Button>
        <Button type="danger" size="small">删除</Button>
    </ButtonGroup>,
    align:"center"
  },
];
const data=[]
for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      title: 'Screem',
      tags: 'iOS',
      comments:'1',
      createdAt: '2014-12-24 23:12:00',
    });
  }
class MainTable extends Component{
    render(){
        return(
            <Table style={{marginTop: 40}}   bordered columns={columns} dataSource={data} onChange={onChange}/>
        )
        
    }
}
export default MainTable