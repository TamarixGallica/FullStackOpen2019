import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs }) => {
  return <div>
    <div>
      {blogs.map(blog => <Blog blog={blog} key={blog.id} />)}
    </div>
  </div>
}

export default BlogList
