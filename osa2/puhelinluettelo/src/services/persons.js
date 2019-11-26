import axios from 'axios'
const baseurl = 'http://localhost:3001/persons'

const getall = () => {
    return axios.get(baseurl)
}

const create = person => {
    return axios.post(baseurl, person)
} 

const update = (id, person) => {
    return axios.put(`${baseurl}/${id}`, person)
}

const remove = id => {
    return axios.delete(`${baseurl}/${id}`)
}

export default { getall, create, update, remove }