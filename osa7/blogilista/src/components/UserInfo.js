import React from 'react'
import { connect } from 'react-redux'

const UserInfo = (props) => {
  return (
    <div>{props.username} logged in <input type="submit" value="logout" onClick={props.logoutHandler} /></div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

const connectedUserInfo = connect(mapStateToProps)(UserInfo)
export default connectedUserInfo
