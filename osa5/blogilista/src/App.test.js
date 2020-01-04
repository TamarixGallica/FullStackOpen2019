import React from 'react'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'


describe('<App />', () => {
  test('login dialogue is shown on first visit', async () => {
    const component = render(
      <App />
    )

    component.rerender(<App />)

    await waitForElement(
      () => component.container.querySelector('.App')
    )

    const passwordInput = component.container.querySelector('input[type=password]')

    expect(passwordInput).not.toBe(null)
    expect(component.container).toHaveTextContent('password')
    expect(component.container).not.toHaveTextContent('React patterns')
  })
})