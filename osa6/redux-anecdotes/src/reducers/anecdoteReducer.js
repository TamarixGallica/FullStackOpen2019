import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.post(content)
    dispatch({
      type: 'add',
      data: {
        anecdote
      }
    })
  }
}

const voteAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.put(content)
    dispatch({
      type: 'vote',
      data: {
        anecdote
      }
    })
  }
}

const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'initialize',
      data: anecdotes,
      })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'vote':
      const id = action.data.anecdote.id
      const votedAnecdote = state.find(x => x.id === id)
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