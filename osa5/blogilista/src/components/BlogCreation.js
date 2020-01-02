import React from 'react'
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

export default BlogCreation