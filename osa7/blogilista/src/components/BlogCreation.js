import React from 'react'
import PropTypes from 'prop-types'
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
      <h2>Create new</h2>
      <form>
        <p>
          title: <input {...newTitle} /><br />
          author: <input {...newAuthor} /><br />
          url: <input {...newUrl} /><br />
          <input type="submit" value="Create" onClick={submitHandler} />
        </p>
        <ToastMessage />
      </form>
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