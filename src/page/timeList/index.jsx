import React,{Component,Fragment} from 'react'
import {Timeline,Spin,Icon,Pagination} from 'antd'
import {withRouter,Link} from 'react-router-dom'
import axios from 'axios'
import {getArticlesUrl} from '../../util/interfaces'
import './index.less'
import {groupBy} from '@/util'
@withRouter
class TimeList extends Component{
    state={
      list:[],
      total:0,
      loading:true
    }
   
    async componentDidMount(){
      this.fetchData()
    }
    fetchData=async (obj)=>{
      let res=await axios.get(getArticlesUrl({...obj,onlyTitle:true}))
      let newArr=groupBy(res.data.data,item=>item.createdAt.slice(0,4))
     this.setState({list:newArr,total:parseInt(res.data.totalCount),loading:false})
    }
    handlePageChange=(page)=>{
      this.fetchData({page})
    }
   
    render(){
      const {list,total,loading}=this.state
        return (
          <div className="content-inner-wrapper archives">
            <Spin tip="Loading..." spinning={loading}>
              <Timeline style={{marginBottom:40}}>
                {list.map((d, i) => (
                  <Fragment key={i}>
                    {i === 0 && (
                      <Timeline.Item>
                        <span className="desc">{`Nice! ${total} posts in total. Keep on posting.`}</span>
                        <br />
                        <br />
                      </Timeline.Item>
                    )}
      
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
                      <div className="year">
                        {d[0]['createdAt'].slice(0, 4)}
                        ...
                      </div>
                      <br />
                    </Timeline.Item>
      
                    {d.map(item => (
                      <Timeline.Item key={item._id}>
                        <span style={{ fontSize: '13px', marginRight: '16px' }}>{item.createdAt.slice(5, 10)}</span>
                        <Link to={`/article/${item._id}`}>{item.title}</Link>
                      </Timeline.Item>
                    ))}
                  </Fragment>
                ))}
              </Timeline>
      
             
            </Spin>
            {list.length < total && (
                <Pagination style={{position:"absolute",bottom:40}}
                  onChange={this.handlePageChange}
                  total={total}
                  pageSize={10}
                />
              )}
          </div>
        )
    }
}
export default TimeList