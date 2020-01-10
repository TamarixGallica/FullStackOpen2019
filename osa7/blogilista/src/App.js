import React, { useEffect } from 'react'
import { BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { connect } from 'react-redux'
import BlogList from './components/BlogList'
import BlogCreation from './components/BlogCreation'
import Navigation from './components/Navigation'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import Users from './components/Users'
import User from './components/User'
import SingleBlog from './components/SingleBlog'
import blogService from './services/blogs'
import userService from './services/users'
import loginService from './services/login'
import { useField } from './hooks'
import { createStatusMessage } from './reducers/statusMessageReducer'
import { createBlog, initializeBlogs, likeBlog, deleteBlog } from './reducers/blogReducer'
import { setUserToken, resetUserToken } from './reducers/userTokenReducer'
import { initializeUsers } from './reducers/userReducer'

function App(props) {
  const username = useField('text')
  const password = useField('password')
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const blogHook = () => {
    blogService.getAll()
      .then(response => {
        props.initializeBlogs(response)
      })
  }

  const userHook = () => {
    userService.getAll()
      .then(response => {
        props.initializeUsers(response)
      })
  }

  const displayMessage = (type, message) => {
    props.createStatusMessage(type, message)
    setTimeout(() => props.createStatusMessage('', ''), 3000)
  }

  const loginHandler = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username: username.value, password: password.value })
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      props.setUserToken(user)
      blogService.setToken(user.token)
      username.reset()
      username.reset()
    } catch (ex) {
      console.log(ex)
      displayMessage('error', 'Login failed due to invalid credentials')
    }
  }

  const logoutHandler = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedUser')
    props.resetUserToken()
  }

  const blogCreateHandler = async (event) => {
    event.preventDefault()
    try {
      const blog = await blogService.addBlog({ title: title.value, author: author.value, url: url.value })
      props.createBlog(blog)
      title.reset()
      author.reset()
      url.reset()
      displayMessage('success', `Blog ${blog.title} by ${blog.author} was successfully added`)
    } catch (ex) {
      console.log(ex)
      displayMessage('error', 'Blog couldn\'t be created because an error occured')
    }
  }

  const blogLikeHandler = async (event) => {
    event.preventDefault()
    try {
      const blogId = event.target.getAttribute('data-blog-id')
      const blogIndex = props.blogs.findIndex(blog => blog.id === blogId)
      const blog = props.blogs[blogIndex]

      const requestBlog = { ...blog, likes: blog.likes + 1 }

      const response = await blogService.likeBlog(blog.id, requestBlog)
      props.likeBlog(response)
    } catch (ex) {
      console.log(ex)
    }
  }

  const blogDeleteHandler = async (event) => {
    event.preventDefault()
    try {
      const blogId = event.target.getAttribute('data-blog-id')
      const blog = props.blogs.find(blog => blog.id === blogId)

      if (window.confirm(`Remove ${blog.title} by ${blog.author}?`)) {
        await blogService.deleteBlog(blogId)
        props.deleteBlog(blog)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(blogHook, [])

  useEffect(userHook, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.setUserToken(user)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div className="App">
      <Router>
        {props.userToken === null ?
          <LoginForm
            username={username}
            password={password}
            loginHandler={loginHandler}
          />
          : <div>
            <Navigation logoutHandler={logoutHandler} />
            <h1>Blogs</h1>
            <Route exact path="/" render={() =>
              <Togglable buttonlabel="Add a blog">
                <BlogCreation
                  author={author}
                  title={title}
                  url={url}
                  submitHandler={blogCreateHandler}
                />
              </Togglable>
            } />
            <Route exact path="/" render={() =>
              <BlogList
                logoutHandler={logoutHandler}
              />
            } />
            <Route exact path="/users" render={() => <Users />} />
            <Route path="/users/:id" render={({ match }) =>
              <User user={props.users.find(user => user.id === match.params.id)} />
            } />
            <Route path="/blogs/:id" render={({ match }) =>
              <SingleBlog blog={props.blogs.find(user => user.id === match.params.id)} blogLikeHandler={blogLikeHandler} blogDeleteHandler={blogDeleteHandler} />
            } />

          </div>
        }
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    userToken: state.userToken,
    users: state.users
  }
}

const mapDispatchToProps = {
  createStatusMessage,
  createBlog,
  initializeBlogs,
  likeBlog,
  deleteBlog,
  setUserToken,
  resetUserToken,
  initializeUsers,
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default connectedApp
