import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addBlog = (blog) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.post(baseUrl, blog, config)
  return request.then(response => response.data)
}

const likeBlog = (blogId, blogData) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.patch(`${baseUrl}/${blogId}`, blogData, config)
  return request.then(response => response.data)

}

export default { getAll, addBlog, likeBlog, setToken }