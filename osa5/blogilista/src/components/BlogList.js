import React from 'react'
import Blog from './Blog'

const BlogList = ({ username, blogs, logoutHandler }) => {
  return <div>
    <h1>Blogs</h1>
    <div>{username} logged in <input type="submit" value="logout" onClick={logoutHandler}/></div>
    <div>
      {blogs.map(blog => <Blog blog={blog} key={blog.id} />)}
    </div>
  </div>
}

export default BlogList
