import React, { useState } from 'react'
import { connect } from 'react-redux'

const Blog = (props) => {
  const [detailsVisible, setDetailsVisible] = useState(false)
  const toggleDetailsVisible = () => setDetailsVisible(!detailsVisible)
  const style = {
    border: '1px solid black',
    padding: '0px 3px'
  }

  const blog = props.blog

  return (
    <div style={style}>
      <p onClick={toggleDetailsVisible}>{blog.title} {blog.author}</p>
      { detailsVisible &&
        <>
          <p><a href={props.blog.url}>{blog.url}</a></p>
          <p>{blog.likes} likes <input type="button" value="Like" data-blog-id={blog.id} onClick={props.blogLikeHandler}/></p>
          <p>Added by {blog.user.username}</p>
          {
            props.username === blog.user.username &&
            <p><input type="button" value="Remove" data-blog-id={blog.id} onClick={props.blogDeleteHandler}/></p>
          }
        </>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

const connectedBlog = connect(mapStateToProps)(Blog)
export default connectedBlog