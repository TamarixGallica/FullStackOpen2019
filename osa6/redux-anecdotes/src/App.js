import React from 'react';
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = ({ store }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter store={store} />
      {/* <Notification store={store} /> */}
      <AnecdoteList store={store} />
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App