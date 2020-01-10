import React from 'react'
import { connect } from 'react-redux'

const UserInfo = (props) => {
  return (
    <span>{props.username} logged in <input type="submit" value="logout" onClick={props.logoutHandler} /></span>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.userToken.username
  }
}

const connectedUserInfo = connect(mapStateToProps)(UserInfo)
export default connectedUserInfo
