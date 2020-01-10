import axios from 'axios'
import config from '../utils/config'

const baseUrl = `${config.API_ROOT}/users`

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }