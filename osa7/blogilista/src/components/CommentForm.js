import React, { useState } from 'react'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import { addComment } from '../reducers/blogReducer'

const CommentForm = (props) => {
  const [comment, setComment] = useState('')

  const commentHandler = (event) => {
    setComment(event.target.value)
  }

  const commentAddHandler = async () => {
    const blog = await blogService.addCommentToBlog(props.blog, { comment })
    props.addComment(blog)
    setComment('')
  }

  return (
    <div>
      <input type="text" value={comment} onChange={commentHandler} />
      <input type="button" value="Add comment" onClick={commentAddHandler} />
    </div>
  )
}

const mapDispatchToProps = {
  addComment,
}

const connectedForm = connect(null, mapDispatchToProps)(CommentForm)
export default connectedForm