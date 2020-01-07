import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (anecdote) => {
  console.log('post', anecdote)
  const response = await axios.post(baseUrl, anecdote)
  return response.data
}

export default { getAll, post }
