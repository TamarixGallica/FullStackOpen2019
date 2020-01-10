import React from 'react'
import { connect } from 'react-redux'
import { Header, List } from 'semantic-ui-react'
import CommentForm from './CommentForm'

const SingleBlog = (props) => {
  const blog = props.blog

  if (!blog) {
    return null
  }

  return (
    <div>
      <Header as='h2'>{blog.title} {blog.author}</Header>
      <p><a href={blog.url}>{blog.url}</a></p>
      <p>{blog.likes} likes <input type="button" value="Like" data-blog-id={blog.id} onClick={props.blogLikeHandler}/></p>
      <p>Added by {blog.user.username}</p>
      {
        props.username === blog.user.username &&
          <p><input type="button" value="Remove" data-blog-id={blog.id} onClick={props.blogDeleteHandler}/></p>
      }
      <Header as='h3'>Comments</Header>
      <CommentForm blog={blog} />
      <List bulleted items={blog.comments} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.userToken.username
  }
}

const connectedSingleBlog = connect(mapStateToProps)(SingleBlog)
export default connectedSingleBlog