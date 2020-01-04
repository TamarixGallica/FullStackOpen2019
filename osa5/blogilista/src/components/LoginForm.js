import React from 'react'
import ToastMessage from './ToastMessage'

const LoginForm = ({ username, password, loginHandler, errorMessage }) => {
  // eslint-disable-next-line no-unused-vars
  const { reset: r1, ...newUsername } = username
  // eslint-disable-next-line no-unused-vars
  const { reset: r2, ...newPassword } = password
  return (
    <div>
      <h1>Login to application</h1>
      <form>
        <p>
          username <input {...newUsername} /><br />
          password <input {...newPassword} /><br />
          <input type="submit" value="Login" onClick={loginHandler} />
        </p>
        { errorMessage.message && <ToastMessage type={errorMessage.type} message={errorMessage.message} />}
      </form>
    </div>
  )
}

export default LoginForm
