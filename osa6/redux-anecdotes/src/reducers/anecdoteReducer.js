const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const createAnecdote = (content) => {
  return {
    type: 'add',
    data: {
      anecdote: content
    }
  }
}

const voteAnecdote = (anecdote) => {
  return {
    type: 'vote',
    data: {
      anecdote
    }
  }
}

const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'initialize',
    data: anecdotes,
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'vote':
      const id = action.data.anecdote.id
      const votedAnecdote = state.find(x => x.id === id)
      votedAnecdote.votes += 1
      return state.map((anecdote) => 
        anecdote.id !== id ? anecdote : votedAnecdote)
    case 'add':
      return [...state, action.data.anecdote]
    case 'initialize':
      return action.data
    default:
      return state
  }
}

export default reducer
export { createAnecdote, voteAnecdote, initializeAnecdotes, asObject }