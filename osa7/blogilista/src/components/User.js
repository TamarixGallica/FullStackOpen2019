import React from 'react'
import { Header, List } from 'semantic-ui-react'

const User = ({ user }) => {
  if (!user) {
    return null
  }
  return (
    <div>
      <Header as='h2'>{user.name}</Header>
      <Header as='h3'>Added blogs</Header>
      <List bulleted>
        { user.blogs.map(blog => <List.Item key={blog.id}>{blog.title}</List.Item>)}
      </List>
    </div>
  )
}

export default User
