import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import BlogList from './components/BlogList'
import BlogCreation from './components/BlogCreation'
import LoginForm from './components/LoginForm'
import UserInfo from './components/UserInfo'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import { useField } from './hooks'

function App() {
  const username = useField('text')
  const password = useField('password')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')
  const [statusMessage, setStatusMessage] = useState({
    type: '',
    message: ''
  })

  const hook = () => {
    blogService.getAll()
      .then(response => {
        setBlogs(response)
      })
  }

  const displayMessage = (type, message) => {
    setStatusMessage({
      type: type,
      message: message
    })
    setTimeout(() => {
      setStatusMessage({
        type: '',
        message: ''
      })
    }, 3000)
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
      setBlogs(blogs.concat(blog))
      title.reset()
      author.reset()
      url.reset()
      displayMessage('success', `Blog ${blog.title} by ${blog.author} was successfully added`)
    } catch (ex) {
      displayMessage('error', 'Blog couldn\'t be created because an error occured')
    }
  }

  const blogLikeHandler = async (event) => {
    event.preventDefault()
    try {
      const blogId = event.target.getAttribute('data-blog-id')
      const blogIndex = blogs.findIndex(blog => blog.id === blogId)
      const blog = blogs[blogIndex]

      const requestBlog = {
        user: blog.user.id,
        likes: blog.likes + 1,
        author: blog.author,
        title: blog.title,
        url: blog.url
      }

      const response = await blogService.likeBlog(blog.id, requestBlog)
      const updatedBlogs = blogs.slice(0)
      updatedBlogs[blogIndex].likes = response.likes
      setBlogs(updatedBlogs)
    } catch (ex) {
      console.log(ex)
    }
  }

  const blogDeleteHandler = async (event) => {
    event.preventDefault()
    try {
      const blogId = event.target.getAttribute('data-blog-id')
      const blog = blogs.find(blog => blog.id === blogId)

      if (window.confirm(`Remove ${blog.title} by ${blog.author}?`)) {
        await blogService.deleteBlog(blogId)
        setBlogs(blogs.filter(blog => blog.id !== blogId))
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
          errorMessage={statusMessage}
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
              statusMessage={statusMessage}
            />
          </Togglable>
          <BlogList
            username={user.username}
            blogs={_.orderBy(blogs, ['likes'], ['desc'])}
            logoutHandler={logoutHandler}
            blogLikeHandler={blogLikeHandler}
            blogDeleteHandler={blogDeleteHandler}
          />
        </div>
      }
    </div>
  )
}

export default App
