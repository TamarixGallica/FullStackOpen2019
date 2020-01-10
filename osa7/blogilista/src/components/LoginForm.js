import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Header, Input } from 'semantic-ui-react'
import ToastMessage from './ToastMessage'

const LoginForm = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { reset: r1, ...newUsername } = props.username
  // eslint-disable-next-line no-unused-vars
  const { reset: r2, ...newPassword } = props.password
  return (
    <div>
      <Header as='h1'>Login to application</Header>
      <Form>
          username <Input {...newUsername} /><br />
          password <Input {...newPassword} /><br />
        <Button primary onClick={props.loginHandler}>Login</Button>
        { props.message && <ToastMessage />}
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    type: state.statusMessage.type,
    message: state.statusMessage.message
  }
}

const connectedLoginForm = connect(mapStateToProps)(LoginForm)
export default connectedLoginForm
