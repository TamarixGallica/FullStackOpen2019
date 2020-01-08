import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

const blog = {
  title: 'Test title',
  author: 'Author McTest',
  likes: 5,
}

test('renders content', () => {

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

test('like button works', async () => {
  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler}/>
  )

  const button = getByText('like')

  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})
