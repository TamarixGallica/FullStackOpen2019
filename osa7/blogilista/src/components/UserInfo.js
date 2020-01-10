import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'


const UserInfo = (props) => {
  return (
    <span data-cy="userinfo">{props.username} logged in <Button data-cy="userinfo-logout" onClick={props.logoutHandler}>logout</Button></span>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.userToken.username
  }
}

const connectedUserInfo = connect(mapStateToProps)(UserInfo)
export default connectedUserInfo
