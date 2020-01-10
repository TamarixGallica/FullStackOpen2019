import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'

const style = {
  padding: '3px',
}

const Navigation = (props) => {
  return (
    <div style={{ backgroundColor: 'lightgray', padding: '3px' }}>
      <Link style={style} to="/">Blogs</Link>
      <Link style={style} to="/users">Users</Link>
      <UserInfo style={style} logoutHandler={props.logoutHandler} />
    </div>
  )
}

const connectedNavigation = connect()(Navigation)
export default connectedNavigation