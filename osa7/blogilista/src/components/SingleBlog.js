import React from 'react'
import { connect } from 'react-redux'

const SingleBlog = (props) => {
  const blog = props.blog

  if (!blog) {
    return null
  }

  console.log(blog.comments)

  blog.comments.forEach(comment => console.log(comment))

  return (
    <div>
      <h2>{blog.title} {blog.author}</h2>
      <p><a href={blog.url}>{blog.url}</a></p>
      <p>{blog.likes} likes <input type="button" value="Like" data-blog-id={blog.id} onClick={props.blogLikeHandler}/></p>
      <p>Added by {blog.user.username}</p>
      {
        props.username === blog.user.username &&
          <p><input type="button" value="Remove" data-blog-id={blog.id} onClick={props.blogDeleteHandler}/></p>
      }
      <h3>Comments</h3>
      <ul>
        {
          blog.comments.map(comment => (<li key={comment}>{comment}</li>))
        }
      </ul>
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