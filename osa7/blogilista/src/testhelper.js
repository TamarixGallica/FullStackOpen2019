import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import statusMessageReducer from './reducers/statusMessageReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  statusMessage: statusMessageReducer,
  blogs: blogReducer,
  user: userReducer,
})

const renderWithRedux = (
  app,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{app}</Provider>),
    store,
  }
}


export { renderWithRedux }