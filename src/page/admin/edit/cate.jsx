import React, { Fragment,PureComponent } from 'react'

import { Tag } from 'antd';
import { connect } from 'react-redux';
import {setTags} from '@/store/actionCreators'
const {CheckableTag}=Tag
@connect((state)=>({
    selectTags:state.model.selectTags
}),(dispatch)=>({
  setSelectTags(tag){
    dispatch(setTags(tag))
  }
}))
class Cate extends PureComponent {
  
  state = {
  };

  handleChange(tag, checked) {
    this.props.setSelectTags(tag)
  }
  render() {
    const {tags,selectTags} = this.props
    return (
      <Fragment>
        <h6 style={{ marginRight: 8, display: 'inline' }}>Tags:</h6>
        {tags&&tags.map(tag => (
          <CheckableTag
            key={tag._id}
            checked={  selectTags.indexOf(tag._id) > -1}
            onChange={checked => this.handleChange(tag._id, checked)}
          >
            {tag.title}
          </CheckableTag>
        ))}
      </Fragment>
    );
  }
}
export default Cate