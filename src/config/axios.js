import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-rivari.herokuapp.com'
})

export default instance
