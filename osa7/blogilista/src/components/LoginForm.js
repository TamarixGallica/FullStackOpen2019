import React from 'react'
import { connect } from 'react-redux'
import ToastMessage from './ToastMessage'

const LoginForm = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { reset: r1, ...newUsername } = props.username
  // eslint-disable-next-line no-unused-vars
  const { reset: r2, ...newPassword } = props.password
  return (
    <div>
      <h1>Login to application</h1>
      <form>
        <p>
          username <input {...newUsername} /><br />
          password <input {...newPassword} /><br />
          <input type="submit" value="Login" onClick={props.loginHandler} />
        </p>
        { props.message && <ToastMessage />}
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    type: state.type,
    message: state.message
  }
}

const connectedLoginForm = connect(mapStateToProps)(LoginForm)
export default connectedLoginForm
