import React from 'react';

const App = ({ store }) => {
  const anecdotes = store.getState()

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
    store.dispatch({
      type: 'add',
      data: {
        anecdote
      }
    })
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