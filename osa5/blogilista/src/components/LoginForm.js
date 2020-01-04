import React from 'react'
import ToastMessage from './ToastMessage'

const LoginForm = ({ username, password, loginHandler, errorMessage }) => {
  return (
    <div>
      <h1>Login to application</h1>
      <form>
        <p>
          username <input {...username} /><br />
          password <input {...password} /><br />
          <input type="submit" value="Login" onClick={loginHandler} />
        </p>
        { errorMessage.message && <ToastMessage type={errorMessage.type} message={errorMessage.message} />}
      </form>
    </div>
  )
}

export default LoginForm
