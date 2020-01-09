import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BlogList from './components/BlogList'
import BlogCreation from './components/BlogCreation'
import LoginForm from './components/LoginForm'
import UserInfo from './components/UserInfo'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import { useField } from './hooks'
import { createStatusMessage } from './reducers/statusMessageReducer'
import { createBlog, initializeBlogs, likeBlog, deleteBlog } from './reducers/blogReducer'

function App(props) {
  const username = useField('text')
  const password = useField('password')
  const [user, setUser] = useState(null)
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const hook = () => {
    blogService.getAll()
      .then(response => {
        props.initializeBlogs(response)
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
      setUser(user)
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
    setUser(null)
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

  useEffect(hook, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div className="App">
      {user === null ?
        <LoginForm
          username={username}
          password={password}
          loginHandler={loginHandler}
        />
        : <div>
          <h1>Blogs</h1>
          <UserInfo
            username={user.username}
            logoutHandler={logoutHandler}
          />
          <Togglable buttonlabel="Add a blog">
            <BlogCreation
              author={author}
              title={title}
              url={url}
              submitHandler={blogCreateHandler}
            />
          </Togglable>
          <BlogList
            username={user.username}
            logoutHandler={logoutHandler}
            blogLikeHandler={blogLikeHandler}
            blogDeleteHandler={blogDeleteHandler}
          />
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = {
  createStatusMessage,
  createBlog,
  initializeBlogs,
  likeBlog,
  deleteBlog,
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default connectedApp
