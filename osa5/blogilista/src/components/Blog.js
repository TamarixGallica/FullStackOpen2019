import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ username, blog, blogLikeHandler, blogDeleteHandler }) => {
  const [detailsVisible, setDetailsVisible] = useState(false)
  const toggleDetailsVisible = () => setDetailsVisible(!detailsVisible)
  const style = {
    border: "1px solid black",
    padding: "0px 3px"
  }

  return (
    <div style={style}>
      <p onClick={toggleDetailsVisible}>{blog.title} {blog.author}</p>
      { detailsVisible &&
        <>
          <p><a href={blog.url}>{blog.url}</a></p>
          <p>{blog.likes} likes <input type="button" value="Like" data-blog-id={blog.id} onClick={blogLikeHandler}/></p>
          <p>Added by {blog.user.username}</p>
          {
            username === blog.user.username &&
            <p><input type="button" value="Remove" data-blog-id={blog.id} onClick={blogDeleteHandler}/></p>
          }
        </>
      }
    </div>
  )
}

Blog.propTypes = {
  username: PropTypes.string.isRequired,
  blog: PropTypes.object.isRequired,
  blogLikeHandler: PropTypes.func.isRequired,
  blogDeleteHandler: PropTypes.func.isRequired
}

export default Blog