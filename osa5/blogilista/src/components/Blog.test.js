import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

const blog = {
  id: '43741098abdef771',
  title: 'Test title',
  author: 'Author McTest',
  likes: 5,
  url: 'https://www.google.fi',
  user: {
    username: 'test'
  }
}

test('details are not visible by default', () => {
  const component = render(
    <Blog
      blog={blog}
      username='Brian Kottarainen'
      blogLikeHandler={function () {}}
      blogDeleteHandler={function () {}}
    />
  )

  expect(component.container).toHaveTextContent(
    `${blog.title} ${blog.author}`
  )

  expect(component.container).not.toHaveTextContent(
    blog.url
  )
})

test('details are shown after clicking on title row', async () => {
  const component = render(
    <Blog
      blog={blog}
      username='Brian Kottarainen'
      blogLikeHandler={function () {}}
      blogDeleteHandler={function () {}}
    />
  )

  const link = component.getByText(`${blog.title} ${blog.author}`)

  fireEvent.click(link)

  expect(component.container).toHaveTextContent(
    blog.url
  )

  expect(component.container).toHaveTextContent(
    blog.user.username
  )
})
