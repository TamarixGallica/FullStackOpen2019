import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'


const UserInfo = (props) => {
  return (
    <span>{props.username} logged in <Button onClick={props.logoutHandler}>logout</Button></span>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.userToken.username
  }
}

const connectedUserInfo = connect(mapStateToProps)(UserInfo)
export default connectedUserInfo
