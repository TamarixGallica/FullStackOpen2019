
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import statusMessageReducer from './reducers/statusMessageReducer'
import blogReducer from './reducers/blogReducer'
import userTokenReducer from './reducers/userTokenReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  statusMessage: statusMessageReducer,
  blogs: blogReducer,
  userToken: userTokenReducer,
  users: userReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)