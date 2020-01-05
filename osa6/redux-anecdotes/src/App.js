import React from 'react';
import _ from 'lodash'
import AnecdoteForm from './components/AnecdoteForm'

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
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App