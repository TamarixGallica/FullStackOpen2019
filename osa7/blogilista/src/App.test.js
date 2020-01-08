import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'
import statusMessageReducer from './reducers/statusMessageReducer'

const renderWithRedux = (
  app,
  { initialState, store = createStore(statusMessageReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{app}</Provider>),
    store,
  }
}

describe('<App />', () => {
  test('login dialogue is shown on first visit', async () => {
    const component = renderWithRedux(
      <App />
    )

    await waitForElement(
      () => component.container.querySelector('.App')
    )

    const passwordInput = component.container.querySelector('input[type=password]')

    expect(passwordInput).not.toBe(null)
    expect(component.container).toHaveTextContent('password')
    expect(component.container).not.toHaveTextContent('React patterns')
  })

  test('list of blogs is shown after logging in', async () => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Donald Tester'
    }

    localStorage.setItem('loggedUser', JSON.stringify(user))

    const component = renderWithRedux(
      <App />
    )

    await waitForElement(
      () => component.container.querySelector('.App')
    )

    expect(component.container).toHaveTextContent('React patterns')
    expect(component.container).toHaveTextContent('Michael Chan')
    expect(component.container).toHaveTextContent('Go To Statement Considered Harmful')
    expect(component.container).toHaveTextContent('Edsger W. Dijkstra')
    expect(component.container).toHaveTextContent('Canonical string reduction')
  })
})