import axios from 'axios';
import { REGISTER_API, VERIFY_API } from './api';

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
export default verifyOTP;