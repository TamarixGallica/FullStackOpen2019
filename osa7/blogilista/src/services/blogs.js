import axios from 'axios'
import config from '../utils/config'
const baseUrl = `${config.API_ROOT}/blogs`

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

const addCommentToBlog = (blog, comment) => {
  const request = axios.post(`${baseUrl}/${blog.id}/comments`, comment)
  return request.then(response => response.data)
}

const deleteBlog = (blogId) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.delete(`${baseUrl}/${blogId}`, config)
  return request.then(response => response.data)
}

export default { getAll, addBlog, likeBlog, deleteBlog, addCommentToBlog, setToken }