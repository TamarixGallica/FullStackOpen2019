import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  return <div>
    <div>
      {props.blogs.map(blog => <BlogListItem username={props.username} blog={blog} blogLikeHandler={props.blogLikeHandler} blogDeleteHandler={props.blogDeleteHandler} key={blog.id} />)}
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return {
    blogs: _.orderBy(state.blogs, ['likes'], ['desc']),
    username: state.userToken.username
  }
}

const connectedBlogList = connect(mapStateToProps)(BlogList)
export default connectedBlogList
