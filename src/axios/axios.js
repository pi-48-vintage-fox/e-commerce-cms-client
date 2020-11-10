import axios from 'axios';

const instance = axios.create({
  base_URL: 'http://localhost:3000'
});

export default instance;
