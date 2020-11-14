import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://server-cms-e-commers.herokuapp.com'
})

export default instance
