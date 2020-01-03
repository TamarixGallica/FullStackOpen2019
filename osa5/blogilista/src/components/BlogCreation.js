import React from 'react'
import PropTypes from 'prop-types'
import ToastMessage from './ToastMessage'

const BlogCreation = ({ title, titleHandler, author, authorHandler, url, urlHandler, submitHandler, statusMessage }) => {
  return (
    <div>
      <h2>Create new</h2>
      <form>
        <p>
          title: <input type="text" value={title} onChange={titleHandler} /><br />
          author: <input type="text" value={author} onChange={authorHandler} /><br />
          url: <input type="text" value={url} onChange={urlHandler} /><br />
          <input type="submit" value="Create" onClick={submitHandler} />
        </p>
        { statusMessage.message && <ToastMessage type={statusMessage.type} message={statusMessage.message} /> }
      </form>
    </div>
  )
}

BlogCreation.propTypes = {
  title: PropTypes.string.isRequired,
  titleHandler: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  authorHandler: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  urlHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  statusMessage: PropTypes.object
}

export default BlogCreation