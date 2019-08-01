import React,{Component} from 'react'
import {Timeline} from 'antd'
import {withRouter,Link} from 'react-router-dom'
import {findArticlesByTagURl} from '../../util/interfaces'
import axios from 'axios'
import moment from 'moment'
import './index.less'
@withRouter
class TagsList extends Component{
    state={
        list:[]
    }
    async componentWillReceiveProps(nextProps){
      const {id}=this.props.match.params
        if(id!==nextProps.match.params.id){
          let res=await axios.get(findArticlesByTagURl(id))
          this.setState({list:res.data.data})
        }
    }
    async componentDidMount(){
       const{match} = this.props
       let res=await axios.get(findArticlesByTagURl(match.params.id))
       this.setState({list:res.data.data})
    }
    render(){
        const {list} = this.state
        let {match} =this.props
        return <div className="timeline">
        <Timeline>
          <Timeline.Item>
            <h1 className="list-title">
                {match.params.name}
              <small className="type-name"> Tags</small>
            </h1>
            <br />
          </Timeline.Item>
          {list.map(item => (
            <Timeline.Item key={item._id}>
              <span style={{ fontSize: '13px', marginRight: '16px' }}>{moment(item.createdAt).format("MM-DD")}</span>
              <Link to={`/article/${item._id}`}>{item.title}</Link>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    }
}
export default TagsList