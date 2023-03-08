import axios from 'axios';

const BASE_URL = 'https://api.punkapi.com/v2/'

const $axios = axios.create({
  baseURL: BASE_URL
});

export default $axios;