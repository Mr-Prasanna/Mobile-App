// api/authApi.js
import axios from 'axios';
import { LOGIN_API } from './api';

// const API_BASE_URL = 'http://192.168.60.214:8080/api/user';

export const login = async (params) => {

  const response = await axios.post(LOGIN_API, params, {
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      'Content-Type': "application/x-www-form-urlencoded",
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error :', err.response.data)
      return err.response.data;
    })
  return response;
};

export default login;
