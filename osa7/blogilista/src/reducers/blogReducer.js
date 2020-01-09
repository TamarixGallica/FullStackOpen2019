const createBlog = (blog) => {
  return {
    type: 'add_blog',
    data: blog
  }
}

const initializeBlogs = (blogs) => {
  return {
    type: 'initialize_blogs',
    data: blogs
  }
}

const likeBlog = (blog) => {
  return {
    type: 'like_blog',
    data: blog
  }
}

const deleteBlog = (blog) => {
  return {
    type: 'delete_blog',
    data: blog
  }
}

const reducer = ( state = [], action) => {
  switch (action.type) {
  case 'initialize_blogs':
    return action.data
  case 'add_blog':
    return state.concat(action.data)
  case 'delete_blog':
    return state.filter(blog => blog.id !== action.data.id)
  case 'like_blog':
    return state.map(blog => blog.id === action.data.id ? action.data : blog)
  default:
    return state
  }
}

export { createBlog, initializeBlogs, likeBlog, deleteBlog }
export default reducer