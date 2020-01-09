import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithRedux } from '../testhelper'
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

const userToken = {
  token: 'token',
  username: 'Brian Kottarainen',
  name: 'Brian Kottarainen',
}

test('details are not visible by default', () => {


  const component = renderWithRedux(
    <Blog
      blog={blog}
      blogLikeHandler={function () {}}
      blogDeleteHandler={function () {}}
    />, { initialState: { userToken } }
  )

  expect(component.container).toHaveTextContent(
    `${blog.title} ${blog.author}`
  )

  expect(component.container).not.toHaveTextContent(
    blog.url
  )
})

test('details are shown after clicking on title row', async () => {
  const component = renderWithRedux(
    <Blog
      blog={blog}
      username='Brian Kottarainen'
      blogLikeHandler={function () {}}
      blogDeleteHandler={function () {}}
    />, { initialState: { userToken } }
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
