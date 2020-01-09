import _ from 'lodash'

const initializeUsers = (users) => {
  return {
    type: 'initialize_users',
    data: users
  }
}

const addBlogForUser = (user, blog) => {
  const blogs = user.blogs.concat(_.omit(blog, 'user'))
  return Object.assign({}, user, { blogs: blogs })
}

const removeBlogFromUser = (user, blog) => {
  return Object.assign({}, _.omit(user, 'blogs'), { blogs: user.blogs.filter(x => x.id !== blog.id) })
}

const reducer = ( state = [], action) => {
  switch (action.type) {
  case 'add_blog':
    return state.map(user => user.id === action.data.user.id ? addBlogForUser(user, action.data) : user)
  case 'delete_blog':
    return state.map(user => user.id === action.data.user.id ? removeBlogFromUser(user, action.data) : user)
  case 'initialize_users':
    return action.data
  default:
    return state
  }
}

export { initializeUsers }
export default reducer