import React from 'react'
import Blog from './Blog'

const BlogList = ({ username, blogs, blogLikeHandler, blogDeleteHandler }) => {
  return <div>
    <div>
      {blogs.map(blog => <Blog username={username} blog={blog} blogLikeHandler={blogLikeHandler} blogDeleteHandler={blogDeleteHandler} key={blog.id} />)}
    </div>
  </div>
}

export default BlogList
