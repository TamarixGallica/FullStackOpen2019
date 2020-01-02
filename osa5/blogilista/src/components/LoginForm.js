import React from 'react'
import ErrorMessage from './ErrorMessage'

const LoginForm = ({ username, usernameHandler, password, passwordHandler, loginHandler, errorMessage }) => {
  return (
    <div>
      <h1>Login to application</h1>
      <form>
        <p>
          username <input type="text" value={username} onChange={usernameHandler} /><br />
          password <input type="password" value={password} onChange={passwordHandler} /><br />
          <input type="submit" value="Login" onClick={loginHandler} />
        </p>
        { errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </div>
  )
}

export default LoginForm
