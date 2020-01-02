import React, { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import BlogCreation from './components/BlogCreation'
import LoginForm from './components/LoginForm'
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
  const [errorMessage, setErrorMessage] = useState('')

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
      setErrorMessage('Login failed due to invalid credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
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
          errorMessage={errorMessage}
        />
        : <div>
          <BlogCreation
            author={author}
            authorHandler={authorHandler}
            title={title}
            titleHandler={titleHandler}
            url={url}
            urlHandler={urlHandler}
            submitHandler={blogCreateHandler}
          />
          <BlogList
            username={user.username}
            blogs={blogs}
            logoutHandler={logoutHandler}
          />
        </div>
      }
    </div>
  );
}

export default App;
