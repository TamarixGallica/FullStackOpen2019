import React from 'react'

const BlogCreation = ({ title, titleHandler, author, authorHandler, url, urlHandler, submitHandler }) => {
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
      </form>
    </div>
  )
}

export default BlogCreation