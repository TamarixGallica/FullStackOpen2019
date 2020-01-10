import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Header, Input } from 'semantic-ui-react'
import ToastMessage from './ToastMessage'

const BlogCreation = ({ title, author, url, submitHandler }) => {
  // eslint-disable-next-line no-unused-vars
  const { reset: r1, ...newTitle } = title
  // eslint-disable-next-line no-unused-vars
  const { reset: r2, ...newAuthor } = author
  // eslint-disable-next-line no-unused-vars
  const { reset: r3, ...newUrl } = url
  return (
    <div>
      <Header as='h2'>Create new</Header>
      <Form>
          title: <Input {...newTitle} /><br />
          author: <Input {...newAuthor} /><br />
          url: <Input {...newUrl} /><br />
        <Button primary onClick={submitHandler}>Create</Button>
        <ToastMessage />
      </Form>
    </div>
  )
}

BlogCreation.propTypes = {
  title: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
  submitHandler: PropTypes.func.isRequired,
  statusMessage: PropTypes.object
}

export default BlogCreation