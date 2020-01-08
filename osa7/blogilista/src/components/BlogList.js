import React from 'react'
import PropTypes from 'prop-types'
import Blog from './Blog'

const BlogList = ({ username, blogs, blogLikeHandler, blogDeleteHandler }) => {
  return <div>
    <div>
      {blogs.map(blog => <Blog username={username} blog={blog} blogLikeHandler={blogLikeHandler} blogDeleteHandler={blogDeleteHandler} key={blog.id} />)}
    </div>
  </div>
}

BlogList.propTypes = {
  username: PropTypes.string.isRequired,
  blogs: PropTypes.array.isRequired,
  blogLikeHandler: PropTypes.func.isRequired,
  blogDeleteHandler: PropTypes.func.isRequired
}

export default BlogList
