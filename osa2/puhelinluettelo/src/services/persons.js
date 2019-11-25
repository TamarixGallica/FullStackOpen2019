import axios from 'axios'
const baseurl = 'http://localhost:3001/persons'

const getall = () => {
    return axios.get(baseurl)
}

const create = person => {
    return axios.post(baseurl, person)
} 

export default { getall, create }