import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cms-server-wicaksono.herokuapp.com/'
})

export default instance
