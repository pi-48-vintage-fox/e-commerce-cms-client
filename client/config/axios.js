import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-fox.herokuapp.com'
})

export default instance
