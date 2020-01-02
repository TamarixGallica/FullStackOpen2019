import React, { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const usernameHandler = (e) => setUsername(e.target.value)
  const passwordHandler = (e) => setPassword(e.target.value)

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
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (ex) {
      setErrorMessage('Login failed due to invalid credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  }

  useEffect(hook, [])

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
        : <BlogList
            username={user.username}
            blogs={blogs}
          />
        }
    </div>
  );
}

export default App;
