import React, { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import BlogCreation from './components/BlogCreation'
import LoginForm from './components/LoginForm'
import UserInfo from './components/UserInfo'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [statusMessage, setStatusMessage] = useState({
    type: '',
    message: ''
  })

  const usernameHandler = (e) => setUsername(e.target.value)
  const passwordHandler = (e) => setPassword(e.target.value)
  const authorHandler = (e) => setAuthor(e.target.value)
  const titleHandler = (e) => setTitle(e.target.value)
  const urlHandler = (e) => setUrl(e.target.value)

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
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password })
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      setUser(user)
      blogService.setToken(user.token)
      setUsername('')
      setPassword('')
    } catch (ex) {
      displayMessage('error', 'Login failed due to invalid credentials')
    }
  }

  const logoutHandler = (event) => {
    event.preventDefault();
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  const blogCreateHandler = async (event) => {
    event.preventDefault()
    try {
      const blog = await blogService.addBlog({ title, author, url })
      setBlogs(blogs.concat(blog))
      setTitle('')
      setAuthor('')
      setUrl('')
      displayMessage('success', `Blog ${blog.title} by ${blog.author} was successfully added`)
    } catch (ex) {
      displayMessage('error', 'Blog couldn\'t be created because an error occured')
    }
  }

  const blogLikeHandler = async (event) => {
    event.preventDefault()
    try {
      const blogId = event.target.getAttribute("data-blog-id")
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

  useEffect(hook, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
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
          usernameHandler={usernameHandler}
          password={password}
          passwordHandler={passwordHandler}
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
              authorHandler={authorHandler}
              title={title}
              titleHandler={titleHandler}
              url={url}
              urlHandler={urlHandler}
              submitHandler={blogCreateHandler}
              statusMessage={statusMessage}
            />
          </Togglable>
          <BlogList
            username={user.username}
            blogs={blogs}
            logoutHandler={logoutHandler}
            blogLikeHandler={blogLikeHandler}
          />
        </div>
      }
    </div>
  );
}

export default App;
