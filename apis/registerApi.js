import axios from 'axios';
import { REGISTER_API, VERIFY_API } from './api';

//---
//const API_BASE_URL = 'http://192.168.60.214:8080/api/user';


export const registerUser = async (params) => {//userData
  const response = await axios.post(REGISTER_API, params, {
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      'Content-Type': "application/x-www-form-urlencoded",
    },
  })
    .then((res) => {
      console.log("regsiterResponse+++", res)
      return res.data;
    })
    .catch((err) => {
      console.log('RegsisterErr', err.response.data)
      return err.response.data
    })
  return response;
};

export const verifyOTP = async (email, otp) => {
  const response = await axios.post(VERIFY_API, { email, otp }, {

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
      console.log('err', err.response.data)
      return err.response.data
    })
  return response;
};

export default registerUser;


// export const registerUser = (name, email, password,) => {//userData
//   try {
//     return fetch(REGISTER_API, name, email, password,);
//     //return axios.post(`${API_BASE_URL}/signup`, name, email, password,);
//   } catch (error) {
//     console.log(error)
//     return error;
//   }
// };



// export const verifyOTP = (email, otp) => {
//   try {
//     return fetch(VERIFY_API, { email, otp });
//     //return axios.post(`${API_BASE_URL}/verifyEmail`, { email, otp });
//   }
//   catch (error) {
//     console.log(error);
//     return error;
//   }
// };
