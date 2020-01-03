import React from 'react'
import { render } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('renders content', () => {
  const blog = {
    title: 'Test title',
    author: 'Author McTest',
    likes: 5,
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  const authorRowDiv = component.container.querySelector('.author-row')
  expect(authorRowDiv).toHaveTextContent(
    `${blog.title} ${blog.author}`
  )

  expect(component.container).toHaveTextContent(
    `${blog.title} ${blog.author}`
  )

  const likeDiv = component.container.querySelector('.likes')
  expect(likeDiv).toHaveTextContent(
    'blog has 5 likes'
  )
})
