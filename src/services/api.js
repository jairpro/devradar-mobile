import axios from 'axios';
import { API_URL } from '../../.env.json';

const api = axios.create({
  // pelo emulador mac:
  //baseURL: 'http://localhost:3333',

  // pelo emulador android:
  //baseURL: 'http://10.0.0.2.2:3333',

  // disp. físico:
  //baseURL: 'http://192.168.0.11:3333',
  
  // servidor web
  baseURL: API_URL,

});

export default api;
