import React from 'react'

const UserInfo = ({ username, logoutHandler }) => {
  return (
    <div>{username} logged in <input type="submit" value="logout" onClick={logoutHandler} /></div>
  )
}

export default UserInfo
