import axios from 'axios';
import {baseUrl} from './constraints/constant'
const instance = axios.create({
    baseURL: baseUrl,
    
  });
  export default instance