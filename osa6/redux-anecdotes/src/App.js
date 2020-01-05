import React from 'react';
import _ from 'lodash'
import { createAnecdote } from './reducers/anecdoteReducer'

const App = ({ store }) => {
  const anecdotes = _.orderBy(store.getState(), ['votes'], ['desc'])

  const vote = (id) => {
    store.dispatch({
      type: 'vote',
      data: {
        id
      }
    })
  }

  const add = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    store.dispatch(createAnecdote(anecdote))
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App