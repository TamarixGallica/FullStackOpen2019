import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const BlogListItem = (props) => {
  const blog = props.blog

  return (
    <Table.Row>
      <Table.Cell>
        <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
      </Table.Cell>
    </Table.Row>
  )
}

export default BlogListItem