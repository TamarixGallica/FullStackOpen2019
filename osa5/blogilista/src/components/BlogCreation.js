import React from 'react'
import PropTypes from 'prop-types'
import ToastMessage from './ToastMessage'

const BlogCreation = ({ title, author, url, submitHandler, statusMessage }) => {
  return (
    <div>
      <h2>Create new</h2>
      <form>
        <p>
          title: <input {...title} /><br />
          author: <input {...author} /><br />
          url: <input {...url} /><br />
          <input type="submit" value="Create" onClick={submitHandler} />
        </p>
        { statusMessage.message && <ToastMessage type={statusMessage.type} message={statusMessage.message} /> }
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