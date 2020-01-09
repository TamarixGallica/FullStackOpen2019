import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = (props) => {
  const style = {
    border: '1px solid black',
    padding: '0px 3px'
  }

  const blog = props.blog

  return (
    <div style={style}>
      <p><Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link></p>
    </div>
  )
}

export default BlogListItem