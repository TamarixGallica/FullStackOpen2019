import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, blogLikeHandler }) => {
  return <div>
    <div>
      {blogs.map(blog => <Blog blog={blog} blogLikeHandler={blogLikeHandler} key={blog.id} />)}
    </div>
  </div>
}

export default BlogList
