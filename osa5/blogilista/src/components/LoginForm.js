import React from 'react'
import ToastMessage from './ToastMessage'

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
        { errorMessage.message && <ToastMessage type={errorMessage.type} message={errorMessage.message} />}
      </form>
    </div>
  )
}

export default LoginForm
