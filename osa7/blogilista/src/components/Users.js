import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Header, Table } from 'semantic-ui-react'

const Users = (props) => {
  return (
    <div>
      <Header as='h2'>Users</Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Blogs created</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(props.users2, (user) =>
            <Table.Row key={user.id}>
              <Table.Cell data-cy="users-user"><Link to={`/users/${user.id}`}>{user.name}</Link></Table.Cell>
              <Table.Cell data-cy="users-blogcount">{user.blogs.length}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    users: _.countBy(state.blogs, 'user.name'),
    users2: state.users
  }
}

const connectedUsers = connect(mapStateToProps)(Users)
export default connectedUsers
