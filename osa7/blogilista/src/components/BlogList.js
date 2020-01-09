import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Blog from './Blog'

const BlogList = (props) => {
  return <div>
    <div>
      {props.blogs.map(blog => <Blog username={props.username} blog={blog} blogLikeHandler={props.blogLikeHandler} blogDeleteHandler={props.blogDeleteHandler} key={blog.id} />)}
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return {
    blogs: _.orderBy(state.blogs, ['likes'], ['desc']),
    username: state.user.username
  }
}

const connectedBlogList = connect(mapStateToProps)(BlogList)
export default connectedBlogList
