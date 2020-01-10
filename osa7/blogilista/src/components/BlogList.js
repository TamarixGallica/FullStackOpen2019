import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Table } from 'semantic-ui-react'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  return <div>
    <Table striped>
      <Table.Body>
        {props.blogs.map(blog => <BlogListItem username={props.username} blog={blog} blogLikeHandler={props.blogLikeHandler} blogDeleteHandler={props.blogDeleteHandler} key={blog.id} />)}
      </Table.Body>
    </Table>
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
